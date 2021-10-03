<template>
  <div class="app">
    <post-form :addPost="addPost" :id="this.posts.length" />
    <post-list :posts="posts" />
  </div>
  <router-view/>
</template>

<script>

import PostList from './components/PostList.vue';
import PostForm from './components/PostForm.vue';

export default {
  components:{
    PostList,
    PostForm,
  },
  data:() =>({

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
      this.posts.push(post);
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
 
</style>