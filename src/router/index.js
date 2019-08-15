import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/views/users/user'
import UserList from '@/views/users/edit'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'User',
      component: User
    },
    {
      path: '/users/:id',
      name: 'UserList',
      component: UserList
    }
  ]
})
