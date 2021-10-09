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
      v-if="posts.length > 0"
      :posts="posts"
      @remove="deleteHandler" 
    />
    <h2 style="color: red;" v-else>No posts</h2>
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

export default {
  components:{
    PostList,
    PostForm,
    MyButton,
  },
  data:() =>({
    show: false,
  posts: [
    {
      id:1,
      title:"Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consecte turLorem ipsum dolor sit amet consectetur" 
    },
    {
      id:2,
      title:"dicta repellendus consequatur itaque blanditiis.",
      text:"Lorem ipsum dolor sit amet consectet urLorem ipsum dolor sit amet conse cteturLorem ipsum dolor sit amet consectetur" 
      },
    {
      id:3,
      title:"accusamus beatae optio similique eum dolores.",
      text: "Lorem ipsum dolor sit amet cons ecte turLo rem ipsum dolor sit amet consectetur" 
    },
    {
      id:4,
      title:"qui nihil debitis itaque!.",
      text:"dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur" 
    },
  ]
  }),
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