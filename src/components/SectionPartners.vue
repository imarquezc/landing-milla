<template>
  <section>
    <div class="container mx-auto grid grid-cols-12">
      <div class="col-span-12 md:col-span-10 md:col-start-2">
        <header class="text-center">
          <h3 class="text-center text-3xl text-dark-blue">Viajan con nosotros</h3>
        </header>

        <div class="md:grid md:grid-cols-5 md:gap-12">
          <article class="flex items-center my-4 md:m-0 last:my-0"
            v-for="(item, index) in items" :key="index"
          >
            <figure class="md:w-full w-1/2 mb-4 md:m-0 flex mx-auto">
              <img v-lazy="item.logo">
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
        { logo: require('@/assets/partners/alatheia.png'), link: '' },
        { logo: require('@/assets/partners/fintual.png'), link: '' },
        { logo: require('@/assets/partners/rising-sun.png'), link: '' },
        { logo: require('@/assets/partners/hackmetrix.png'), link: '' },
        { logo: require('@/assets/partners/mudango.png'), link: '' },
      ]
    }
  }
}
</script>

<style scoped>
  section {
    padding-top: 60px;
  }

  header {
    margin-bottom: 79px;
  }

  header h3 {
    line-height: 48px;
    letter-spacing: 0.4px;
  }

  img {
    @apply m-auto max-w-full max-h-full
  }

  @media (min-width: 768px) {
    section {
      padding-top: 64px;
      padding-bottom: 0;
      height: 400px;
    }

    header {
      margin-bottom: 116px;
    }

    article {
      margin: 0 !important;
    }
  }
</style>