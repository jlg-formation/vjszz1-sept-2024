import type { Plugin } from 'vue'
import { vFocus } from './vFocus.directive'
import AsyncButton from './AsyncButton.vue'

export const widgets: Plugin = (app) => {
  app.directive('focus', vFocus)
  app.component('AsyncButton', AsyncButton)
}
