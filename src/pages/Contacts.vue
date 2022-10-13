<template>
    <div>
        <nav-bar :colorMode="'dark'"></nav-bar>
        contacts
    </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
    name: 'Contacts',
    components: { NavBar }
}
</script>