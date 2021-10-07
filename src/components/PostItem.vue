<template>
    <div class="post">
      <div>
        <div>Post: {{post.id}}</div>
        <div><strong>title: </strong>{{post.title}}</div>
        <div><strong>Text: </strong>{{post.text}}.</div>
      </div>
      <div class="btns">
        <my-button 
          style="border: 1px solid red" 
          @click="$emit('remove')">Delete
        </my-button>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
            post: {
                type: Object,
                required: true,
                default: {},
            }
        },
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