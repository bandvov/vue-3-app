<template>
    <div class="post">
      <div>Post: {{post.id}}</div>
      <div><strong>title: </strong>{{post.title}}</div>
      <div><strong>Text: </strong>{{post.text}}.</div>
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
        data:() =>({
            post: {}
        })
    }
</script>

<style scoped>
  .post {
    border: 1px solid teal;
    padding: 1rem;
    margin-top: 1rem;
  }
</style>