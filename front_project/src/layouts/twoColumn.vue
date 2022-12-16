<template>
    <main class="two-column-layout">
        <div>
            <slot name="leftSide" />
        </div>
        <div>
            <slot name="rightSide" />
        </div>
    </main>
</template>

<style scoped>
.two-column-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
}

.two-column-layout aside,
.two-column-layout div {
    background: dodgerblue;
    grid-column: span 1;
}

</style>