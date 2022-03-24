/*导入变量
    商城Vuex-mutations
*/
//最后一步，改变状态
export default {
    saveUserName(state, username) {
        state.username = username;
    },
    saveCartCount(state, count) {
        state.cartCount = count;
    }
}