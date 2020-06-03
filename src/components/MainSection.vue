<template>
  <main id="main-section" class="container-full-section nav-section mt-16 relative">
    <div id="svg-container" class="hidden md:block absolute bottom-0 right-0 overflow-hidden" ref="lavContainer"></div>
    <article class="container mx-auto grid grid-cols-12 md:col-gap-16 px-6 md:px-0 z-50">
      <div class="col-span-12 md:col-start-2 md:col-span-5 text-center md:text-left flex items-center content-center">
        <div>
          <h1 class="mb-4 md:mb-6 text-dark-blue leading-tight md:leading-normal text-3xl md:text-4xl">Gestiona los viajes <br class="md:hidden"> de tu equipo de <br class="md:hidden"> forma simple</h1>
          <h2 class="mb-12 md:mb-8 text-lg text-dark-gray">Reserva viajes, guarda sus documentos <br class="hidden md:block"> y analiza gastos.</h2>

          <div class="grid grid-cols-5 md:col-gap-16">
            <div class="col-span-5 md:col-span-4">
              <email-input />
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import lottie from 'lottie-web';
import EmailInput from './EmailInput'

import * as animationData from '@/assets/hero/data.json'

export default {
  components:{
    EmailInput
  },

  methods: {
    loadSVG () {
      const path = require('path')

      fetch( path.resolve('static/hero/data.json') ).then( resp => resp.json() ).then( json => { 
        console.log(json)

        json.assets.filter(asset => asset.id.includes('image')).forEach((asset, index) => {
          json.assets[index].u = path.resolve('static/hero/images/') + '/'
        })

        const animation = lottie.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: 'svg',
          loop: true,
          autoplay: false,
          animationData: json,
          rendererSettings: {
            id: 'svg-animation',
          }
        })

        animation.play()
      })
      
    }
  },

  mounted: function () {
    this.loadSVG()
  }
}
</script>

<style scoped>
  h1 {
    letter-spacing: 0.2px;
  }

  h2 {
    letter-spacing: 0.4px;
    line-height: 26px;
  }

  #svg-container { 
    height: 736px !important;
    width: 1336px !important;
  }
</style>