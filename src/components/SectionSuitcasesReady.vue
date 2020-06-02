<template>
  <section class="border-b border-opacity-50 border-light-gray">
    <div class="md:relative container h-full mx-auto grid grid-cols-12 md:col-gap-16">
      <header class="col-span-12 pb-12 header-section text-center flex justify-center items-end">
        <h3 class="title text-center text-dark-blue">¿Están listas tus maletas?</h3>
      </header>

      <div class="col-span-10 col-start-2 md:col-span-4 md:col-start-5">
        <email-input />
        <p class="mt-4 text-center text-sm md:text-base text-dark-gray tracking-wide">Sin tarjetas · Cancela en cualquier momento</p>
      </div>

      <img :src="require('@/assets/icons/Maleta.png')" class="hidden md:visible absolute right-0">
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
    height: 524px;
  }

  img {
    bottom: -1px;
  }
</style>