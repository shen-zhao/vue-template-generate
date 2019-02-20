import router, {asyncRouteMap} from './router';
import store from './store';
import { getToken } from './utils/token';

//权限判断
function hasPermission(id, permissionList) {
    return permissionList.indexOf(id) > -1;
}

console.log('firse:', asyncRouteMap);

const whiteList = ['/', '/login', '/404', '/403', '/503'];

router.beforeEach((to, from, next) => {
    console.log('two:', asyncRouteMap);
    if (getToken()) {
        if (to.name == 'login') {
            next('/');
        } else {
            //权限白名单
            if (whiteList.indexOf(to.path) !== -1) {
                return next();
            }
            if (!store.getters.mainRoute.length) {
                store.commit('ADD_ASYNC_ROUTE');
                router.addRoutes(store.getters.mainRoute);
                next({...to, replace: true});
                return;
            }
            store.dispatch('getPermission').then((data) => {
                if (data.status === 0) {
                    if (hasPermission(to.meta.id, data.data.permissionList)) {
                        next();
                    } else {
                        next('/403');
                    }
                } else {
                    next('/503');
                }
            }).catch(() => {
                next('/503');
            });
        }
    } else {
        //登录白名单
        if (whiteList.indexOf(to.path) !== -1) {
            return next();
        }
        next('/login');
    }
});
