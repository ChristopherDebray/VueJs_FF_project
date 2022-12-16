<script setup>
import TwoColumnLayout from '../../layouts/twoColumnDescriptive.vue';
import TwoColumn from '../../layouts/twoColumn.vue';

</script>

<template>
    <TwoColumn>
        <template #leftSide>
            <h1>SideBar</h1>
        </template>
        <template #rightSide>
            <h1>Content</h1>
        </template>
    </TwoColumn>
</template>

<style>

</style>