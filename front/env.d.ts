/// <reference types="vite/client" />

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AsyncButton from '@/plugins/widgets/AsyncButton.vue'

declare module 'vue' {
  export interface GlobalComponents {
    FontAwesomeIcon: typeof FontAwesomeIcon
    AsyncButton: typeof AsyncButton
  }
}
