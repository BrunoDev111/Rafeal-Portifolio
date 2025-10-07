<template>
  <div class="contato-view">
    <div class="container">
      <!-- Título -->
      <h2 class="section-title animate__animated animate__fadeInDown">
        Vamos Conversar?
      </h2>
      
      <!-- Subtítulo -->
      <p class="section-subtitle animate__animated animate__fadeInUp">
        Interessado em discutir projetos SAP ou oportunidades? Entre em contato!
      </p>

      <!-- Cards de Contato -->
      <div class="contact-links">
        <!-- LinkedIn -->
        <a 
          :href="linkedinUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card animate__animated animate__fadeInLeft"
        >
          <div class="contact-card__icon">💼</div>
          <h3 class="contact-card__title">LinkedIn</h3>
          <p class="contact-card__description">Conecte-se comigo</p>
        </a>

        <!-- Email -->
        <a 
          :href="`mailto:${email}`"
          class="contact-card animate__animated animate__fadeInRight"
        >
          <div class="contact-card__icon">📧</div>
          <h3 class="contact-card__title">Email</h3>
          <p class="contact-card__description">Envie uma mensagem</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContatoView',
  data() {
    return {
      linkedinUrl: 'https://www.linkedin.com/in/rafael-rezende-de-oliveira-9523a4196/',
      email: 'rafaelrez99@gmail.com' // ⬅️ TROCAR pelo email real
    }
  }
}
</script>

<style scoped>
/* Container Principal */
.contato-view {
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  text-align: center;
  width: 100%;
}

/* Título */
.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  position: relative;
  display: inline-block;
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

/* Subtítulo */
.section-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.3rem;
  margin-bottom: 4rem;
  font-weight: 500;
  line-height: 1.6;
}

/* Grid de Links */
.contact-links {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Card de Contato */
.contact-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(120, 119, 198, 0.2);
  border-radius: 30px;
  padding: 3rem;
  text-decoration: none;
  color: #fff;
  min-width: 280px;
  max-width: 350px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Efeito de Brilho */
.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(120, 119, 198, 0.1), transparent);
  transition: left 0.6s;
}

.contact-card:hover::before {
  left: 100%;
}

/* Hover no Card */
.contact-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(120, 119, 198, 0.5);
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 30px 60px rgba(120, 119, 198, 0.3);
}

/* Ícone */
.contact-card__icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 20px rgba(120, 119, 198, 0.4));
}

/* Título */
.contact-card__title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

/* Descrição */
.contact-card__description {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.5rem;
  font-size: 1rem;
}

/* ========== MOBILE FIX ========== */
@media (max-width: 768px) {
  .contato-view {
    padding: 2rem 0;
    min-height: calc(100vh - 80px);
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    padding: 0 1rem;
  }

  .contact-links {
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }

  .contact-card {
    min-width: auto;
    width: 100%;
    max-width: 400px;
    padding: 2.5rem;
    border-radius: 20px;
  }

  .contact-card:hover {
    transform: translateY(-5px) scale(1.02);
  }

  .contact-card__icon {
    font-size: 3rem;
  }

  .contact-card__title {
    font-size: 1.3rem;
  }

  .contact-card__description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .contact-card {
    padding: 2rem;
    max-width: 100%;
  }

  .contact-card__icon {
    font-size: 2.5rem;
  }
}
</style>