<template>
    <div>
        <h1> Trade or View your Profile</h1>
        <h6>You may save and load your data</h6>
        <hr>
        <p>Your funds: {{ funds | currency}}</p>
    </div>

</template>
<script>
export default {
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>