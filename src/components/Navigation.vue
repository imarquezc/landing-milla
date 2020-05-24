<template>
  <nav class="md:h-16">
    <div class="container h-full mx-auto grid grid-cols-12">
      <div class="md:col-span-2 flex items-center">
        <a href="">
          <img src="@/assets/logo.png" class="h-8">
        </a>
      </div>

      <div class="md:col-span-8 md:flex">
        <ul>
          <li class="active">
            <a href="">
              Inicio
              <div></div>
            </a>
          </li>
          <li><a href="">Cómo funciona</a></li>
          <li><a href="">Soporte</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>
      
      <div class="md:col-span-2 flex items-center justify-end">
        <a href="" class="btn-enter">
          Ingresa
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
  nav {
    box-shadow: 0px 2px 8px rgba(98, 106, 106, 0.08);
    @apply sticky top-0 bg-white
  }

  nav ul {
    @apply h-full w-auto inline-block mx-auto
  }

  nav ul li {
    @apply inline-block h-full px-4 ml-2 text-dark-blue opacity-25
  }
  
  nav ul li.active {
    @apply opacity-100
  }

  nav ul li:first-child {
    @apply ml-0
  }

  nav ul li a {
    @apply block h-full text-sm flex items-center relative
  }

  nav ul li a div {
    height: 2px;
    border-radius: 4px 4px 0px 0px;
    @apply hidden w-full absolute bottom-0 left-0 bg-principal-green
  }

  nav ul li.active a div {
    @apply block
  }

  nav .btn-enter {
    box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
    @apply bg-principal-green text-white px-6 py-2 rounded font-medium tracking-wide leading-tight text-sm
  }
</style>