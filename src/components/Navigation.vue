<template>
  <nav id="navigation" class="md:h-16 md:px-0" :class="{ 'menu-mobile': activeNavigation }" :style="{ 'height': `${navigationHeight}px` }">
    <div class="container h-full mx-auto md:grid md:grid-cols-12">
      <div class="col-span-12 px-4 h-16 md:col-span-2 md:col-start-2 flex items-center justify-between">
        <a href="">
          <img src="@/assets/logo.svg">
        </a>

        <a @click="activeNavigation = !activeNavigation" class="md:hidden">
          <img :src="activeNavigation ? require('@/assets/icons/close.png') : require('@/assets/icons/menu.png')" alt="">
        </a>
      </div>

      <div class="col-span-12 md:col-span-6 md:flex transition-opacity ease-in"
        :class="[activeNavigation ? 'duration-200 delay-200' : 'duration-100 opacity-0 md:opacity-100']">
        <ul :class="{ 'hidden': !activeNavigation }">
          <li class="active"><a href="#main-section">Inicio<div></div></a></li>
          <li><a href="#how-it-works">Cómo funciona<div></div></a></li>
          <li><a @click="openChat()">Soporte</a></li>
          <!-- <li><a href="">Blog</a></li> -->
        </ul>
      </div>
      
      <div class="col-span-12 md:col-span-2 md:block transition-opacity ease-in"
        :class="[activeNavigation ? 'duration-150 delay-200' : 'duration-100 opacity-0 md:opacity-100']">

        <div class="px-8 md:px-0 md:flex md:items-center md:justify-end md:h-full text-center" 
          :class="{ 'hidden': !activeNavigation }">
          <div class="md:hidden">
            <a href="https://app.milla.travel/#/register" class="btn-enter btn-create-account mt-8 mb-4 bg-principal-green text-white">
              Crear cuenta
            </a>
          </div>

          <a href="https://app.milla.travel/#/login" class="btn-enter bg-light-green text-principal-green md:bg-principal-green md:text-white text-sm">
            Ingresa
          </a>
          
          <img src="@/assets/icons/logo.png" class="md:hidden h-8 mx-auto mb-4">
          <p class="md:hidden text-dark-gray">Gestiona los viajes de tu Equipo</p>
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

  computed: {
    navigationHeight: function () {
      if (this.activeNavigation) {
        return window.innerHeight
      } else {
        return 64
      }
    }
  },

  methods: {
    openChat: function () {
      window.Intercom('show')
    },

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
    transition: height 0.25s ease-in-out;
    z-index: 100;
    @apply fixed w-full top-0 bg-white bg-white
  }

  nav.menu-mobile {
    @apply fixed top-0 left-0 w-full
  }

  nav.navbar-stiky {
    box-shadow: 0px 2px 8px rgba(98, 106, 106, 0.08);
  }

  nav ul {
    @apply h-full w-full hidden mx-auto
  }

  nav.menu-mobile ul {
    @apply inline-block
  }

  nav ul li {
    padding: 24px 32px;
    @apply block text-dark-blue transition duration-300 ease-in border-b
  }
  
  nav ul li.active {
    @apply opacity-100
  }

  nav ul li a {
    @apply block h-full text-lg flex items-center relative cursor-pointer
  }

  nav ul li a div {
    height: 2px;
    @apply hidden opacity-0 w-full absolute bottom-0 left-0 bg-principal-green rounded-t
  }

  nav ul li.active a div {
    @apply opacity-100
  }

  nav .btn-enter {
    border-radius: 6px;
    @apply h-12 flex justify-center items-center px-6 tracking-wide leading-tight text-base
  }

  nav .btn-create-account {
    box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
  }

  .transition-opacity img {
    margin-top: 60px;
  }

  .transition-opacity p {
    letter-spacing: 0.4px;
    font-size: 14px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    nav ul {
      @apply w-auto block
    }

    nav ul li {
      opacity: 0.72;
      margin-left: 44px;
      @apply inline-block h-full border-b-0 p-0
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
      font-size: 14px;
      box-shadow: 0px 6px 16px rgba(25, 168, 164, 0.16);
      @apply h-8 rounded
    }
  }
</style>