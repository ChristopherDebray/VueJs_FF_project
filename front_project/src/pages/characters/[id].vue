<script setup>
import TwoColumnLayout from '../../layouts/twoColumnDescriptive.vue';

</script>

<template>
    <TwoColumnLayout>
        <template #title>
            Personnage
        </template>
        <template #sideBar>
            <p>SideBar</p>
        </template>
        <template #content>
            <p>Content</p>
        </template>
    </TwoColumnLayout>
</template>

<style>

</style>