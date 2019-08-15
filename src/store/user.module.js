import { UsersService } from "@/common/api.service";
import API_URL from "@/common/config";
import { FETCH_USERS, FETCH_USERS_PAGINATION, FETCH_SINGLE_USER, EDIT_USER } from "./actions.type";

const initialState = {
    users: [],
    usersPagination: {},
    user: {}
};

export const state = { ...initialState };

export const getters = {
    users(state) {
        return state.users;
    },
    usersPagination(state) {
        return state.usersPagination;
    },
    user(state) {
        return state.user
    }
}

export const actions = {
    async [FETCH_USERS](context) {
        const { data } = await UsersService.get();
        context.commit(FETCH_USERS, data.data);
    },
    async [FETCH_USERS_PAGINATION](context, page) {
        const { data } = await UsersService.getPagination(page);
        context.commit(FETCH_USERS_PAGINATION, {
            "total": data.total,
            "per_page": data.per_page,
            "current_page": page,
            "last_page": data.total_pages,
            "first_page_url": `${API_URL}?page=1`,
            "last_page_url": `${API_URL}?page=${data.total_pages}`,
            "next_page_url": `${API_URL}?page=${data.page + 1}`,
            "prev_page_url": null,
            "path": API_URL,
            "from": data.page,
            "to": data.per_page,
            "data": data.data,
        });
    },
    async [FETCH_SINGLE_USER](context, id) {
        const { data } = await UsersService.get(id);
        context.commit(FETCH_SINGLE_USER, data.data);
    }
};

export const mutations = {
    [FETCH_USERS](state, data) {
        state.users = data;
    },
    [FETCH_USERS_PAGINATION](state, data) {
        state.usersPagination = data;
    },
    [FETCH_SINGLE_USER](state, data) {
        state.user = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}