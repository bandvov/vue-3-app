<template>
        <h2>List of posts</h2>
        <post-item
            v-for="post in posts"
            :key="post"
            :post="post"
            @remove="$emit('remove', post.id)"
        />
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
  },
}
</script>

<style>
</style>