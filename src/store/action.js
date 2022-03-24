/*导入变量
    商城Vuex-actions
*/
//传输，方法
export default {
    saveUserName(context, username) {
        context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
        context.commit('saveUserName', count);
    }
}