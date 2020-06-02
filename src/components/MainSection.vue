<template>
  <main id="main-section" class="container-full-section nav-section mt-24 md:mt-16">
    <article class="container mx-auto grid grid-cols-12 md:col-gap-16 px-6 md:px-0">
      <div class="col-span-12 md:col-start-2 md:col-span-5 md:mt-20 text-center md:text-left">
        <h1 class="mb-4 md:mb-6 text-dark-blue leading-tight md:leading-snug text-3xl md:text-4xl">Gestiona los viajes <br class="md:hidden"> de tu equipo de <br class="md:hidden"> forma simple</h1>
        <h2 class="mb-12 md:mb-8 text-lg text-dark-gray">Reserva viajes, guarda sus documentos <br class="hidden md:block"> y analiza gastos.</h2>

        <div class="grid grid-cols-5 md:col-gap-16">
          <div class="col-span-5 md:col-span-4">
            <email-input />
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import EmailInput from './EmailInput'

export default {
  components:{
    EmailInput
  }
}
</script>