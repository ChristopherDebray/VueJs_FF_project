<template>
    <div class="default-layout">
        <router-view v-slot="{ Component }">
            <Suspense timeout="0">
                <template #default>
                    <component :is="Component"></component>
                </template>
                <template #fallback>
                    <div>Loading...</div>
                </template>
            </Suspense>
        </router-view>
    </div>
</template>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 80%;
    padding-top: 15px;
    margin: 0 auto;
}
</style>