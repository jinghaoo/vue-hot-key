<template>
  <div id="app" v-hotkey="hotKeyMap">
    请尝试同时按下 alt+s 键 <br><br>
    请尝试同时按下 ctrl+x 键 <br><br>
    请尝试同时按下 ctrl+c 键 <br><br>
    请尝试同时按下 ctrl+v 键 <br><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  get hotKeyMap () {
    return {
      'alt+s': this.save,
      'ctrl+x': this.ctrlX,
      'ctrl+c': this.ctrlC,
      'ctrl+v': this.ctrlV
    }
  }

  save () {
    alert('alt+s')
  }

  ctrlX () {
    alert('ctrl+x')
  }

  ctrlC () {
    alert('ctrl+c')
  }

  ctrlV () {
    alert('ctrl+v')
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
