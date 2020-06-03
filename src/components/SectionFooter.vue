<template>
  <footer class="relative">
    <div id="bg-container" class="hidden md:block absolute bottom-0 right-0 max-h-full"><div></div></div>

    <div class="container mx-auto grid grid-cols-12 md:col-gap-16 z-50 relative">
      <div class="col-span-12 md:col-span-10 md:col-start-2 md:grid md:grid-cols-3 md:col-gap-16">
        <div class="p-2 text-center md:text-left pb-8 md:pb-0 text-dark-gray">
          <img src="@/assets/logo-gray.png" class="h-8 mx-auto md:mx-0">

          <p class="py-4 ptb-20px">Gestiona los viajes de tu equipo</p>

          <ul class="list-social-media">
            <!-- <li><a href=""><img src="@/assets/social_media/facebook.png"></a></li> -->
            <!-- <li><a href=""><img src="@/assets/social_media/instagram.png"></a></li> -->
            <li><a href="https://www.linkedin.com/company/millatravel/"><img src="@/assets/social_media/linkedin.png"></a></li>
            <li><a href=""><img src="@/assets/social_media/twitter.png"></a></li>
          </ul>
        </div>

        <div class="links-container text-center md:text-left">
          <a href="#main-section">Inicio</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#talk-to-milla">Pregúntale a Milla</a>
        </div>
        <div class="links-container text-center md:text-left">
          <!-- <a href="">Blog</a> -->
          <a :href="require('path').resolve('static/terms/tyc.pdf')" target="_blank">Términos y Privacidad</a>
          <a href="https://app.milla.travel/#/onboarding">Pruébalo Gratis</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  #bg-container {
    width: 337px;
    height: 376px;
    background-color: #f7f7f7;
  }

  #bg-container div {
	  border-bottom-right-radius: 300px;
    @apply h-full w-full bg-white
  }

  .col-span-12 {
    margin-top: 115px;
  }

  .list-social-media li {
    margin-right: 45px;
    @apply inline-block
  }

  .list-social-media li:last-child {
    margin-right: 0;
  }

  .list-social-media li a img {
    @apply h-8
  }

  .links-container {
    @apply text-dark-blue
  }

  .links-container a {
    margin-bottom: 48px;
    @apply block
  }

  p.ptb-20px {
    letter-spacing: 0.4px;
    padding-bottom: 32px;
  }

  @media (min-width: 768px) {
    footer {
      height: 376px;
      padding-top: 102px;
    }

    .col-span-12 {
      margin-top: 0;
    }

    .list-social-media li {
      @apply inline-block mr-6
    }

    .links-container a {
      margin-bottom: 51px;
    }

    .links-container a:last-child {
      margin-bottom: 0;
    }

    .list-social-media li {
      margin-right: 20px;
      @apply inline-block
    }

    .list-social-media li a img {
      @apply h-6
    }

    p.ptb-20px {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>