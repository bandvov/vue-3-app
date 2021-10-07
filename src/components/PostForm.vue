<template>
    <form 
      @submit.prevent 
      class="form"
    >
      <my-input
        name="title" 
        v-model="title"
       />
      <my-input
        name="text" 
        v-model="text"
       />
      <my-button
        class="add-btn" 
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
        id: this.id +1, 
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