<template>
  <section class="home">
    <navigation />
    <main-section />
    <section-product-description />
    <section-how-it-works />
    <section-talk-to-milla />
    <section-partners />
    <section-footer />
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import MainSection from '../components/MainSection'
import SectionHowItWorks from '../components/SectionHowItWorks'
import SectionProductDescription from '../components/SectionProductDescription'
import SectionTalkToMilla from '../components/SectionTalkToMilla'
import SectionPartners from '../components/SectionPartners'
import SectionFooter from '../components/SectionFooter'

export default {
  name: 'Home',
  components: {
    Navigation,
    MainSection,
    SectionHowItWorks,
    SectionProductDescription,
    SectionTalkToMilla,
    SectionPartners,
    SectionFooter
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

* {
  @apply font-rubik
}

.container-full-section {
  min-height: calc(100vh - 64px);
  @apply w-full py-4 flex
}

header .title {
  font-size: 32px;
}

header .subtitle {
  @apply text-base
}

.card .card-body .title {
  @apply text-lg
}

.card .card-body .subtitle,
.card .card-body .paragraph {
  @apply text-base
}

@media (min-width: 768px) {
  header .title {
    @apply text-4xl
  }

  header .subtitle {
    @apply text-lg
  }
}
</style>