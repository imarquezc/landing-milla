<template>
  <nav id="navigation" class="md:h-16 md:px-0 bg-white" :class="{ 'h-screen': activeNavigation }">
    <div class="container h-full mx-auto md:grid md:grid-cols-12">
      <div class="col-span-12 px-4 h-16 md:col-span-2 md:col-start-2 flex items-center justify-between">
        <a href="">
          <img src="@/assets/logo.png" class="h-8">
        </a>

        <a @click="activeNavigation = !activeNavigation" class="md:hidden">
          <img :src="activeNavigation ? require('@/assets/icons/close.png') : require('@/assets/icons/menu.png')" alt="">
        </a>
      </div>

      <div class="col-span-12 md:col-span-6 md:flex"
        :class="{ 'hidden': !activeNavigation }">
        <ul>
          <li class="active"><a href="#main-section">Inicio<div></div></a></li>
          <li><a href="#how-it-works">Cómo funciona<div></div></a></li>
          <li><a href="">Soporte</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>
      
      <div class="col-span-12 md:col-span-2 md:block"
        :class="{ 'hidden': !activeNavigation }">

        <div class="px-8 md:px-0 md:flex md:items-center md:justify-end md:h-full text-center">
          <div class="md:hidden">
            <a href="" class="btn-enter btn-create-account mt-8 mb-4 bg-principal-green text-white">
              Crear cuenta
            </a>
          </div>

          <a href="" class="btn-enter bg-light-green text-principal-green md:bg-principal-green md:text-white">
            Ingresa
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      activeNavigation: false
    }
  },
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
    @apply h-full w-full inline-block mx-auto
  }

  nav ul li {
    @apply block px-4 py-5 text-dark-blue transition duration-300 ease-in border-b
  }
  
  nav ul li.active {
    @apply opacity-100
  }

  nav ul li a {
    @apply block h-full text-lg flex items-center relative
  }

  nav ul li a div {
    height: 2px;
    @apply hidden opacity-0 w-full absolute bottom-0 left-0 bg-principal-green rounded-t
  }

  nav ul li.active a div {
    @apply opacity-100
  }

  nav .btn-enter {
    @apply h-12 flex justify-center items-center px-6 rounded font-medium tracking-wide leading-tight text-base
  }

  nav .btn-create-account {
    box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
  }

  @media (min-width: 768px) {
    nav ul {
      @apply w-auto
    }

    nav ul li {
      @apply inline-block h-full border-b-0 opacity-25 py-0 ml-2
    }

    nav ul li a {
      @apply text-sm
    }

    nav ul li a div {
      @apply block
    }

    nav ul li:first-child {
      @apply ml-0
    }

    nav ul li a {
      @apply text-sm
    }

    nav .btn-enter {
      box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
      @apply h-8
    }
  }
</style>