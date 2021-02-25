<template>
  <div id="app">    
    <router-view>
    </router-view>
    <section-footer />
  </div>
</template>

<script>
import SectionFooter from './components/SectionFooter'

export default {
  name: 'App',
  components: {
    SectionFooter
  }
}
</script>

<style src="./assets/tailwind.css"></style>
