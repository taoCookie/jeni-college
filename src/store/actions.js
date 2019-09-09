const setIsAuthenticated = ({commit}, data) => {
    commit('setIsAuthenticated', data);
}

const setUser = ({commit}, data) => {
    commit('setUser', data);
}

const setOpenid = ({commit}, data) => {
    commit('setOpenid', data);
}

const setLessonInfo = ({commit}, data) => {
    commit('setLessonInfo', data);
}

export default {
    setIsAuthenticated,
    setUser,
    setOpenid,
    setLessonInfo
}