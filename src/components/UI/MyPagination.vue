<template>
    <div class="pagination">
        <my-button
            @click="changePage(page)"
            v-for="page in totalPages"
            class="pagination-btn"
            :class="{active: page === currentPage}"
            :key="page"
        >
            {{page}}
        </my-button>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
    export default {
  components: { MyButton },
        name:"my-pagination",
        props:{
            totalPages:{
                type: Number,
                required: true,
                default: 0,
            },
            currentPage: {
                type: Number,
                required: true,
                default: 0,
            },
            changePage: {
                type: Function,
                required: true,
            }
        }
    }
</script>

<style scoped>
.pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    border: 1px solid;
    margin: 1rem 0;
}
.pagination-btn {
    margin: .1rem;
    border: 1px solid black;
}
.pagination-btn.active {
    background-color: teal;
    color: white;
}
</style>