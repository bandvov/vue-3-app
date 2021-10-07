<template>
     <input 
        class="input" 
        type="text"
        :value="modelValue" 
        @input="updateValue"
       />
</template>

<script>
    export default {
        name: "my-input",
        props:{
          modelValue:[String]
        },
        methods:{
          updateValue(e){
            this.$emit("update:modelValue",e.target.value)
          }
        }
    }
</script>

<style scoped>
 .input {
    padding: .5rem;
    margin-bottom: 1rem;
  }
</style>