<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
    export default {
      name:'my-button',
        data:() => ({

        })
    }
</script>
<style scoped>
 .btn {
    background-color: transparent;
    border: 1px solid teal;
    padding: 0.5rem;
    border-radius: .2rem;
  }
  .btn:hover {
    background-color: rgb(255, 18, 18);
    color: white;
    transition: .1s ease-in-out;
    cursor: pointer;
  }
  .add-btn:hover {
    background-color: teal
  }
  
</style>