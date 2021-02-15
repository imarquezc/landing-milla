<template>
  <section class="container-full-section items-center">
    <div class="container mx-auto grid grid-rows-1 py-4 px-8 md:p-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2">
          <div class="col-span-12 md:col-span-10 md:col-start-2 grid-rows-2">
            <header class="pb-10 md:pb-16">
              <h3 class="title text-center text-dark-blue">Accede a mejores features</h3>
            </header>
            <img
              class="hidden md:block w-full"
              svg-inline
              src="../assets/milla/subscription-plans.svg"
            >
            <img
              class="md:hidden block w-full"
              svg-inline
              src="../assets/milla/subscription-plans-mobile.svg"
            >
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
