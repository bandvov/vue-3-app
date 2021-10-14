<template>
    <div class="navbar">
        <h2 @click="$router.push('/')">
             Navbar
        </h2>
    <div class="buttons">
        <my-button 
            class="button" 
            @click="$router.push(`/posts`)">Posts
        </my-button>
        <my-button 
            @click="$router.push(`/about`)">About
        </my-button>
    </div> 
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
    export default {
  components: { MyButton },
        
    }
</script>

<style scoped>
.navbar {
    background-color: aquamarine;
    display: flex;
    align-items: center;
    padding: 0 1rem;
}
.buttons {
    margin-left: auto;
}
.button {
    margin-right: 1rem;
}
</style>