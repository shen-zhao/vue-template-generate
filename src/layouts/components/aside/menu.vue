<template>
<div class="menu_nor">
    <div class="menu_item"
        v-for="(parent, index1) in asideMap"
        :key="parent.path"
        v-if="validPermission(parent.meta.id)"
        :class="{'selected': parent.meta.isActive}"
        >
        <div class="menu_item_hd" @click="asideToggle(index1)">
            <i class="item_icon iconfont" :class="parent.meta.icon"></i>
            <span>{{parent.meta.title}}</span>
            <i class="iconfont icon-arrow-down"></i>
        </div>
        <ul class="menu_item_bd" v-show="parent.meta.isActive">
            <Item v-for="(item, index2) in parent.children"
                :key="item.path"
                :index1="index1"
                :index2="index2"
            >
            <router-link :to="{path: item.path, name: item.name}">{{item.meta.title}}</router-link>
            </Item>
        </ul>
    </div>
</div>
</template>

<script>
import Item from './item';

export default {
    name: 'asideItem',
    props: {
        asideMap: {
            type: Array,
            required: true
        },
        permissionList: {
            type: Array,
            required: true
        }
    },
    components: {
        Item
    },
    created() {
        console.log('created-hahahahahhaha');
    },
    mounted() {
        console.log('mounted-hahahahahhaha');
    },
    methods: {
        validPermission(id) {
            console.log(id);
            return this.permissionList.indexOf(id) > -1;
        },
        asideToggle(index) {
            this.asideMap.forEach(function (obj, i) {
                const item = obj;
                if (i != index) {
                    item.meta.isActive = false;
                } else {
                    item.meta.isActive = !item.meta.isActive;
                }
            });
        },
        asideInit(index1, index2) {
            const vm = this;
            const currentRoute = this.$route;
            const pagesRouter = this.asideMap[index1].children[index2].children;
            let i;

            for (i = 0; i < pagesRouter.length; i++) {
                if (pagesRouter[i].name === currentRoute.name) {
                    this.asideMap.forEach(function (obj, n) {
                        const item = obj;
                        if (n == index1) {
                            vm.$set(item.meta, 'isActive', true);
                        } else {
                            vm.$set(item.meta, 'isActive', false);
                        }
                    });
                    break;
                }
            }
        }
    }
};

</script>
<style lang='scss' scoped>
.menu_nor .menu_item {
    border-bottom: 1px solid #17236a;
}

.menu_item_hd {
    text-align: left;
    position: relative;
    padding-left: 25px;
    line-height: 54px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 900;
}

.icon-arrow-down {
    position: absolute;
    right: 20px;
    font-size: 10px;
    transition: transform 0.2s ease;
}

.menu_nor .menu_item.selected {
    .menu_item_hd {
        font-size: 16px;
        color: #8093ff;
    }
    .icon-arrow-down {
        transform: rotate(-180deg);
    }
}

.item_icon {
    font-size: 20px;
    margin-right: 15px;
    vertical-align: middle;
}

ul.menu_item_bd > li {
    box-sizing: border-box;
    line-height: 40px;
    border-top: 1px solid #0e1850;
    font-size: 12px;
    text-align: left;
}
</style>
