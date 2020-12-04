/*
eslint
@typescript-eslint/explicit-function-return-type: 0,
@typescript-eslint/no-explicit-any: 0
*/
import FeathersVuexFind from '../FeathersVuexFind'
import FeathersVuexGet from '../FeathersVuexGet'
import FeathersVuexFormWrapper from '../FeathersVuexFormWrapper'
import FeathersVuexInputWrapper from '../FeathersVuexInputWrapper'
import FeathersVuexPagination from '../FeathersVuexPagination'
import FeathersVuexCount from '../FeathersVuexCount'
import { globalModels } from '../service-module/global-models'
import { GlobalModels } from '../service-module/types'

// Augment global models onto VueConstructor and instance
declare module 'vue/types/vue' {
  interface VueConstructor {
    $FeathersVuex: GlobalModels
  }
  interface Vue {
    $FeathersVuex: GlobalModels
  }
}

export const FeathersVuex = {
  install(Vue, options = { components: true }) {
    const shouldSetupComponents = options.components !== false

    // Make $fv available on Vue
    Vue.$FeathersVuex = globalModels
    Vue.$fv = globalModels

    // Make $fv available on component instances
    Vue.prototype.$FeathersVuex = globalModels
    Vue.prototype.$fv = globalModels

    if (shouldSetupComponents) {
      Vue.component('FeathersVuexFind', FeathersVuexFind)
      Vue.component('FeathersVuexGet', FeathersVuexGet)
      Vue.component('FeathersVuexFormWrapper', FeathersVuexFormWrapper)
      Vue.component('FeathersVuexInputWrapper', FeathersVuexInputWrapper)
      Vue.component('FeathersVuexPagination', FeathersVuexPagination)
      Vue.component('FeathersVuexCount', FeathersVuexCount)
    }
  }
}
