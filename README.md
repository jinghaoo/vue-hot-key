# vue-hot-key
---

vue-hot-key 是一款基于vue2+的快捷键自定义指令

## 安装

```
npm install --save vue-hot-key
```

## 使用

```html
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
```