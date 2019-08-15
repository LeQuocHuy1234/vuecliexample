<template>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">FIRST NAME</th>
                            <th scope="col">LAST NAME</th>
                            <th scope="col">AVATAR</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in usersPagination.data">
                            <th scope="row">{{ user.id }}</th>
                            <td>{{ user.email }}</td>
                            <td>{{ user.first_name }}</td>
                            <td>{{ user.last_name }}</td>
                            <td><img :src="user.avatar" class="rounded" alt="Cinque Terre"></td>
                            <td><router-link :to="{ name: 'UserList', params: {id: user.id }}">Edit</router-link> / <router-link to="/">Remove</router-link></td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="usersPagination" @pagination-change-page="getUsers"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_USERS_PAGINATION } from '@/store/actions.type'
import pagination from 'laravel-vue-pagination'

export default {
    name: 'User',
    components: {
        pagination
    },
    mounted() {
        this.$store.dispatch(FETCH_USERS_PAGINATION, 1);
    },
    computed: {
        ...mapGetters(['usersPagination'])
    },
    methods: {
        getUsers: function(page = 1) {
            this.$store.dispatch(FETCH_USERS_PAGINATION, page);
        }
    },
}
</script>
