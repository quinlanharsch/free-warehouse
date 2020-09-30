import Vue from 'vue'
import Vuex from 'vuex'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{  // default state
    itemList: {
      1: {name:"Sample Supply 1", total: 30, capacity:1000},
      2: {name:"Sample Supply 2", total: 30, capacity:1000},
      3: {name:"Sample Supply 3", total: 30, capacity:1000},
      8: {name:"Sample Supply 8", total: 30, capacity:1000}
    },
		suList:{
      0: {name:"Available Items", itemList: {
        1: 10,
        2: 1,
        8: 1
      }},
			1: {name:"Sample Ambulance", itemList: {
        1: 20,
        3: 1,
        8: 1
      }},
		},
	},
	getters:{
    suList: (state) => {
      return state.suList
    },
		suById: (state) => (suId) => {
			return state.suList[suId]
		},
    itemById: (state) => (suId, itemId) => {
      return state.suList[suId].itemList[itemId]
    },
    itemNameById: (state) => (itemId) => {
      return state.itemList[itemId].name
    },
	},
	mutations:{
    // Remove item qty from the suList completely (from some su_)
		consumeItem(state, suId, itemId, qty) {
      let item = state.suList[suId].itemList[itemId]
			if(state.itemList[itemId].total < qty) {
        item.qty = 0
        state.itemList[itemId].total = 0
        return
      }
			item.qty -= qty
      state.itemList[itemId].total -= qty
		},
    // Add item qty to the suList (to some su_)
    acquireItem(state, suId, itemId, qty) {
      let item = state.suList[suId].itemList[itemId]
      let cap = state.itemList[itemId].capacity
			if(state.itemList[itemId].total + qty > cap) {
        item.qty = cap
        state.itemList[itemId].total = cap
        return
      }
			item.qty += qty
      state.itemList[itemId].total += qty
		},
    // Move itemList from su_ to su0
    storeItem(state, suId, itemId, qty){
      let su0 = state.suList[0].itemList
      let su1 = state.suList[suId].itemList
      if (su1[itemId] > qty) {  // If there is enough in su1
        su0[itemId] += qty
        su1[itemId] -= qty
      } else {
        su1[itemId] -= su0[itemId]
        su0[itemId] = 0
      }
    },
    // Move itemList from su0 to su_
    retrieveItem(state, suId, itemId, qty){
      let su0 = state.suList[0].itemList
      let su1 = state.suList[suId].itemList
      if (su0[itemId] > qty) {  // If there is enough in su0
        su0[itemId] -= qty
        su1[itemId] += qty
      } else {
        su0[itemId] -= su1[itemId]
        su1[itemId] = 0
      }
    },
	},
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
