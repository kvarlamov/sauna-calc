import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app"

/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyBw09Rqa8OVcqJLzqHhNB2EQzBV8Kq8MaE",
  authDomain: "sauna-calc.firebaseapp.com",
  projectId: "sauna-calc",
  storageBucket: "sauna-calc.appspot.com",
  messagingSenderId: "842210472396",
  appId: "1:842210472396:web:b2cd35e59e7ab0b1e5ed69",
  measurementId: "G-Q8415S8Q0Z"
}



// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.directive('focus', {
    update: function(el, binding) {
        var value = binding.value;
        if (value) {
          Vue.nextTick(function() {
            el.focus();
          });
        }
      }
  })

app.mount('#app')
