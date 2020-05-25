<template>
  <footer class="border-t border-opacity-50 border-light-gray">
    <section class="container mx-auto grid grid-cols-12">
      <div class="col-span-12 md:col-span-10 md:col-start-2 md:py-20">
        <header class="pb-12 header-section text-center">
          <h3 class="title text-center">¿Están tus maletas listas?</h3>
        </header>

        <section class="w-full md:w-4/12 m-auto">
          <email-input />
          <p class="mt-4 text-center text-base text-dark-gray tracking-wide">No credit card required · Cancel anytime</p>
        </section>
      </div>

      <div class="col-span-12 md:col-span-9 md:col-start-3 grid grid-cols-3 my-16 text-lg text-dark-gray text-left">
        <div class="p-2">
          <img src="@/assets/logo-gray.png" class="h-8">

          <p class="py-2">Gestiona los viajes de tu equipo</p>

          <ul class="list-social-media">
            <li><a href=""><img src="@/assets/social_media/facebook.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/instagram.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/linkedin.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/twitter.png"></a></li>
          </ul>
        </div>

        <div class="grid grid-rows-3 row-gap-8 p-2">
          <a href="#main-section">Inicio</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#talk-to-milla">Pregúntale a Milla</a>
        </div>
        <div class="grid grid-rows-3 row-gap-8 p-2">
          <a href="">Blog</a>
          <a href="">Términos y Privacidad</a>
          <a href="">Pruébalo Gratis</a>
        </div>
      </div>
    </section>
  </footer>
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
  .list-social-media li {
    @apply inline-block mr-4
  }

  .list-social-media li a img {
    @apply h-6
  }
</style>