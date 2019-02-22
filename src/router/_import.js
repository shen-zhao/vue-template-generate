/**
 * 模块导入
 * @basePath: pages
 * @param path
 * @returns {function()}
 * @private
 */

export default function _import(path) {
  return () => import(`@/pages/${path}`);
}
