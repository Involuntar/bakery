<script setup lang="ts">
import AppHeader from '~/layouts/AppHeader.vue';
import AppFooter from '~/layouts/AppFooter.vue';
</script>

<template>
    <div class="layout">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<style>
.layout {
    height: 100vh;
}
</style>
