<template>
    <form 
      @submit.prevent 
      class="form"
    >
      <h3>Create post</h3>
      <my-input
        v-focus
        name="title" 
        v-model="title"
        placeholder="Enter title..."
       />
      <my-input
        name="text" 
        v-model="text"
        placeholder="Enter body..."
       />
      <my-button
        @click="createPost" type="submit"
      >
        Add Post
      </my-button>
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
        id: this.id + 1, 
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
 
  .btn {
    align-self: flex-end;
  }

</style>