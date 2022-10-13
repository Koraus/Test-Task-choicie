<template>
    <input class="input" type="" name="" id="" v-model="value">
</template>
<script>
export default {
    name: 'VueInput',
    props: {

    },
    data() {
        return {
            value: ''
        }
    },
    components: {},

}
</script>
<style lang="scss" scoped>
.input {
    padding: 14px 24px 14px 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    border-radius: 100px;
    background-color: var(--blue-dark);
    border: rgba(59, 33, 134, 1) solid 1px;
    color: var(--white);

    &::placeholder {
        color: #FFFFFF;
    }
}
</style>