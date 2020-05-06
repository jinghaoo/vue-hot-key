import keyCode from './keycode'
import { VueConstructor } from 'vue'
import { DirectiveBinding } from 'vue/types/options'

interface KeyMap {
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  meta?: boolean;
  keyCode?: number;
  callback: (e: KeyboardEvent) => void;
}

const getKeyMap = (keymap: {[propName: string]: (e: KeyboardEvent) => void}) => Object.keys(keymap).map((input: string) => {
  const result: KeyMap = { callback: () => { console.log(11) } }
  input.split('+').forEach((keyName: string) => {
    switch (keyName.toLowerCase()) {
      case 'ctrl':
      case 'alt':
      case 'shift':
      case 'meta':
        result[keyName as 'ctrl' | 'alt' | 'shift' | 'meta'] = true
        break
      default:
        result.keyCode = keyCode(keyName)
    }
  })
  result.callback = keymap[input]
  return result
})

interface HTMLElementObj extends HTMLElement {
  _keymap: {[propName: string]: string | boolean }[];
}

interface HTMLElementHandle extends HTMLElement {
  _keyHandler: (e: KeyboardEvent) => void;
}

export default {
  install (Vue: VueConstructor) {
    Vue.directive('hotkey', {
      bind (el: HTMLElement, binding: DirectiveBinding) {
        const _keymap: KeyMap[] = getKeyMap(binding.value);
        (el as HTMLElementHandle)._keyHandler = (e: KeyboardEvent) => {
          for (const hotkey of _keymap) {
            hotkey.keyCode === e.keyCode &&
              !!hotkey.ctrl === e.ctrlKey &&
              !!hotkey.alt === e.altKey &&
              !!hotkey.shift === e.shiftKey &&
              !!hotkey.meta === e.metaKey &&
              hotkey.callback(e)
          }
        }
        document.addEventListener('keydown', (el as HTMLElementHandle)._keyHandler)
      },
      unbind (el: HTMLElement) {
        document.removeEventListener('keydown', (el as HTMLElementHandle)._keyHandler)
      }
    })
  }
}
