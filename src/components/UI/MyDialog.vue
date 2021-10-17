<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div
            @click.stop 
            class="dialog-content"
        >
        <my-button class="close-btn" @click="showModal(false)">
            &times;
        </my-button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "../../mixins/toggleMixin";

    export default {
        name: "my-dialog",
mixins: [toggleMixin]
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
    position: relative;
}

.close-btn {
    position: absolute;
    top:-20px;
    right: -20px;
    border: none;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 2rem;
}
.close-btn:hover {
    background-color: red;
}
</style>