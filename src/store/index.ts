import Vue from 'vue'
import Vuex,{createLogger} from 'vuex'
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { ITagsViewState } from './modules/tags-view'
import { IErrorLogState } from './modules/error-log'
import { IPermissionState } from './modules/permission'
import { ISettingsState } from './modules/settings'
import { ICountState } from './modules/count'

export interface IRootState {
  count: ICountState,
  app: IAppState
  user: IUserState
  tagsView: ITagsViewState
  errorLog: IErrorLogState
  permission: IPermissionState
  settings: ISettingsState
}
const plugins = [createLogger()]

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({
  plugins
})