<template>
  <section class="container-full-section items-center">
    <div class="container mx-auto grid grid-rows-1 p-4 md:px-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2">
          <div class="col-span-12 md:col-span-10 md:col-start-2 grid-rows-2">
            <header class="md:pb-24">
              <h3 class="title text-center">Una herramienta para todo tu equipo</h3>
            </header>

            <div class="grid row-gap-8 md:row-gap-0 md:grid-rows-none md:col-gap-16"
              :class="[gridRows, gridCols]">
              <article class="card"
                v-for="(item, index) in items" :key="index">
                <div class="card-header" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }"></div>
                <div class="card-body">
                  <header>
                    <h1 class="title">{{ item.title }}</h1>
                  </header>
                  <p class="paragraph">{{ item.content }}</p>
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
        { title: 'Gestor de finanzas', content: 'Accede a todos los gastos de tu equipo y recibe un resumen al final de cada viaje.', imageSrc: 'https://ia-latam.com/wp-content/uploads/2019/06/fintech-1-825x500.jpg' },
        { title: 'Gestor de viajes', content: 'Deja que tu equipo reserve viajes, y ten toda la información en tu Dashboard.', imageSrc: 'https://ia-latam.com/wp-content/uploads/2019/06/fintech-1-825x500.jpg' },
        { title: 'Viajeros', content: 'Elige tus viajes, recibe tu check-in y envía tus gastos por chat.', imageSrc: 'https://ia-latam.com/wp-content/uploads/2019/06/fintech-1-825x500.jpg' },
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
.card {
  @apply text-center
}

.card .card-header {
  @apply w-full h-64 px-2 mb-4 rounded-lg bg-center bg-no-repeat bg-cover
}

.card .card-body .title {
  @apply font-bold mb-4
}
</style>