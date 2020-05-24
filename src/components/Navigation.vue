<template>
  <nav id="navigation" class="md:h-16">
    <div class="container h-full mx-auto grid grid-cols-12">
      <div class="md:col-span-2 flex items-center">
        <a href="">
          <img src="@/assets/logo.png" class="h-8">
        </a>
      </div>

      <div class="md:col-span-8 md:flex">
        <ul>
          <li class="active"><a href="#main-section">Inicio<div></div></a></li>
          <li><a href="#how-it-works">Cómo funciona<div></div></a></li>
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
  methods: {
    scrollFunction: function () {
      const sectionsArray  = document.querySelectorAll('.nav-section')
      const sectionPos     = {}
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      
      let id
      
      sectionsArray.forEach((section) => sectionPos[section.id] = section.offsetTop)

      for (id in sectionPos) {
        if (sectionPos[id] <= scrollPosition) {
          document.querySelector('#navigation .active').classList.remove('active')
          document.querySelector(`#navigation a[href*=${id}]`).closest('li').classList.add('active')
        }
      }

      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		    document.getElementById('navigation').classList.add('navbar-stiky')
		  } else {
		    document.getElementById('navigation').classList.remove('navbar-stiky')
		  }
    }
  },
  
  mounted: function () {
    window.onload   = () => this.scrollFunction()
    window.onscroll = () => this.scrollFunction()    
  }
}
</script>

<style scoped>
  nav {
    @apply sticky top-0 bg-white z-10
  }

  nav.navbar-stiky {
    box-shadow: 0px 2px 8px rgba(98, 106, 106, 0.08);
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