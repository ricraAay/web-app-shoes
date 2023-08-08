<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>initDataUnsaf: </h2>
    <pre>{{ initDataUnsaf }}</pre>
    <h2>mainButtonClicked: </h2>
    <pre>{{ counter }}</pre>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import { 
  mapMutations, 
  mapGetters 
} from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    this.injectTelegramWebApp()
  },
  computed: {
    ...mapGetters([
      'telegram'
    ]),
    initDataUnsaf() {
      return this.telegram?.WebApp.initDataUnsafe
    },
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    ...mapMutations([
      'setTelegram'
    ]),
    mainButtonClicked() {
      this.telegram?.WebApp.onEvent('mainButtonClicked', () => {
        this.counter += 1
        this.telegram?.WebApp.sendData("some string that we need to send"); 
      });
    },
    injectTelegramWebApp() {
      this.$loadScript("https://telegram.org/js/telegram-web-app.js").then(() => {
        this.setTelegram(window.Telegram)
      }).catch((e) => {
        console.warn(e)
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
