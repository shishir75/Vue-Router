<template>
    <div>
        <h1>User Page</h1>
        <h3>
            {{ $route.params.id }}
        </h3>
    </div>


</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>