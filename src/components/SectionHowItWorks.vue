<template>
  <section id="how-it-works" class="container-full-section nav-section items-center">
    <div class="container mx-auto grid grid-rows-1 py-4 px-8 md:p-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2 grid-rows-2">
          <header class="pb-12 header-section">
            <h3 class="title text-center md:text-left text-dark-blue">Cómo funciona</h3>
          </header>

          <div class="grid-area-container">
            <div class="cards-grid-container md:col-span-2 grid grid-flow-col grid-rows-1 md:row-gap-4 md:grid-rows-3">
              <article class="card"
                v-for="(item, index) in items" :key="index"
                :class="{ 'active': index == active }"
                @click="!mobile ? changeActiveItem(index) : null">
                <div class="card-header" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }">
                </div>
                
                <div class="card-body">
                  <header>
                    <h1 class="title">{{ item.title }}</h1>
                  </header>
                  <p class="paragraph" v-html="item.content"></p>
                </div>

                <div class="arrow-container">
                  <img 
                    v-lazy="require('@/assets/icons/Arrow.svg')"
                    @click="changeActiveItem(hasNextItem(index) ? index + 1 : 0)">
                </div>

                <div class="bg-mobile"></div>
              </article>
            </div>

            <div class="image-grid-container">
              <div class="image-container" 
                @mouseover="stopTimer()"
                @mouseleave="initializeTimer()">
                <div class="max-h-full max-w-full">
                  <div v-for="item in items" :key="item.id" ref="svgs" v-show="item.id == active" class="svg-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </section>
</template>

<script>
import lottie from 'lottie-web'
import mixins from '../mixins/index'

export default {
  mixins: [mixins],

  data: function () {
    return {
      mobile: false,
      active: 0,
      timer: null,
      items: [
        { title: 'Reserva', id: 0, animationFolder: 'search', animation: null, content: 'Agenda tu viaje en minutos <br> con el mejor inventario.', imageSrc: require('@/assets/how_work/Reserva.mp4') },
        { title: 'Gestiona', id: 1, animationFolder: 'gestiona', animation: null, content: 'Todo tu equipo en un mismo espacio, <br class="hidden md:block"> guarda su información y <br class="md:hidden"> documentos.', imageSrc: require('@/assets/how_work/Gestiona.mp4') },
        { title: 'Reporta', id: 2, animationFolder: 'gastos', animation: null, content: 'Visualiza los gastos de tu equipo <br> en tiempo real.', imageSrc: require('@/assets/how_work/Reporta.mp4') }
      ]
    }
  },

  computed: {
    activeItem: function () {
      return this.items[this.active]
    },
  },

  methods: {
    initializeTimer () {
      const that         = this
      const timeInterval = 10000

      if (that.items.length > 1) {
        that.timer = setInterval(() => {
          const index = that.active >= that.items.length - 1 ? 0 : that.active + 1
          that.changeAnimation(index)
        }, timeInterval)
      }
    },

    stopTimer () {
      if (this.timer != null) clearInterval(this.timer)
    },

    changeAnimation (index) {
      this.activeItem.animation.stop()
      this.active = index
      this.activeItem.animation.play()
    },

    changeActiveItem (index) {
      this.changeAnimation(index)
      this.stopTimer()
      this.initializeTimer()
    },

    hasNextItem (index) {
      return this.items.length - 1 > index
    },

    hasBackItem (index) {
      return this.items.length > 1 && index != 0
    },

    detectDevice () {
      this.mobile = this.isMobile()
    },

    loadSVG (item, autoplay) {
      const path = require('path')

      fetch( path.resolve(`static/features/${item.animationFolder}/data.json`) ).then( resp => resp.json() ).then( json => { 
        json.assets.filter(asset => asset.id.includes('image')).forEach((asset, index) => {
          json.assets[index].u = path.resolve(`static/features/${item.animationFolder}/images/`) + '/'
        })

        item.animation = lottie.loadAnimation({
          container: this.$refs.svgs[item.id],
          renderer: 'svg',
          loop: true,
          autoplay: false,
          animationData: json,
          rendererSettings: {
            id: item.ref,
          }
        })

        if(autoplay) item.animation.play()

      })
    }
  },

  mounted: function () {
    const that = this

    // setTimeout(() => {
      that.items.forEach((item, index) => that.loadSVG(item, index == 0))
      that.initializeTimer()
    // }, 2500)
    
    this.detectDevice()
    window.addEventListener('resize', this.detectDevice())
  }
}
</script>

<style scoped>
.grid-area-container {
  display: grid;
  grid-template-areas: "sectionA"
                       "sectionB";
  @apply grid col-gap-12
}

.cards-grid-container {
  grid-area: sectionB;
  @apply col-span-5
}

.image-grid-container {
  grid-area: sectionA;
  @apply col-span-5
}

svg {
  display: none !important;
}

header h3 {
  line-height: 48px;
}

.card, .image-container {
  @apply rounded-md cursor-pointer
}

.card {
  @apply hidden text-gray-500 transition-all duration-300 ease-in border relative bg-white
}

.card.active {
  border-color: rgba(0, 168, 143, 0.56);
  @apply block text-gray-900
}

.card .card-header {
  @apply rounded-tl-lg rounded-tr-lg bg-center bg-no-repeat bg-contain
}

.card .card-header .card-arrow {
  border-radius: 50%;
  @apply flex items-center justify-center
}

.card .card-body {
  letter-spacing: 0.4px;
  @apply py-5 pl-4 pr-8
}

.card .card-body .title {
  @apply mb-3
}

.card.active .card-body .title {
  @apply text-dark-blue
}

.card.active .card-body .paragraph {
  @apply text-dark-gray
}

.card .arrow-container {
  right: -28px;
  @apply flex items-center absolute top-0 h-full
}

.card .bg-mobile {
  width: calc(100% - 16px);
  left: 8px;
  bottom: -8px;
  z-index: -10;
  opacity: 0.24;
  @apply bg-light-gray h-8 absolute rounded-md
}

.image-container .svg-container {
  box-shadow: 2px 4px 4px rgba(146, 148, 151, 0.12);
  overflow: hidden;
  @apply rounded-md max-w-full max-h-full mb-6
}

/* Medium (md) */
@media (min-width: 768px) {
  .grid-area-container {
    grid-template-areas: "sectionA sectionB";
  }

  .cards-grid-container {
    grid-area: sectionA;
    @apply col-span-2
  }

  .image-grid-container {
    grid-area: sectionB;
    @apply col-span-3
  }

  section {
    display: flex !important;
  }

  .image-container .svg-container {
    @apply m-0
  }

  .image-container {
    @apply h-full bg-center bg-no-repeat bg-cover
  }

  .card {
    @apply text-gray-500 border-transparent flex
  }

  .card.active {
    @apply flex
  }

  .card .card-header {
    @apply hidden
  }

  .card .card-body {
    @apply px-6 my-auto
  }

  .card .arrow-container {
    @apply hidden
  }

  .card .bg-mobile {
    @apply hidden
  }
}
</style>