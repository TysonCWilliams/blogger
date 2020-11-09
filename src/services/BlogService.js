/* eslint-disable no-console */
import { AppState } from '../AppState'
import { api } from './AxiosService'
import router from '../router'

class BlogService {
  async getAllBlogs() {
    try {
      const res = await api.get('/api/blogs')
      // console.log(res)
      AppState.blogs = res.data
      console.log(AppState)
    } catch (error) {
      console.error(error)
    }
  }

  async getBlogById(blogId) {
    try {
      const res = await api.get('/api/blogs/' + blogId)
      // console.log(res)
      AppState.currentBlog = res.data
      console.log(AppState)
    } catch (error) {
      console.error(error)
    }
  }

  async getCommentsByBlogId(blogId) {
    try {
      const res = await api.get('/api/blogs/' + blogId + '/comments')
      console.log(res)
      AppState.currentBlogComments = res.data
      console.log(AppState)
    } catch (error) {
      console.error(error)
    }
  }

  async removeBlog(blogId) {
    try {
      if (window.confirm('Are you sure?')) {
        await api.delete('/api/blogs/' + blogId)
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createBlog(postData) {
    console.log(postData)
    try {
      const res = await api.post('/api/blogs', postData)
      console.log(res)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  async editBlog(blog) {
    try {
      const res = await api.put('/api/blogs/' + blog._id)
      console.log(res)
      router.push({ name: 'Blog', params: { blogId: blog._id } })
    } catch (error) {
      console.error(error)
    }
  }

  async createComment(postData) {
    console.log(postData)
    try {
      const res = await api.post('/api/blogs/blogId/comments', postData)
      console.log(res)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogService = new BlogService()
