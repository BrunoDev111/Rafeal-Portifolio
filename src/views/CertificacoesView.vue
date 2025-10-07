<template>
  <div class="certificacoes-view">
    <div class="container">
      <!-- Título da Seção -->
      <h2 class="section-title animate__animated animate__fadeInDown">
        Certificações
      </h2>

      <!-- Grid de Certificados -->
      <div class="cert-grid">
        <div 
          v-for="(cert, index) in certifications" 
          :key="index"
          class="cert-card animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="cert-card__icon">🏆</div>
          <h3 class="cert-card__title">{{ cert.title }}</h3>
          <p class="cert-card__info">
            <span class="cert-card__issuer">{{ cert.issuer }}</span>
            <span class="cert-card__separator">•</span>
            <span class="cert-card__date">{{ cert.date }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificacoesView',
  data() {
    return {
      certifications: [
        {
          title: 'SAP Business Technology Platform 2025',
          issuer: 'SAP',
          date: 'Jun 2025'
        },
        {
          title: 'Computação em Nuvem Amazon AWS',
          issuer: 'Udemy',
          date: 'Mar 2025'
        },
        {
          title: 'SAP BTP - Clean Core',
          issuer: 'Lab2Learn',
          date: '2024'
        },
        {
          title: 'Linux - Conceitos e Comandos',
          issuer: 'Udemy',
          date: '2024'
        },
        {
          title: 'ABAP Debug para Funcionais',
          issuer: 'SONDA',
          date: '2024'
        },
        {
          title: 'Power BI - Visão Geral',
          issuer: 'Ka Solution',
          date: '2024'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Container Principal */
.certificacoes-view {
  min-height: 100vh;
  padding: 6rem 0;
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

/* Grid de Certificados */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;
}

/* Card de Certificado */
.cert-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(120, 119, 198, 0.2);
  border-radius: 30px;
  padding: 3rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Borda Superior Gradiente */
.cert-card::before {
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

.cert-card:hover::before {
  opacity: 1;
}

/* Hover */
.cert-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(120, 119, 198, 0.5);
  transform: translateY(-15px);
  box-shadow: 
    0 30px 60px rgba(120, 119, 198, 0.2),
    0 0 100px rgba(139, 92, 246, 0.1);
}

/* Ícone */
.cert-card__icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 20px rgba(120, 119, 198, 0.4));
}

/* Título */
.cert-card__title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  hyphens: auto;
}

/* Info */
.cert-card__info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.cert-card__issuer {
  color: #667eea;
  font-weight: 600;
  font-size: 1rem;
}

.cert-card__separator {
  color: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
}

.cert-card__date {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  font-size: 1rem;
}

/* ========== MOBILE FIX ========== */
@media (max-width: 768px) {
  .certificacoes-view {
    padding: 2rem 0;
    min-height: auto;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    left: 0;
    transform: none;
    width: 100%;
  }

  .cert-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .cert-card {
    padding: 2rem;
    border-radius: 20px;
  }

  .cert-card:hover {
    transform: translateY(-5px);
  }

  .cert-card__icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .cert-card__title {
    font-size: 1.2rem;
    min-height: auto;
    margin-bottom: 1rem;
  }

  .cert-card__info {
    gap: 0.4rem;
    font-size: 0.9rem;
  }

  .cert-card__issuer,
  .cert-card__separator,
  .cert-card__date {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .cert-card {
    padding: 1.5rem;
  }

  .cert-card__icon {
    font-size: 2.5rem;
  }

  .cert-card__title {
    font-size: 1.1rem;
  }

  .cert-card__info {
    flex-direction: column;
    gap: 0.25rem;
  }

  .cert-card__separator {
    display: none;
  }
}
</style>