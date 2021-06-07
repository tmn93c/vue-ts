import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ICountState {
  count: number
}

@Module({ dynamic: true, store, name: 'count' })
class Count extends VuexModule implements ICountState {
  public count = 0

  @Mutation
  public SET_COUNT(count: number) {
    this.count += count
  }

  @Action
  public ResetCount() {
    this.SET_COUNT(0)
  }

  @Action
  public async GetCount() {
    // if (this.count === 0) {
    //   throw Error('GetUserInfo: token is undefined!')
    // }
    // const  data  = await getUserInfo({ /* Your params here */ })
    // if (!data) {
    //   throw Error('Verification failed, please Login again.')
    // }
    // const { roles, name, avatar, introduction, email } = data.user
    // // roles must be a non-empty array
    // if (!roles || roles.length <= 0) {
    //   throw Error('GetUserInfo: roles must be a non-null array!')
    // }
    // this.SET_ROLES(roles)
    // this.SET_NAME(name)
    // this.SET_AVATAR(avatar)
    // this.SET_INTRODUCTION(introduction)
    // this.SET_EMAIL(email)
    return this.count;
  }

  @Action
  public async ChangeCount(count: number) {
    this.count+=count;
    this.SET_COUNT(this.count)
  }

}

export const CountModule = getModule(Count)
