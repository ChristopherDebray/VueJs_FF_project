<template>
    <div>
        <h1>
            <slot name="title" />
        </h1>
        <main class="two-column-layout">
            <div>
                <slot name="leftSide" />
            </div>
            <div>
                <slot name="rightSide" />
            </div>
        </main>
    </div>
</template>

<style scoped>
.two-column-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
}

.two-column-layout aside,
.two-column-layout div {
    grid-column: span 1;
}

</style>