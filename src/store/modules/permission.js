import { getPermissions } from '@/service/getdata';
import { asyncRouteMap } from '@/router';

const permission = {
    state: {
        asideRouteMap: [],
        asidePermission: []
    },
    mutations: {
        ADD_ASYNC_ROUTE(state) {
            state.asideRouteMap = asyncRouteMap;
        },
        GET_PERMISSION(state, list) {
            state.asidePermission = list;
        }
    },
    actions: {
        getPermission({ commit }) {
            return new Promise((resolve, reject) => {
                getPermissions().then((data) => {
                    if (data.status === 0) {
                        commit('GET_PERMISSION', data.data.permissionList);
                        resolve(data);
                    } else {
                        reject();
                    }
                }).catch(() => {
                    reject();
                });
            });
        }
    }
};

export default permission;
