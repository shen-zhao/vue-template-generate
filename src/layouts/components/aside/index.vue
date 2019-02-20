<template>
<div>
    <div class="logo_wrap">
        <img src="@/assets/images/logo_nor.png" alt="">
    </div>
    <Menu :asideMap="asideMap" :permissionList="permissionList"></Menu>
</div>
</template>

<script>
import Menu from './menu';

export default {
    name: 'sidebar',
    data: function () {
        return {
            name: 'dd'
        };
    },
    computed: {
        asideMap() {
            return this.$store.state.permission.asideRouteMap;
        },
        permissionList() {
            return this.$store.state.permission.asidePermission;
        }
    },
    components: {
        Menu
    }
};
</script>
<style lang='scss' scoped>
.logo_wrap {
    text-align: center;
    margin-bottom: 20px;
}
</style>

