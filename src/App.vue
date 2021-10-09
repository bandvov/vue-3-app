<template>
  <div class="app">
    <div class="create-btn">
      <my-button 
        class="add-btn"
        @click="showModal(true)">
        Create Post
      </my-button>
    </div>
    <post-list
      v-if="!isPostLoading"
      :posts="posts"
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
 justify-content: flex-end;
  }
 
</style>