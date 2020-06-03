<template>
  <div class="w-full">
    <input class="" v-model="teamName" type="text" placeholder="Nombre de tu equipo">
    <a :href="`https://app.milla.travel/#/onboarding?companyName=${teamName}`">¡Pruébalo Gratis!</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamName: null,
    }
  }
}
</script>

<style scoped>
  input {
    margin-bottom: 20px;
    border: 1px solid #00BFA5;
    letter-spacing: 0.2px;
    padding: 11px 0;
    font-size: 15px;
    @apply block w-full px-4 appearance-none rounded-md box-border transition duration-200 ease-in text-mid-gray font-normal
  }

  input:focus {
    box-shadow: 0px 0px 4px rgba(165, 206, 204, 0.724678), inset -2px -2px 2px rgba(31, 201, 195, 0.12);
  }

  a, input {
    height: 56px;
  }

  a {
    box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
    font-size: 15px;
    letter-spacing: 0.4px;
    @apply flex justify-center items-center w-full py-2 px-3 rounded-md bg-principal-green text-white text-center font-medium
  }

  @media (min-width: 768px) {
    input {
      @apply mb-4
    }

    input, a {
      font-size: 16px;
    }
  }
</style>