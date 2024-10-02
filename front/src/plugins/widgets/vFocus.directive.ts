import type { Directive } from 'vue'

export const vFocus: Directive<HTMLElement> = {
  mounted: (el) => {
    if (el instanceof HTMLInputElement) {
      el.select()
      return
    }
    el.focus()
  }
}
