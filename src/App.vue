<template>
  <div>
    <div 
      class="post"
      v-for="post in posts"
      :key="post"
    >
      <div>Post: {{post.id}}</div>
      <div><strong>title: </strong>{{post.title}}</div>
      <div><strong>Description: </strong>Lorem ipsum dolor sit amet consectetur.</div>

    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  data:() =>({
  posts: [
    {
      id:1, 
      title:"Lorem ipsum dolor sit amet consectetur.",
      text: "Lorem ipsum dolor sit amet consecte turLorem ipsum dolor sit amet consectetur" 
    },
    {
      id:2, 
      title:"dicta repellendus consequatur itaque blanditiis.",
      text:"Lorem ipsum dolor sit amet consectet urLorem ipsum dolor sit amet conse cteturLorem ipsum dolor sit amet consectetur" 
      },
    {
      id:3, 
      title:"accusamus beatae optio similique eum dolores.",
      text: "Lorem ipsum dolor sit amet cons ecte turLo rem ipsum dolor sit amet consectetur" 
    },
    {
      id:4, 
      title:"qui nihil debitis itaque!.",
      text:"dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur" 
    },
  ] 
  }), 
}
</script>
<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
  }
  .post {
    border: 1px solid teal;
    padding: 1rem;
    margin-top: 1rem;
  }
</style>