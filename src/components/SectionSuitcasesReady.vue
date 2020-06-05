<template>
  <section class="border-b border-opacity-50 border-light-gray">
    <div class="md:relative container h-full mx-auto grid grid-cols-12 md:col-gap-16">
      <header class="col-span-12 header-section text-center flex justify-center items-end">
        <h3 class="title text-center text-dark-blue">¿Están <br class="md:hidden"> listas tus maletas?</h3>
      </header>

      <div class="col-span-10 col-start-2 md:col-span-4 md:col-start-5">
        <email-input />
        <p class="text-center text-sm md:text-base text-dark-gray tracking-wide">
          Sin tarjetas · Sin costos escondidos
        </p>
      </div>

      <img :src="require('@/assets/icons/Maleta.svg')" class="col-span-12 m-auto md:absolute md:right-0">
    </div>
  </section>
</template>

<script>
import EmailInput from './EmailInput'

export default {
  components: {
    EmailInput
  }
}
</script>

<style scoped>
  section {
    margin-top: 56px;
  }

  header {
    padding-bottom: 70px;
  }

  img {
    margin-top: 63px;
    margin-bottom: -1px;
    bottom: -1px;
  }

  header h3 {
    font-size: 31px;
    line-height: 48px;
  }

  p {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    section {
      margin-top: 0;
      height: 524px;
    }

    header {
      padding-bottom: 48px;
    }

    header h3 {
      font-size: 40px;
      line-height: 60px;
    }

    p {
      margin-top: 14px;
    }
  }
</style>