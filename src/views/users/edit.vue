<template>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="edit">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" class="form-control" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputName">First Name</label>
                                <input type="text" class="form-control" v-model="user.first_name" id="exampleInputName" placeholder="first name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputName">Last Name</label>
                                <input type="text" class="form-control" v-model="user.last_name" id="exampleInputName" placeholder="last name">
                            </div>
                            <button type="submit" class="btn btn-primary">Cap Nhat</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_SINGLE_USER } from '@/store/actions.type'

export default {
    mounted() {
        this.$store.dispatch(FETCH_SINGLE_USER, this.$route.params.id);
    },
    // Khởi tạo đầu tiên, dùng để load ỏ check
    beforeRouteEnter(to, from, next) {
        next();
    },
    // Dùng chuyển hướng sẽ check
    beforeRouteUpdate (to, from, next) {

    },
    // Dùng trước khi redirect sang trang khác
    beforeRouteLeave (to, from, next) {
    
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        edit() {
            console.log(this.user);
        }
    }
}
</script>