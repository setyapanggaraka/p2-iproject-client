<script>
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';
export default {
    emits: ["handleGoogle"],
    methods: {
        ...mapActions(useCounterStore, ['handleGoogle']),
        async handleGoogleLogin(response) {
            this.handleGoogle(response)
        }
    }
}
</script>

<template>
    <GoogleLogin :callback="handleGoogle" />
</template>