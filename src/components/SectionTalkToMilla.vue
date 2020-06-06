<template>
  <section id="talk-to-milla" class="container-full-section items-center">
    <div class="container mx-auto grid grid-rows-1 px-8 py-4 md:px-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2">
          <section class="md:grid md:grid-cols-2 md:col-span-12 text-center md:text-left">
            <article class="relative">
              <header class="pb-12">
                <h3 class="title text-dark-blue font-normal">¿Necesitas algo? Te <br> presentamos a Milla</h3>
              </header>

              <header class="md:mb-16 text-dark-gray">
                <p class="subtitle mb-8">
                  Milla será la asistente virtual <br class="md:hidden"> y te ayudará <br class="hidden md:block"> 
                  desde el inicio hasta <br class="md:hidden"> el fin de tu viaje.
                </p>

                <p class="subtitle">
                  Recibe tu check-in, cambia tus <br class="md:hidden"> asientos <br class="hidden md:block">
                  y rinde tus gastos enviando <br class="md:hidden"> las boletas <br class="hidden md:block">
                  por chat, para que Milla <br class="md:hidden"> los suba a tu Cuenta.
                </p>
              </header>

              <img class="md:hidden my-10" v-lazy="require('@/assets/milla/Milla-mobile.png')">
              <img class="hidden md:block absolute w-auto h-auto" v-lazy="require('@/assets/milla/Milla.png')">

              <a href="#talk-to-milla" @click="openChat()" class="w-full md:w-auto">¡Habla con Milla!</a>
            </article>
          </section>
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openChat: function () {
      window.Intercom('show');
    },
  }
}
</script>

<style scoped>
header h3 {
  line-height: 40px;
  letter-spacing: 0.4px;
}

header p {
  line-height: 28px;
  letter-spacing: 0.4px;
}

a {
  letter-spacing: 0.4px;
  font-size: 15px;
  height: 48px;
  @apply flex justify-center items-center px-4 bg-principal-green rounded-md text-white font-medium text-center
}

img {
  @apply w-auto mx-auto
}

@media (min-width: 768px) {
  header h3 {
    line-height: 48px;
  }

  a {
    width: 169px;
    @apply text-base
  }

  img {
    left: 480px;
    top: -55px;
    max-width: 716px;
    z-index: -10;
  }
}
</style>