<template>
  <div class="skills-view">
    <div class="container">
      <!-- Título da Seção -->
      <h2 class="section-title animate__animated animate__fadeInDown">
        Competências Técnicas
      </h2>

      <!-- Grid de Categorias -->
      <div class="skills-grid">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="index"
          class="skill-category animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- Ícone e Título -->
          <h3 class="skill-category__title">
            <span class="skill-category__icon">{{ category.icon }}</span>
            {{ category.title }}
          </h3>

          <!-- Lista de Skills -->
          <ul class="skill-list">
            <li 
              v-for="(skill, idx) in category.skills" 
              :key="idx"
              class="skill-item"
            >
              <span class="skill-bullet"></span>
              <span class="skill-name">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsView',
  data() {
    return {
      skillCategories: [
        {
          icon: '🗄️',
          title: 'SAP Expertise',
          skills: [
            'SAP Basis Administration',
            'SAP ERP & SAP HANA',
            'SAP BTP',
            'SAP Fiori & Portal'
          ]
        },
        {
          icon: '💻',
          title: 'Sistemas',
          skills: [
            'Linux (Red Hat, SUSE)',
            'Windows Server',
            'Oracle Solaris'
          ]
        },
        {
          icon: '⚡',
          title: 'Desenvolvimento',
          skills: [
            'ABAP Debug',
            'Power BI',
            'Cloud Computing (AWS)'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Container Principal */
.skills-view {
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

/* Grid de Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

/* Categoria de Skill */
.skill-category {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(120, 119, 198, 0.2);
  border-radius: 30px;
  padding: 3rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-category:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(120, 119, 198, 0.4);
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(120, 119, 198, 0.15);
}

/* Título da Categoria */
.skill-category__title {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-category__icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px rgba(120, 119, 198, 0.4));
}

/* Lista de Skills */
.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-item {
  padding: 1rem 0;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(120, 119, 198, 0.1);
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-item:hover {
  color: #fff;
  transform: translateX(10px);
}

/* Bullet */
.skill-bullet {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(120, 119, 198, 0.5);
}

/* Nome da Skill */
.skill-name {
  flex: 1;
}

/* ========== MOBILE FIX ========== */
@media (max-width: 768px) {
  .skills-view {
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

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1.5rem;
    border-radius: 20px;
  }

  .skill-category:hover {
    transform: translateY(-5px);
  }

  .skill-category__title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }

  .skill-category__icon {
    font-size: 1.75rem;
  }

  .skill-item {
    font-size: 0.95rem;
    padding: 0.75rem 0;
    gap: 0.75rem;
  }

  .skill-item:hover {
    transform: translateX(5px);
  }

  .skill-bullet {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .skill-category {
    padding: 1.25rem;
  }

  .skill-category__title {
    font-size: 1.2rem;
  }

  .skill-item {
    font-size: 0.9rem;
  }
}
</style>