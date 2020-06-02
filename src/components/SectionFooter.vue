<template>
  <footer class="relative">
    <img src="@/assets/icons/circular.png" class="absolute bottom-0 right-0 max-h-full">
    <div class="container mx-auto grid grid-cols-12 md:col-gap-16 z-50 relative">
      <div class="col-span-12 md:col-span-10 md:col-start-2 md:grid md:grid-cols-3 md:col-gap-16 my-8 md:my-20 text-lg text-dark-gray text-left">
        <div class="p-2 text-center md:text-left pb-8 md:pb-0">
          <img src="@/assets/logo-gray.png" class="h-8 mx-auto md:mx-0">

          <p class="py-4 ptb-20px">Gestiona los viajes de tu equipo</p>

          <ul class="list-social-media">
            <li><a href=""><img src="@/assets/social_media/facebook.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/instagram.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/linkedin.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/twitter.png"></a></li>
          </ul>
        </div>

        <div class="grid grid-rows-3 row-gap-8 p-2 text-center md:text-left pb-8 md:pb-0">
          <a href="#main-section">Inicio</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#talk-to-milla">Pregúntale a Milla</a>
        </div>
        <div class="grid grid-rows-3 row-gap-8 p-2 text-center md:text-left">
          <a href="">Blog</a>
          <a href="">Términos y Privacidad</a>
          <a href="">Pruébalo Gratis</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .list-social-media li {
    @apply inline-block mr-6
  }

  .list-social-media li a img {
    @apply h-8
  }

  @media (min-width: 768px) {
    .list-social-media li {
      margin-right: 20px;
      @apply inline-block
    }

    .list-social-media li a img {
      @apply h-6
    }

    .ptb-20px {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>