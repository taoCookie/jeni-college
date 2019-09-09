
const setIsAuthenticated = (state, data) => {
    state.isAuthenticated = data;
}

const setUser = (state, data) => {
    state.user = data;
}

const setOpenid = (state, data) => {
    state.openid = data;
}

const setLessonInfo = (state, data) => {
    state.lessonInfo = data;
}
export default{
    setIsAuthenticated,
    setUser,
    setOpenid,
    setLessonInfo
}