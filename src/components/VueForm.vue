<template>
    <form action="" class="form">
        <vue-input placeholder="Name" class="form__input"> </vue-input>
        <vue-input placeholder="You email" class="form__input"> </vue-input>
        <vue-input placeholder="Enter Text" class="form__input"> </vue-input>
        <vue-button :btnType="'secondary'" class="form__button">Get Started</vue-button>
    </form>
</template>
<script>
    import VueInput from './UI/VueInput.vue'
    import VueButton from './UI/VueButton.vue'
    export default {
        name: 'VueForm', 
        data(){
            return{
                value: ''
            }
        },
        components: {VueInput,VueButton },

    }
</script>
<style lang="scss" scoped>
    .form {
        display: flex;
        flex-direction: column;
        max-width: 298px;

    }
    .form__input{
        margin:0;
        margin-bottom: 16px;
    }
    .form__button{

    }
</style>