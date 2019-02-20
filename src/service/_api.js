function _env() {
    /* var pathList = ['localhost'];
    var url = location.href;
    return url.indexOf(pathList) > -1; */
    return process.env.NODE_ENV || 'production';
}

const rootPath = '/src';
const devApi = {
    //sidebarList
    sidebarList: `${rootPath}/mock/menu_list.json`,

    // 字典-----start
    apiTableList: `${rootPath}/mock/table_list.json`,
    // 字典-----end

    // 登录
    apiSubmitLogin: `${rootPath}/mock/login.json`,

    // 删除
    apiDel: `${rootPath}/mock/common.json`,

    //权限列表
    permissionList: `${rootPath}/mock/permission.json`
};

const proApi = {

    // 列表
    apiTableList: '/list',

    // 登录
    apiSubmitLogin: '/login',

    // 删除
    apiDel: '/del',

    // 添加修改
    apiModOrAdd: '/modOrAdd',

    //权限列表
    permissionList: '/permission'
};
const api = _env() === 'development' ? devApi : proApi;
export default api;

