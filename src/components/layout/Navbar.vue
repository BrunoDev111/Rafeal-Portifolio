<template>
  <nav id="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <!-- Logo Hexagonal -->
      <div class="logo" @click="navigateTo('home')">RR</div>

      <!-- Links Desktop -->
      <ul class="nav-links">
        <li>
          <a 
            class="nav-link" 
            :class="{ active: currentRoute === 'home' }"
            @click="navigateTo('home')"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            class="nav-link" 
            :class="{ active: currentRoute === 'sobre' }"
            @click="navigateTo('sobre')"
          >
            Sobre
          </a>
        </li>
        <li>
          <a 
            class="nav-link" 
            :class="{ active: currentRoute === 'experiencia' }"
            @click="navigateTo('experiencia')"
          >
            Experiência
          </a>
        </li>
        <li>
          <a 
            class="nav-link" 
            :class="{ active: currentRoute === 'skills' }"
            @click="navigateTo('skills')"
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            class="nav-link" 
            :class="{ active: currentRoute === 'certificacoes' }"
            @click="navigateTo('certificacoes')"
          >
            Certificações
          </a>
        </li>
        <li>
          <a 
            class="nav-link" 
            :class="{ active: currentRoute === 'contato' }"
            @click="navigateTo('contato')"
          >
            Contato
          </a>
        </li>
      </ul>

      <!-- Menu Mobile -->
      <div 
        class="mobile-menu" 
        id="mobileMenuBtn"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Nav Mobile -->
    <div 
      class="mobile-nav" 
      id="mobileNav"
      :class="{ active: isMobileMenuOpen }"
    >
      <a 
        class="mobile-link" 
        :class="{ active: currentRoute === 'home' }"
        @click="navigateTo('home')"
      >
        Home
      </a>
      <a 
        class="mobile-link" 
        :class="{ active: currentRoute === 'sobre' }"
        @click="navigateTo('sobre')"
      >
        Sobre
      </a>
      <a 
        class="mobile-link" 
        :class="{ active: currentRoute === 'experiencia' }"
        @click="navigateTo('experiencia')"
      >
        Experiência
      </a>
      <a 
        class="mobile-link" 
        :class="{ active: currentRoute === 'skills' }"
        @click="navigateTo('skills')"
      >
        Skills
      </a>
      <a 
        class="mobile-link" 
        :class="{ active: currentRoute === 'certificacoes' }"
        @click="navigateTo('certificacoes')"
      >
        Certificações
      </a>
      <a 
        class="mobile-link" 
        :class="{ active: currentRoute === 'contato' }"
        @click="navigateTo('contato')"
      >
        Contato
      </a>
    </div>
  </nav>
</template>
<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'Navbar',
  
  setup() {
    // ============================================
    //  VARIÁVEIS REATIVAS
    // ============================================
    const router = useRouter()
    const route = useRoute()
    
    // Controla se a página foi scrollada
    const isScrolled = ref(false)
    
    // Controla se o menu mobile está aberto
    const isMobileMenuOpen = ref(false)
    
    // Pega a rota atual
    const currentRoute = computed(() => {
      // Remove a barra inicial da rota
      // Ex: '/sobre' vira 'sobre'
      return route.path === '/' ? 'home' : route.path.substring(1)
    })
    
    // ============================================
    //  FUNÇÕES
    // ============================================
    
    /**
     * Detecta quando o usuário faz scroll na página
     */
    const handleScroll = () => {
      // Se scroll for maior que 50px, ativa o estado "scrolled"
      isScrolled.value = window.scrollY > 50
    }
    
    /**
     * Alterna o menu mobile (abre/fecha)
     */
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }
    
    /**
     * Fecha o menu mobile
     */
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }
    
    /**
     * Navega para a rota especificada
     * @param {string} routeName - Nome da rota (ex: 'home', 'sobre')
     */
    const navigateTo = (routeName) => {
      // Fecha o menu mobile se estiver aberto
      closeMobileMenu()
      
      // Navega para a rota
      const path = routeName === 'home' ? '/' : `/${routeName}`
      router.push(path)
      
      // Faz scroll suave para o topo da página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    // ===========================================
    //  LIFECYCLE HOOKS
    // ============================================
    
    /**
     * Executado quando o componente é montado
     */
    onMounted(() => {
      // Adiciona o listener de scroll
      window.addEventListener('scroll', handleScroll)
      
      // Chama uma vez para verificar a posição inicial
      handleScroll()
    })
    
    /**
     * Executado antes do componente ser destruído
     * (Importante para evitar memory leaks!)
     */
    onUnmounted(() => {
      // Remove o listener de scroll
      window.removeEventListener('scroll', handleScroll)
    })
    
    // ============================================
    //  RETORNA TUDO PARA O TEMPLATE
    // ============================================
    return {
      // Variáveis
      isScrolled,
      isMobileMenuOpen,
      currentRoute,
      
      // Funções
      toggleMobileMenu,
      navigateTo
    }
  }
}
</script>

<style scoped>
    /* Navbar Principal */
    nav{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 1.5rem 3rem;
        backdrop-filter: blur(30px) saturate(180%);
        background: rgba(0, 0, 0, 0.7);
        border-bottom: 1px solid rgb(120, 119, 198, 0.2);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    }
    nav.scrolled {
        padding: 1rem 3rem;
        background: rgba(0, 0, 0, 0.9);
        box-shadow: 0 20px 50px rgba(120, 119, 198, 0.2);
        border-bottom: 1px solid rgba(120, 119, 198, 0.3);
    }
    .nav-container {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /* Logo Hexagonal */
    .logo {
        font-size: 1.5rem;
        font-weight: 900;
        cursor: pointer;
        letter-spacing: -1px;
        transition: all 0.3s ease;
        width: 50px;
        height: 50px;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: #fff;
        text-shadow: 0 0 10px rgba(120, 119, 198, 0.5);
        box-shadow: 0 0 20px rgba(120, 119, 198, 0.3);
    }
    .logo::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
        z-index: -1;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        animation: logoRotate 4s linear infinite;
    }
    @keyframes logoRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .logo:hover {
        transform: scale(1.5) rotate(365deg);
        box-shadow: 0 0 30px rgba(120, 119, 198, 0.5);
        transition: all 0.6s ease;

    }
    /* Nav Links Desktop */
    .nav-links {
        display: flex;
        gap: 3rem;
        list-style: none;
    }
    .nav-links a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        position: relative;
        transition: all 0.3s ease;
        padding: 0.5rem 0;
        letter-spacing: 0.5px;
        cursor: pointer;
    }
    .nav-links a:hover {
        color: #fff;
        text-shadow: 0 0 20px rgb(120, 119, 198);
    }
    .nav-links a.active {
        color: #fff;
    }
    .nav-links a::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s ease
    }
    .nav-links a.active::before {
        opacity: 1;
    }
    .nav-links a::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb,  #667eea, #764ba2, #f093fb);
        background-size: 200% 100%;
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        animation: linkinfinity 4s linear infinite;

    }
    @keyframes linkinfinity {
    0% { 
        background-position: 100% 50%; 
    }
    100% { 
        background-position: 0% 50%; 
    }
}
    .nav-links a.active::after {
         width: 100%;
    }
    /* Mobile Menu Button */
    .mobile-menu {
        display: none;
        cursor: pointer;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        z-index: 1001;
    }
    .mobile-menu span {
        width: 28px;
        height: 3px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 3px;
        transition: all 0.3s ease;
        box-shadow: 0 0 10px rgba(120, 119, 198, 0.5);
    }
    /* Mobile Nav */
    .mobile-nav {
        display: none;
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(20px);
        padding: 2rem;
        border-bottom: 1px solid rgba(120, 119, 198, 0.3);
        z-index: 999;
    }
    .mobile-nav.active {
        display: block;
        animation: slideDown 0.3s ease;
    }
    @keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
    .mobile-nav a {
        display: block;
        padding: 1rem 0;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        border-bottom: 1px solid rgba(120, 119, 198, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .mobile-nav a:hover,
    .mobile-nav a.active {
        color: #667eea;
        transform: translateX(10px);
    }
    /* Responsive */
@media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        
        .mobile-menu {
            display: flex;
        }
        
        nav {
            padding: 1rem 1.5rem;
        }
        
        .nav-container {
            padding: 0;
        }
}
    
</style>