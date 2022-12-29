<template>
    <div>
        <h1>
            <slot name="title" />
        </h1>
        <div class="two-column-layout">
            <aside>
                <slot name="sideBar" />
            </aside>
            <main>
                <slot name="content" />
            </main>
        </div>
    </div>
</template>

<style scoped>
.two-column-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
}

.two-column-layout main {
    grid-column: span 2;
}

.two-column-layout main, .two-column-layout aside {
    padding: 5px;
}
</style>