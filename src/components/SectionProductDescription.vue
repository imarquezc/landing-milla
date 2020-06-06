<template>
  <section class="container-full-section items-center">
    <div class="container mx-auto grid grid-rows-1 py-4 px-8 md:p-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2">
          <div class="col-span-12 md:col-span-10 md:col-start-2 grid-rows-2">
            <header class="pb-10 md:pb-16">
              <h3 class="title text-center text-dark-blue">Una herramienta <br class="md:hidden"> para todo tu equipo</h3>
            </header>

            <div class="cards-container grid md:grid-rows-none md:col-gap-16"
              :class="[gridRows, gridCols]">
              <article class="card"
                v-for="(item, index) in items" :key="index">
                <!-- :style="{ 'backgroundImage': `url('${item.imageSrc}')` }" -->
                <div class="card-header mb-4">
                  <img v-lazy="item.imageSrc" class="max-h-full max-w-full">
                </div>
                <div class="card-body">
                  <header>
                    <h1 class="title">{{ item.title }}</h1>
                  </header>
                  <p class="paragraph" v-html="item.content"></p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { title: 'Gestor de finanzas', content: 'Accede a todos los gastos <br class="hidden md:block" /> de tu equipo y recibe un <br class="hidden md:block" /> resumen al final de cada viaje.', imageSrc: require('@/assets/product_details/Finanzas.svg') },
        { title: 'Gestor de viajes', content: 'Deja que tu equipo <br class="hidden md:block" /> reserve viajes, y ten toda la <br class="hidden md:block" /> información en tu Dashboard.', imageSrc: require('@/assets/product_details/Gestores.svg') },
        { title: 'Viajeros', content: 'Elige tus viajes, recibe <br class="hidden md:block" /> tu check-in y envía tus <br class="hidden md:block" /> gastos por chat.', imageSrc: require('@/assets/product_details/Viajeros.svg') },
      ]
    }
  },

  computed: {
    gridRows: function () {
      return 'grid-rows-' + this.items.length
    },

    gridCols: function () {
      return 'md:grid-cols-' + this.items.length
    }
  }
}
</script>

<style scoped>
header h3 {
  letter-spacing: 0.4px;
  line-height: 44px;
  font-size: 31px;
}

.cards-container {
  row-gap: 90px;
}

.card {
  @apply text-center
}

.card .card-header {
  height: 233px;
  /*@apply w-full h-64 px-2 rounded-lg bg-center bg-no-repeat bg-contain*/
  @apply w-full px-2 rounded-lg flex items-center justify-center
}

.card .card-body .title,
.card .card-body .paragraph {
  letter-spacing: 0.2px;
}

.card .card-body .title {
  line-height: 24px;
  @apply mb-4 text-dark-blue
}

.card .card-body .paragraph {
  @apply text-dark-gray
}

  @media (min-width: 768px) {
    .cards-container {
      row-gap: 0;
    }

    header h3 {
      letter-spacing: 0.4px;
      line-height: 48px;
      font-size: 32px;
    }

    .card .card-header {
      height: 264px;
    }
  }
</style>