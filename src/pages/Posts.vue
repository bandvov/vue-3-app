<template>
  <div>
    <my-input 
      v-model:value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search..." 
    />
    <div class="create-btn">
      <my-button 
        class="add-btn"
        @click="setShowModal(true)">
        Create Post
      </my-button>
      <my-select 
        v-model:value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="selectOptions"
      ></my-select>
    </div>
    <post-list
      v-if="!isPostLoading"
      :posts="sortedSearchPosts"
      @remove="deleteHandler" 
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadPosts" class="observer"></div>
    <h2 style="color: red;" v-if="!isPostLoading && posts.length ===0">No posts</h2>
  </div>
  <router-view />
  <my-dialog 
    :show="showModal" 
    :showModal="setShowModal"
  >
    <post-form 
      :addPost="addPost"
      :showModal="setShowModal"
      :id="posts.length" 
    />
  </my-dialog>
</template>

<script>

import PostList from '../components/PostList.vue';
import PostForm from '../components/PostForm.vue';
import MyButton from '../components/UI/MyButton.vue';
import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from 'vuex';

export default {
  components:{
    PostList,
    PostForm,
    MyButton,
  },
  mounted(){
    this.fetchPosts();
  },
  computed:{
    ...mapState({
      showModal: (state) => state.post.showModal,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      selectOptions: (state) => state.post.selectOptions,
      totalPages: (state) => state.post.totalPages,
      posts: (state) => state.post.posts,
      error: (state) => state.post.error,
    }),
    ...mapGetters({
       sortedPosts: "post/sortedPosts",
       sortedSearchPosts:"post/sortedSearchPosts",
    }),
  
  },
  methods:{
    addPost(post){
      console.log(post);
      this.setShowModal(false);
      this.setPosts([...this.posts,post])
    },
    deleteHandler(id) {
      this.setPosts(this.posts.filter(post => post.id !==id));
    },   
    ...mapActions({
      fetchPosts:"post/fetchPosts",
      loadPosts: "post/loadPosts",
    }),
    ...mapMutations({
       setShowModal:"post/setShowModal",
       setPosts: "post/setPosts",
       setSelectedSort: "post/setSelectedSort",
       setSearchQuery: "post/setSearchQuery",
    }),
  } 
}
</script>
<style>
 
  .create-btn {
 display: flex;
 justify-content: space-between;
  }
 .observer {
   background-color: green;
   height: 2rem;
 }
</style>