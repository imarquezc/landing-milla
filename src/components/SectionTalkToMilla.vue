<template>
  <section id="talk-to-milla" class="container-full-section items-center">
    <div class="container mx-auto grid grid-rows-1 px-8 py-4 md:px-0">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-10 md:col-start-2">
          <section class="md:grid md:grid-cols-2 md:col-span-12 text-center md:text-left">
            <article>
              <header class="pb-12">
                <h3 class="title text-dark-blue font-normal">¿Necesitas algo? Te <br> presentamos a Milla</h3>
              </header>

              <header class="md:mb-16 text-dark-gray">
                <p class="subtitle mb-8">
                  Milla será la asistente virtual y te ayudará <br class="hidden md:block"> 
                  desde el inicio hasta el fin de tu viaje.
                </p>

                <p class="subtitle">
                  Recibe tu check-in, cambia tus asientos <br class="hidden md:block">
                  y rinde tus gastos enviando las boletas <br class="hidden md:block">
                  por chat, para que Milla los suba a tu Cuenta.
                </p>
              </header>

              <img class="max-h-full mx-auto my-10 md:hidden" :src="require('@/assets/milla/Milla-blanco@2x 1.png')">

              <a href="" class="w-full md:w-auto">¡Habla con Milla!</a>
            </article>
            
            <article class="hidden md:block">
              <img :src="require('@/assets/milla/Milla-blanco@2x 1.png')" class="max-h-full mx-auto">
            </article>
          </section>
        </div> 
      </div>
    </div>
  </section>
</template>

<style scoped>
header h3 {
  line-height: 48px;
  letter-spacing: 0.4px;
}

header p {
  line-height: 28px;
  letter-spacing: 0.4px;
}

a {
  @apply px-4 py-3 inline-block bg-principal-green rounded-md text-base text-white font-medium text-center
}

@media (min-width: 768px) {
  a {
    width: 169px;
  }
}
</style>