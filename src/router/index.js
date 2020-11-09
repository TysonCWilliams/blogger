import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// @ts-ignore
import Blog from '../pages/Blog.vue'
// @ts-ignore
import NewBlog from '../pages/NewBlog.vue'
// @ts-ignore
import EditBlog from '../pages/EditBlog.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/posts/:postId',
    name: 'Blog',
    component: Blog,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/newblog',
    name: 'NewBlog',
    component: NewBlog,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/edit/:postId',
    name: 'EditBlog',
    component: EditBlog,
    beforeEnter: Auth0Provider.authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
