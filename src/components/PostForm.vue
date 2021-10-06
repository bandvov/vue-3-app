<template>
    <form @submit.prevent class="form">
      <input class="input" type="text" name="title" v-model="title" />
      <input class="input" type="text" name="text" v-model="text" />
      <my-button class="add-btn" @click="createPost" >Add button</my-button>
      
    </form>
</template>

<script>
import MyButton from './UI/MyButton.vue';
    export default {
  components: { MyButton },
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
  }

</style>