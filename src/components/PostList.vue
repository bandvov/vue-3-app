<template>
    <div 
      class="post"
      v-for="post in posts"
      :key="post"
    >
     <post-item :post="post" />
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
  props:{
      posts:{
          type: Array,
          required: true,
          default: []
      }
  }
}
</script>

<style scoped>
  .post {
    border: 1px solid teal;
    padding: 1rem;
    margin-top: 1rem;
  }
</style>