// import { createStore, createLogger,Commit,Store as VuexStore, ActionContext, MutationTree, ActionTree, GetterTree, CommitOptions, DispatchOptions } from 'vuex'
// const plugins = [createLogger()]
// //declare state
// export type State = { counter: number };
// const state: State = { counter: 0 };
// export enum MutationTypes {
//   INC_COUNTER = "SET_COUNTER",
//   DEC_COUNTER = "DEC_COUNTER"
// }

// export enum ActionTypes {
//   INC_COUNTER = "SET_COUNTER",
//   DEC_COUNTER = "DEC_COUNTER"
// }
// //Mutation Types
// export type Mutations<S = State> = {
//   [MutationTypes.INC_COUNTER](state: S, payload: number): void;
//   [MutationTypes.DEC_COUNTER](state: S, payload: number): void;
// };



// //define mutations
// const mutations: MutationTree<State> & Mutations = {
//   [MutationTypes.INC_COUNTER](state: State, payload: number) {
//     state.counter += payload;
//   },
//   [MutationTypes.DEC_COUNTER](state: State, payload: number) {
//     state.counter -= payload;
//   }
// };

// //actions

// type AugmentedActionContext = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>;
// } & Omit<ActionContext<State, State>, "commit">;

// // actions interface

// export interface Actions {
//   [ActionTypes.INC_COUNTER](
//     { commit }: AugmentedActionContext,
//     payload: number
//   ): void;
//   [ActionTypes.DEC_COUNTER](
//     { commit }: AugmentedActionContext,
//     payload: number
//   ): void;
// }

// export const actions: ActionTree<State, State> & Actions = {
//   [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
//     commit(MutationTypes.INC_COUNTER, payload);
//   },
//   [ActionTypes.DEC_COUNTER]({ commit }, payload: number) {
//     commit(MutationTypes.DEC_COUNTER, payload);
//   }
// };

// // Getters types
// export type Getters = {
//   doubleCounter(state: State): number;
// };

// //getters

// export const getters: GetterTree<State, State> & Getters = {
//   doubleCounter: state => {
//     console.log("state", state.counter);
//     return state.counter * 2;
//   }
// };
// //setup store type
// export type Store = Omit<
//   VuexStore<State>,
//   "commit" | "getters" | "dispatch"
// > & {
//   commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//     key: K,
//     payload: P,
//     options?: CommitOptions
//   ): ReturnType<Mutations[K]>;
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>;
//   };
// } & {
//   dispatch<K extends keyof Actions>(
//     key: K,
//     payload: Parameters<Actions[K]>[1],
//     options?: DispatchOptions
//   ): ReturnType<Actions[K]>;
// };

// export const store =  createStore({
//   state,
//   mutations,
//   actions ,
//   modules: {
//   },
//   plugins
// })
// export function useStore() {
//   return store as Store;
// }

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