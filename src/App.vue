<template>
  <div class="app">
    <form @submit.prevent class="form">
      <input class="input" type="text" name="title" v-model="title" />
      <input class="input" type="text" name="text" v-model="text" />
      <button class="btn" type="submit" @click="createPost">Add Post</button>
    </form>
    <div 
      class="post"
      v-for="post in posts"
      :key="post"
    >
      <div>Post: {{post.id}}</div>
      <div><strong>title: </strong>{{post.title}}</div>
      <div><strong>Text: </strong>{{post.text}}.</div>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  data:() =>({
    title:"",
    text:"",
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
    createPost(){
      const post = {
        id: this.posts.length + 1, 
        title: this.title, 
        text: this.text
      }
      this.posts.push(post);
      this.title = "";
      this.text = "";
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
  .post {
    border: 1px solid teal;
    padding: 1rem;
    margin-top: 1rem;
  }
  .app {
    margin: 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .input {
    padding: .5rem;
    margin-bottom: 1rem;
  }
  .btn {
    align-self: flex-end;
    background-color: transparent;
    border: 1px solid teal;
    padding: 0.5rem;
    border-radius: .2rem;
  }
  .btn:hover {
    background-color: teal;
    color: white;
    transition: .1s ease-in-out;
    cursor: pointer;
  }
</style>