<template>
  <div class="app">
    <my-input v-model="searchQuery"
    placeholder="Search..." />
    <div class="create-btn">
      <my-button 
        class="add-btn"
        @click="showModal(true)">
        Create Post
      </my-button>
      <my-select v-model="selectedSort" :options="selectOptions"></my-select>
    </div>
    <post-list
      v-if="!isPostLoading"
      :posts="sortedSearchPosts"
      @remove="deleteHandler" 
    />
    <div v-else>Loading...</div>
    <h2 style="color: red;" v-if="!isPostLoading && posts.length ===0">No posts</h2>
  </div>
  <router-view />
  <my-dialog v-model:show="show" :showModal="showModal">
    <post-form 
      :addPost="addPost"
      :showModal="showModal"
      :id="this.posts.length" 
    />
  </my-dialog>
</template>

<script>

import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';
import MyButton from './components/UI/MyButton.vue';
import axios from 'axios';

export default {
  components:{
    PostList,
    PostForm,
    MyButton,
  },
  data:() =>({
    show: false,
  posts: [
  ],
  isPostLoading: true,
  error: false,
  selectedSort:"",
  selectOptions: [
    {value: "title",name: "Title"},
    {value: "body",name: "Body"},
  ],
  searchQuery: "",
  }),
  created(){
    this.fetchPosts();
  },
  methods:{
    addPost(post){
      this.showModal(false);
      this.posts.push(post);
    },
    deleteHandler(id) {
      this.posts = this.posts.filter(post => post.id !==id);
    },
    showModal(status) {
      this.show = status;
    },
    setIsPostLoading(status){
      this.isPostLoading = status;
    },
    fetchPosts(){
   this.setIsPostLoading(true);
   setTimeout(async () => {

     await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(json => this.posts = json.data).catch((err) =>{
    alert('error');
    this.error = true;
  }).finally(()=>{
    this.setIsPostLoading(false);
  });
    },700)
    }
   },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2)=>{
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      })
    },
    sortedSearchPosts() {
      if (this.searchQuery) {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
      return this.sortedPosts;
    }
  }
}
</script>
<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
  }

  .app {
    margin: 1rem;
  }
  .create-btn {
 display: flex;
 justify-content: space-between;
  }
 
</style>