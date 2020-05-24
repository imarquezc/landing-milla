<template>
  <main class="container-full-section">
    <article class="container mx-auto grid grid-cols-12">
      <div class="col-span-12 md:col-span-10 md:col-start-2 md:mt-20 text-center">
        <h1 class="mb-2 text-4xl text-dark-blue">Gestiona los viajes de tu equipo de forma simple</h1>
        <h2 class="mb-8 text-lg text-dark-gray">Reserva viajes, guarda sus documentos y analiza gastos.</h2>

        <section class="w-full md:w-4/12 m-auto">
          <email-input />
        </section>
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