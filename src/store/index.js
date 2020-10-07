import Vue from 'vue'
import Vuex from 'vuex'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{  // default state
    storageMode: true,
    itemTypes: {
      '1': {name:"Sample Supply 1", total: 30, capacity:50},
      '2': {name:"Sample Supply 2", total: 1, capacity:10},
      '3': {name:"Sample Supply 3", total: 1, capacity:10},
      '8': {name:"Sample Supply 8", total: 2, capacity:10}
    },
		suList:{
      '0': {name:"Available Items", itemList: {
        '1': 10,
        '2': 1,
        '3': 0,
        '8': 1
      }},
			'1': {name:"Sample Ambulance", itemList: {
        '1': 20,
        '2': 0,
        '3': 1,
        '8': 1
      }},
		},
	},
	getters:{
    suList: (state) => {
      return state.suList
    },
    itemTypes: (state) => {
      return state.itemTypes
    },
		suById: (state) => (suId) => {
			return state.suList[suId]
		},
    itemById: (state) => (suId, itemId) => {
      return state.suList[suId].itemList[itemId]
    },
    itemNameById: (state) => (itemId) => {
      return state.itemTypes[itemId].name
    },
    csvData: (state) => {
      const suListKeys = Object.keys(state.suList)
      const itemListKeys = Object.keys(state.itemTypes)
      var csv = new Array(suListKeys.length + 1)
      csv[0] = 'Name'
      itemListKeys.forEach(function(itemId){
         csv[0] += ',' + state.itemTypes[itemId].name
      })
      var i = 1
      suListKeys.forEach(function(suId) {
        csv[i] = state.suList[suId].name
        itemListKeys.forEach(function(itemId){
           csv[i] += ',' + state.suList[suId].itemList[itemId].toString()
        })
        i++
      })
      console.log(csv.join("\n"))
      return encodeURIComponent(csv.join("\n"))
    }
	},
	mutations:{
    // createItemType(state, payload) {
    //   //todo this
    // },
    toggleStorageMode(state) {
      state.storageMode = !state.storageMode
    },

    // Remove item qty from the suList completely (from some su_)
		consumeItem(state, payload) {
      const suId = payload['suId']
      const itemId = payload['itemId']
      const qty = payload['qty']

      console.log(suId, itemId, qty)
      const itemLs = state.suList[suId].itemList
			if(itemLs[itemId] - qty >= 0) {
        itemLs[itemId] -= qty
        state.itemTypes[itemId].total -= qty
      }
		},
    // Add item qty to the suList (to some su_)
    acquireItem(state, payload) {
      const suId = payload['suId']
      const itemId = payload['itemId']
      const qty = payload['qty']

      console.log(suId, itemId, qty)
      const itemLs = state.suList[suId].itemList
      const iType = state.itemTypes[itemId]
      console.log(itemLs, iType.capacity)
			if(iType.total + qty <= iType.capacity) {
        itemLs[itemId] += qty
        state.itemTypes[itemId].total += qty
      }
		},

    // Move itemList from su_ to su0
    storeItem(state, payload) {
      const suId = payload['suId']
      const itemId = payload['itemId']
      const qty = payload['qty']

      const su0 = state.suList[0].itemList
      const su1 = state.suList[suId].itemList
      if (su1[itemId] >= qty) {  // If there is enough in su1
        su0[itemId] += qty
        su1[itemId] -= qty
      }
    },
    // Move itemList from su0 to su_
    retrieveItem(state, payload) {
      const suId = payload['suId']
      const itemId = payload['itemId']
      const qty = payload['qty']

      const su0 = state.suList[0].itemList
      const su1 = state.suList[suId].itemList
      if (su0[itemId] >= qty) {  // If there is enough in su0
        su0[itemId] -= qty
        su1[itemId] += qty
      }
    },

    // updating with v-model
    updateQuantity(state, payload){
      const suId = payload['suId']
      const itemId = payload['itemId']
      const qty = parseInt(payload['qty'], 10)

      const itemLs = state.suList[suId].itemList
      const diff = qty - itemLs[itemId]

      if (!state.storageMode){
        const iType = state.itemTypes[itemId]
        // between 0 and cap // suid==0 for if in store mode and su0 is edited
        if (qty >= 0 && iType.total + diff <= iType.capacity){
          itemLs[itemId] = qty
          state.itemTypes[itemId].total += diff
        }

      } else { // is storageMode
        const su0 = state.suList[0].itemList
        const su1 = state.suList[suId].itemList
        // diff pos if retr
        if (su0[itemId] >= diff && su1[itemId] >= (diff * -1)){
          su0[itemId] -= diff
          su1[itemId] += diff
        }
      }
    },
	},
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
