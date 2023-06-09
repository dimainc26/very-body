import Vue from 'nativescript-vue'

import Home from './views/Home'
import Onboard from './views/Onboard'


import { ApplicationSettings } from '@nativescript/core'


// Caroussel
Vue.registerElement('Carousel', () => require('@nstudio/nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('@nstudio/nativescript-carousel').CarouselItem);

new Vue({
  render: (h) => h('frame', [h(ApplicationSettings.hasKey("oldUser") ? Home : Onboard)]),
}).$start()
