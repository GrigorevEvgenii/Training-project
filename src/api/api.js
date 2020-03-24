import * as axios from 'axios'

let instanceOfAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c891f102-d06b-46c8-81d4-a7cd4255c13b',
    }

});

export let usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instanceOfAxios.get(`users?page=${currentPage}&count=${pageSize}`);
    },

    getProfile(userID) {
       return instanceOfAxios.get(`profile/${userID}`);
    },

    getHeader() {
        return instanceOfAxios.get(`auth/me`);
    },

    unFollowUser(userID) {
        return instanceOfAxios.delete(`follow/${userID}`);
    },

    followUser(userID) {
        return instanceOfAxios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    },
}

export let authAPI = {
    auth() {
        return instanceOfAxios.get(`auth/me`);
    },
}