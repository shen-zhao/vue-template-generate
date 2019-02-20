<template>
<li>
    <slot></slot>
</li>
</template>

<script>
export default {
    props: {
        index1: {
            type: Number,
            required: true
        },
        index2: {
            type: Number,
            required: true
        }
    },
    created() {
        this.$parent.asideInit(this.index1, this.index2);
    }
};

</script>
<style lang="scss" scoped>
a {
    display: block;
    color: #b5c2e0;
    padding-left: 54px;
    box-sizing: border-box;
    background-color: #1c286d;
    border-left: 6px solid transparent;
    &.router-link-active {
        border-left: 6px solid #06ccfc;
        background-color: #3c4b9d;
    }
    &:hover {
        background-color: #3c4b9d;
        color: #fff;
        font-weight: 900;
    }
}
</style>
