<template>
  <div class="experiencia-view">
    <div class="container">
      <!-- Título da Seção -->
      <h2 class="section-title animate__animated animate__fadeInDown">
        Experiência Profissional
      </h2>

      <!-- Timeline de Experiências -->
      <div class="experience-timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="experience-item animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- Header -->
          <div class="experience-item__header">
            <div>
              <div class="experience-item__title">{{ exp.title }}</div>
              <div class="experience-item__company">{{ exp.company }}</div>
            </div>
            <div class="experience-item__period">
              <div class="experience-item__date">{{ exp.period }}</div>
              <div class="experience-item__duration">{{ exp.duration }}</div>
            </div>
          </div>

          <!-- Descrição -->
          <p class="experience-item__description">{{ exp.description }}</p>

          <!-- Destaques -->
          <div class="experience-item__highlights">
            <div 
              v-for="(highlight, idx) in exp.highlights" 
              :key="idx"
              class="highlight-item"
            >
              <span class="highlight-item__bullet">✓</span>
              <span class="highlight-item__text">{{ highlight }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienciaView',
  data() {
    return {
      experiences: [
        {
          title: 'Consultor SAP Basis',
          company: 'SONDA',
          period: 'Mar 2024 - Presente',
          duration: '1 ano 8 meses',
          description: 'Administração e gerenciamento completo de ambientes SAP',
          highlights: [
            'Gestão de ambientes SAP ERP, HR, Fiori, HANA, BO, PI',
            'Aplicação de patches de segurança e atualizações',
            'Suporte técnico e resolução de incidentes'
          ]
        },
        {
          title: 'Analista Administrativo',
          company: 'SONDA',
          period: 'Set 2022 - Mar 2024',
          duration: '1 ano 7 meses',
          description: 'Administração de Logística MPS com foco em SAP',
          highlights: [
            'Gestão de requisições de compra (ME51N, ME52N, ME53N)',
            'Processos de recebimento e faturamento'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Container Principal */
.experiencia-view {
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

/* Timeline */
.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Item de Experiência */
.experience-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(120, 119, 198, 0.2);
  border-radius: 30px;
  padding: 3rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Borda Lateral Gradiente */
.experience-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #667eea, #764ba2, #f093fb);
  border-radius: 30px 0 0 30px;
  opacity: 0;
  transition: opacity 0.4s;
}

.experience-item:hover::before {
  opacity: 1;
}

/* Hover */
.experience-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(120, 119, 198, 0.4);
  transform: translateX(10px);
  box-shadow: -10px 20px 60px rgba(120, 119, 198, 0.15);
}

/* Header */
.experience-item__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Título */
.experience-item__title {
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

/* Empresa */
.experience-item__company {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}

/* Período */
.experience-item__period {
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
}

.experience-item__date {
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.experience-item__duration {
  color: #667eea;
  font-weight: 700;
  font-size: 0.95rem;
}

/* Descrição */
.experience-item__description {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Destaques */
.experience-item__highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  align-items: flex-start;
  font-size: 1.05rem;
  line-height: 1.5;
}

.highlight-item__bullet {
  color: #667eea;
  font-size: 1.2rem;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 2px;
}

.highlight-item__text {
  flex: 1;
}

/* ========== MOBILE FIX ========== */
@media (max-width: 768px) {
  .experiencia-view {
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

  .experience-timeline {
    gap: 1.5rem;
  }

  .experience-item {
    padding: 1.5rem;
    border-radius: 20px;
  }

  .experience-item:hover {
    transform: translateX(0);
    box-shadow: 0 10px 30px rgba(120, 119, 198, 0.15);
  }

  .experience-item__header {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .experience-item__title {
    font-size: 1.4rem;
    margin-bottom: 0.25rem;
  }

  .experience-item__company {
    font-size: 1.1rem;
  }

  .experience-item__period {
    text-align: left;
  }

  .experience-item__date {
    font-size: 0.9rem;
  }

  .experience-item__duration {
    font-size: 0.85rem;
  }

  .experience-item__description {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .experience-item__highlights {
    gap: 0.75rem;
  }

  .highlight-item {
    font-size: 0.9rem;
    gap: 0.75rem;
  }

  .highlight-item__bullet {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .experience-item {
    padding: 1.25rem;
  }

  .experience-item__title {
    font-size: 1.25rem;
  }

  .experience-item__company {
    font-size: 1rem;
  }
}
</style>