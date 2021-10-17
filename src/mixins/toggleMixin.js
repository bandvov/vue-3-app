export default {
    props:{
        show:{
            default: false,
            required: true,
            type: Boolean,
        },
        showModal:{
            type: Function,
            default: () => {}
        }
    },
    methods:{
        hideDialog(){
            this.$emit("update:show",false)
        }
    }
}