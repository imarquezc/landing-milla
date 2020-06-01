<template>
  <div class="w-full">
    <input class="mb-6 md:mb-4" type="email" placeholder="Ingresa tu correo">
    <a href="">¡Pruebalo Gratis!</a>
  </div>
</template>

<style scoped>  
  input {
    border: 1px solid #00BFA5;
    letter-spacing: 0.2px;
    padding: 11px 0;
    @apply block w-full px-4 appearance-none rounded-md box-border transition duration-200 ease-in text-mid-gray
  }

  input:focus {
    box-shadow: 0px 0px 4px rgba(165, 206, 204, 0.724678), inset -2px -2px 2px rgba(31, 201, 195, 0.12);
  }

  a {
    box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
    @apply flex justify-center items-center h-12 w-full py-2 px-3 rounded-md bg-principal-green text-white text-center text-base tracking-wide font-medium
  }
</style>