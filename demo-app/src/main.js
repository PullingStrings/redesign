// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)

firebase.initializeApp({
  apiKey: 'AIzaSyAvb256-97BVBt_FQZdDK0dWIBb7c_NeT8',
  authDomain: 'fuseafrika.firebaseapp.com',
  databaseURL: 'https://fuseafrika.firebaseio.com',
  projectId: 'fuseafrika'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((firebase) => {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
  }
})
