import { loginReq } from '@/service/getdata';
import { setToken } from '@/utils/token';

const login = {
    state: {
        token: ''
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        }
    },
    actions: {
        userLogin({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginReq(userInfo).then((data) => {
                    if (data.status === 0) {
                        commit('SET_TOKEN', data.token);
                        setToken(data.token);
                        resolve();
                    } else {
                        reject();
                    }
                }).catch(() => {
                    reject();
                });
            });
        },
        userLogout() {
            // return new Promise
        }
    }
};

export default login;
