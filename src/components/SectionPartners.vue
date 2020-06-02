<template>
  <section class="pt-16 pb-24">
    <div class="container mx-auto grid grid-cols-12">
      <div class="col-span-12 md:col-span-10 md:col-start-2">
        <header class="pb-16 text-center">
          <h3 class="text-center text-3xl text-dark-blue">Confían en nosotros</h3>
        </header>

        <section class="md:grid md:grid-cols-4">
          <article class="p-4 h-24 md:h-32 flex items-center"
            v-for="(item, index) in items" :key="index">
            <figure class="w-full h-12 md:h-6 flex mx-auto">
              <img :src="item.logo" class="max-w-full max-h-full m-auto">
            </figure>
          </article>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { logo: require('@/assets/partners/startupchile.png'), link: '' },
        { logo: require('@/assets/partners/corfo.png'), link: '' },
        { logo: require('@/assets/partners/duffel.png'), link: '' },
        { logo: require('@/assets/partners/ventures.png'), link: '' },
      ]
    }
  }
}
</script>