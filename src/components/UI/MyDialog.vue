<template>
    <div class="dialog" v-if="show">
        <div class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-dialog",
        props:{
            show:{
                default: false,
                required: true,
                type: Boolean,
            }
        }
    }
</script>

<style scoped>
.dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: 1s ease-in-out;
}
.dialog-content {
    margin: auto;
    min-height: 50px;
    background-color: white;
    min-width: 30vw;
    padding: 2rem;
    border-radius: 5px;
}
</style>