<template>
  <nav id="navbar" class="navbar">
    <div class="nav-container">
      <!-- Logo Hexagonal -->
      <div class="logo">RR</div>

      <!-- Links Desktop -->
      <ul class="nav-links">
        <li><a class="nav-link active">Home</a></li>
        <li><a class="nav-link">Sobre</a></li>
        <li><a class="nav-link">Experiência</a></li>
        <li><a class="nav-link">Skills</a></li>
        <li><a class="nav-link">Certificações</a></li>
        <li><a class="nav-link">Contato</a></li>
      </ul>

      <!-- Menu Mobile -->
      <div class="mobile-menu" id="mobileMenuBtn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Nav Mobile -->
    <div class="mobile-nav" id="mobileNav">
      <a class="mobile-link active">Home</a>
      <a class="mobile-link">Sobre</a>
      <a class="mobile-link">Experiência</a>
      <a class="mobile-link">Skills</a>
      <a class="mobile-link">Certificações</a>
      <a class="mobile-link">Contato</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar'
  }
</script>