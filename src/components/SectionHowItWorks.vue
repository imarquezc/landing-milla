<template>
  <section id="how-it-works" class="container-full-section nav-section items-center">
    <div class="container mx-auto grid grid-rows-1 p-4 md:px-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2 grid-rows-2">
          <header class="pb-12 header-section">
            <h3 class="title text-center md:text-left">Cómo funciona</h3>
          </header>

          <div class="grid grid-cols-5 col-gap-12">
            <div class="col-span-5 md:col-span-2 grid grid-flow-col grid-rows-1 md:row-gap-4"
              :class="[gridRows]">
              <article class="card"
                v-for="(item, index) in items" :key="index"
                :class="{ 'active': index == active }"
                @click="!mobile ? changeActiveItem(index) : null">
                <div class="card-header" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }">
                  <!-- <span class="card-arrow" 
                    :class="{ invisible: !hasBackItem(index) }"
                    @click="changeActiveItem(index - 1)">
                    <i>a</i>
                  </span>
                  
                  <span class="card-arrow" 
                    :class="{ invisible: !hasNextItem(index) }"
                    @click="changeActiveItem(index + 1)">
                    <i>a</i>
                  </span> -->
                </div>
                
                <div class="card-body">
                  <header>
                    <h1 class="title">{{ item.title }}</h1>
                  </header>
                  <p class="paragraph">{{ item.content }}</p>
                </div>
              </article>
            </div>

            <div class="hidden md:block col-span-3">
              <div class="image-container" 
                :style="{ 'backgroundImage': `url('${activeItem.imageSrc}')` }"
                @mouseover="stopTimer()"
                @mouseleave="initializeTimer()">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </section>
</template>

<script>
import mixins from '../mixins/index'

export default {
  mixins: [mixins],

  data: function () {
    return {
      mobile: false,
      active: 0,
      timer: null,
      items: [
        { title: 'Reserva', content: 'Agenda tu viaje en minutos con el mejor inventario.', imageSrc: require('@/assets/how_work/img-reserva.png') },
        { title: 'Gestiona', content: 'Todo tu equipo en un mismo espacio, guarda su información y documentos.', imageSrc: require('@/assets/how_work/gestiona-img.png') },
        { title: 'Reporta', content: 'Visualiza los gastos de tu equipo en tiempo real.', imageSrc: require('@/assets/how_work/reporta-img.png') }
      ]
    }
  },

  computed: {
    activeItem: function () {
      return this.items[this.active]
    },

    gridRows: function () {
      return 'md:grid-rows-' + this.items.length
    }
  },

  methods: {
    initializeTimer () {
      const that         = this
      const timeInterval = 5000

      if (that.items.length > 1) {
        that.timer = setInterval(() => {
          that.active = that.active >= that.items.length - 1 ? 0 : that.active + 1
        }, timeInterval)
      }
    },

    stopTimer () {
      if (this.timer != null) {        
        clearInterval(this.timer)
      }
    },

    changeActiveItem (index) {
      this.active = index
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
    }
  },

  mounted: function () {
    this.initializeTimer()
    this.detectDevice()
    window.addEventListener('resize', this.detectDevice())
  }
}
</script>

<style scoped>
section {
  display: none !important;
}

.card, .image-container {
  @apply rounded-md cursor-pointer
}

.card {
  @apply hidden text-gray-500 transition-all duration-300 ease-in
}

.card.active {
  @apply block text-gray-900 shadow-md
}

.card .card-header {
  @apply w-full h-64 px-2 flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-center bg-no-repeat bg-contain
}

.card .card-header .card-arrow {
  border-radius: 50%;
  @apply h-10 w-10 bg-gray-400 flex items-center justify-center
}

.card .card-body {
  @apply px-6 py-5
}

.card .card-body .title {
  @apply mb-3
}

/* Medium (md) */
@media (min-width: 768px) {
  section {
    display: block !important;
  }
  .image-container {
    box-shadow: 2px 4px 4px rgba(146, 148, 151, 0.12);
    @apply h-full bg-center bg-no-repeat bg-cover
  }

  .card {
    @apply block text-gray-500 border border-transparent
  }

  .card.active {
    border-color: rgba(0, 168, 143, 0.56);
    @apply shadow-none
  }

  .card .card-header {
    @apply hidden
  }
}
</style>