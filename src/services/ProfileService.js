import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
// import router from '../router'
import { api } from './AxiosService'

class ProfileService {
  async getProfile() {
    try {
      const res = await api.get('api/profile')
      AppState.profile = res.data
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  async updateUser() {
    try {
      const res = await api.put('api/profile', AppState.user)
      AuthService.loginWithPopup()
      // console.log(test)
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (err) {
    // eslint-disable-next-line no-console
      console.error(err)
    }
  }
}

export const profileService = new ProfileService()
