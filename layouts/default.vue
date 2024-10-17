<script setup lang="ts">
import AppHeader from '~/layouts/AppHeader.vue';
import AppFooter from '~/layouts/AppFooter.vue';
</script>

<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>