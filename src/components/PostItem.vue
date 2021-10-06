<template>
    <div class="post">
      <div>
        <div>Post: {{post.id}}</div>
        <div><strong>title: </strong>{{post.title}}</div>
        <div><strong>Text: </strong>{{post.text}}.</div>
      </div>
      <div class="btns">
       <my-button @click="deleteHandler">Delete</my-button>
      </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
    export default {
  components: { MyButton },
        props:{
            post: {
                type: Object,
                required: true,
                default: {},
            }
        },
        data:() =>({
            post: {}
        }),
        methods: {
          deleteHandler() {
            console.log('delete handler');
          }
        }
    }
</script>

<style scoped>
  .post {
    border: 1px solid teal;
    padding: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
 

</style>