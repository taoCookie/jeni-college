const isAuthenticated = state => state.isAuthenticated;
const user = state => state.user;
const openid = state => state.openid;
const lessonInfo = state => state.lessonInfo;

export default{
    isAuthenticated,
    user,
    openid,
    lessonInfo
}
