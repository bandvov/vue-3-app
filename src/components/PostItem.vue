<template>
    <div class="post">
      <div>
        <div>Post: {{post.id}}</div>
        <div><strong>title: </strong>{{post.title}}</div>
        <div><strong>body: </strong>{{post.body}}.</div>
      </div>
      <div class="btns">
        <my-button
        style="margin-right:1rem"           
          @click="$router.push(`/posts/${post.id}`)">Details
        </my-button>
        <my-button
          class="delete-btn" 
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
  .btns {
    display: flex;
    align-items: center;
  }
 

</style>