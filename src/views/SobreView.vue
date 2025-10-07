<template>
  <div class="sobre-view">
    <div class="container">
      <!-- Título da Seção -->
      <h2 class="section-title animate__animated animate__fadeInDown">Sobre Mim</h2>

      <!-- Grid de Cards -->
      <div class="about-grid">
        <!-- Card com v-for -->
        <div 
          v-for="(card, index) in cards" 
          :key="index"
          class="card animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="card__icon">{{ card.icon }}</div>
          <h3 class="card__title">{{ card.title }}</h3>
          <p class="card__description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SobreView',
  data() {
    return {
      cards: [
        {
          icon: '💼',
          title: 'Especialização SAP',
          description: 'Sólido domínio do sistema SAP, especificamente na área de Infraestrutura - Basis.'
        },
        {
          icon: '🎓',
          title: 'Formação',
          description: 'Graduando em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul.'
        },
        {
          icon: '🚀',
          title: 'Experiência',
          description: 'Mais de 3 anos na SONDA atuando como Consultor SAP Basis.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Container Principal */
.sobre-view {
  min-height: 100vh;
  padding: 6rem 0;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
}

/* Título da Seção */
.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 4rem;
  text-align: center;
  letter-spacing: -2px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  border-radius: 2px;
}

/* Grid de Cards */
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

/* Card */
.card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(120, 119, 198, 0.2);
  border-radius: 30px;
  padding: 3rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Borda Superior Gradiente */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  opacity: 0;
  transition: opacity 0.4s;
}

.card:hover::before {
  opacity: 1;
}

/* Hover no Card */
.card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(120, 119, 198, 0.5);
  transform: translateY(-15px);
  box-shadow: 
    0 30px 60px rgba(120, 119, 198, 0.2),
    0 0 100px rgba(139, 92, 246, 0.1);
}

/* Ícone */
.card__icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 20px rgba(120, 119, 198, 0.4));
}

/* Título do Card */
.card__title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

/* Descrição */
.card__description {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Responsivo */
@media (max-width: 768px) {
  .sobre-view {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    padding: 2rem;
    border-radius: 20px;
  }

  .card__icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .card__title {
    font-size: 1.3rem;
  }

  .card__description {
    font-size: 0.95rem;
  }
}
</style>