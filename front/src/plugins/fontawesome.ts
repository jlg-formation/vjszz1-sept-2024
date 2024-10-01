import type { Plugin } from 'vue'

import {
  faRotateRight,
  faPlus,
  faTrashCan,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

export const fontawesome: Plugin = (app) => {
  console.log('app: ', app)
  library.add(faRotateRight, faPlus, faTrashCan, faChevronRight)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}
