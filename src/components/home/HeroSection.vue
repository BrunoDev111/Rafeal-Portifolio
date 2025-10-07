<template>
  <section class="hero">
    <div class="hero__pulse"></div>
    <div class="container">
      <div class="hero__content">
        <!-- Avatar -->
        <div class="hero__avatar">
          <img 
            src="@/assets/img/rafael1.jpg " 
            alt="Rafael Rezende"
            class="hero__avatar-img"
          />
        </div>

        <!-- Textos -->
        <h1 class="hero__title">{{ name }}</h1>
        <h2 class="hero__subtitle">{{ role }}</h2>
        <p class="hero__description">{{ description }}</p>

        <!-- Stats -->
        <div class="hero__stats">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="stat-item"
          >
            <div class="stat-item__number">{{ stat.number }}</div>
            <div class="stat-item__label">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Botões -->
        <div class="hero__buttons">
          <button 
            class="btn btn--primary"
            @click="navigateTo('sobre')"
          >
            Conhecer Mais
          </button>
          <button 
            class="btn btn--secondary"
            @click="navigateTo('contato')"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      name: 'Rafael Rezende de Oliveira',
      role: 'SAP Basis Consultant',
      description: 'Process Management | Systems Development',
      stats: [
        { number: '3+', label: 'Anos de Experiência' },
        { number: '6+', label: 'Certificações' },
        { number: '10+', label: 'Projetos SAP' }
      ]
    }
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style scoped>
/* Hero Container */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
}

/* Pulse Effect */
.hero__pulse {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(120, 119, 198, 0.15), transparent 70%);
  border-radius: 50%;
  filter: blur(100px);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* Container */
.container {
  max-width: 1000px;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Content */
.hero__content {
  text-align: center;
}

/* Avatar */
.hero__avatar {
  width: 280px;
  height: 280px;
  cursor: pointer;
  margin: 0 auto 2rem;
transition: all 0.3s ease;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 80px rgba(120, 119, 198, 0.4),
    0 0 120px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.hero__avatar::before {
  content: '';
  position: absolute;
  inset: -3px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  z-index: -1;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: rotate 4s linear infinite;
}


.hero__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}



@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.hero__avatar:hover {
        transform: scale(1.5) rotate(365deg);
        box-shadow: 0 0 30px rgba(120, 119, 198, 0.5);
        transition: all 0.6s ease;}


/* Title */
.hero__title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtitle */
.hero__subtitle {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

/* Description */
.hero__description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
  font-weight: 500;
}

/* Stats */
.hero__stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 1.2rem 1.8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(120, 119, 198, 0.2);
  border-radius: 20px;
  min-width: 140px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(120, 119, 198, 0.4);
  transform: translateY(-5px);
}

.stat-item__number {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-item__label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Buttons */
.hero__buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.btn:hover::before {
  left: 100%;
}

.btn--primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 10px 40px rgba(120, 119, 198, 0.4);
}

.btn--primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(120, 119, 198, 0.6);
}

.btn--secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 2px solid rgba(120, 119, 198, 0.5);
  backdrop-filter: blur(10px);
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(120, 119, 198, 0.8);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(120, 119, 198, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 0 2rem;
    min-height: auto;
  }

  .container {
    padding: 0 1.5rem;
  }

  .hero__avatar {
    width: 140px;
    height: 140px;
    margin-bottom: 1.5rem;
  }

  .hero__title {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  .hero__subtitle {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .hero__description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .hero__stats {
    gap: 1rem;
  }

  .stat-item {
    padding: 1rem 1.2rem;
    min-width: 110px;
  }

  .stat-item__number {
    font-size: 1.8rem;
  }

  .stat-item__label {
    font-size: 0.75rem;
  }

  .hero__buttons {
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .btn {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 0.95rem;
  }
}
</style>