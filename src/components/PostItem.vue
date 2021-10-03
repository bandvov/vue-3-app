<template>
    <div>
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

<style lang="scss" scoped>

</style>