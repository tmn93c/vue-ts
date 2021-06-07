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

  @Mutation
  public DEC_COUNT(count: number) {
    this.count -= count
  }

  @Action
  public IncCount() {
    this.SET_COUNT(1)
  }

  @Action
  public DecCount() {
    this.DEC_COUNT(1)
  }
  

  @Action
  public async ChangeCount(count: number) {
    this.SET_COUNT(this.count)
  }

}

export const CountModule = getModule(Count)
