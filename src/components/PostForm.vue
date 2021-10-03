<template>
    <form @submit.prevent class="form">
      <input class="input" type="text" name="title" v-model="title" />
      <input class="input" type="text" name="text" v-model="text" />
      <button class="btn" type="submit" @click="createPost">Add Post</button>
    </form>
</template>

<script>
    export default {
        props:{
            addPost: {
                type: Function,
                required:true,
                default: null
            },
            id: {
                type: Number,
                required: true,
                default: null,
            },
        },
        data:() =>({
            title:"",
            text:"",
        }),
        methods:{
            createPost(){
                   const post = {
        id: this.id, 
        title: this.title, 
        text: this.text
      }
      this.addPost(post);
      this.title = "";
      this.text = "";
            }
        }
    }
</script>

<style scoped>
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