<template>
  <section>
    <div class="container mx-auto grid grid-cols-12">
      <div class="col-span-12 md:col-span-10 md:col-start-2">
        <header class="pb-16 text-center">
          <h3 class="text-center text-3xl text-dark-blue">Confían en nosotros</h3>
        </header>

        <div class="md:grid md:grid-cols-4">
          <article class="p-4 h-24 md:h-32 flex items-center"
            v-for="(item, index) in items" :key="index">
            <figure class="w-full h-12 md:h-6 flex mx-auto">
              <img :src="item.logo" class="max-w-full max-h-full m-auto">
            </figure>
          </article>
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
        { logo: require('@/assets/partners/startupchile.png'), link: '' },
        { logo: require('@/assets/partners/corfo.png'), link: '' },
        { logo: require('@/assets/partners/duffel.png'), link: '' },
        { logo: require('@/assets/partners/ventures.png'), link: '' },
      ]
    }
  }
}
</script>

<style scoped>
  section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  header h3 {
    line-height: 48px;
    letter-spacing: 0.4px;
  }

  @media (min-width: 768px) {
    section {
      padding-top: 64px;
      padding-bottom: 0;
      height: 400px;
    }
  }
</style>