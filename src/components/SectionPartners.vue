<template>
  <section>
    <div class="container mx-auto grid grid-cols-12">
      <div class="col-span-12 md:col-span-10 md:col-start-2">
        <header class="text-center">
          <h3 class="text-center text-3xl text-dark-blue">Confían en nosotros</h3>
        </header>

        <div class="md:grid md:grid-cols-4">
          <article class="flex items-center"
            v-for="(item, index) in items" :key="index"
            :class="item.class">
            <figure class="w-full flex mx-auto">
              <img :src="item.logo" class="logo-partner">
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
        { logo: require('@/assets/partners/startupchile.svg'), link: '', class: 'partner-startupchile' },
        { logo: require('@/assets/partners/corfo.svg'), link: '', class: 'partner-corfo' },
        { logo: require('@/assets/partners/duffel.svg'), link: '', class: 'partner-duffel' },
        { logo: require('@/assets/partners/ventures.svg'), link: '', class: 'partner-ventures' },
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

  .partner-startupchile {
    margin-bottom: 87.96px;
  }

  .partner-startupchile img {
    height: 18px;
  }

  .partner-corfo {
    margin-bottom: 80.96px;
  }
  
  .partner-corfo img {
    height: 52px;
  }

  .partner-duffel {
    margin-bottom: 88px;
  }

  .partner-duffel img {
    height: 32px;
  }

  .partner-ventures {
    margin-bottom: 103px;
  }

  .partner-ventures img {
    height: 32px;
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

    .partner-startupchile img {
      height: 14.23px;
    }

    .partner-corfo img {
      height: 40px;
    }

    .partner-duffel img {
      height: 24px;
    }

    .partner-ventures img {
      height: 20.42px;
    }
  }
</style>