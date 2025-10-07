import { createStore } from 'vuex'

export default createStore({
  state: {
    userData: {
      name: 'Rafael Rezende de Oliveira',
      title: 'SAP Basis Consultant',
      subtitle: 'Process Management | Systems Development',
      avatar: '', // Adicione o caminho da sua foto depois
      stats: {
        experience: '3+',
        certifications: '6+',
        projects: '10+'
      },
      about: [
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
      ],
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
      ],
      skills: [
        {
          category: 'SAP Expertise',
          icon: '🗄️',
          items: [
            'SAP Basis Administration',
            'SAP ERP & SAP HANA',
            'SAP BTP',
            'SAP Fiori & Portal'
          ]
        },
        {
          category: 'Sistemas',
          icon: '💻',
          items: [
            'Linux (Red Hat, SUSE)',
            'Windows Server',
            'Oracle Solaris'
          ]
        },
        {
          category: 'Desenvolvimento',
          icon: '⚡',
          items: [
            'ABAP Debug',
            'Power BI',
            'Cloud Computing (AWS)'
          ]
        }
      ],
      certifications: [
        {
          title: 'SAP Business Technology Platform 2025',
          issuer: 'SAP',
          date: 'Jun 2025',
          icon: '🏆'
        },
        {
          title: 'Computação em Nuvem Amazon AWS',
          issuer: 'Udemy',
          date: 'Mar 2025',
          icon: '🏆'
        },
        {
          title: 'SAP BTP - Clean Core',
          issuer: 'Lab2Learn',
          date: '2024',
          icon: '🏆'
        },
        {
          title: 'Linux - Conceitos e Comandos',
          issuer: 'Udemy',
          date: '2024',
          icon: '🏆'
        },
        {
          title: 'ABAP Debug para Funcionais',
          issuer: 'SONDA',
          date: '2024',
          icon: '🏆'
        },
        {
          title: 'Power BI - Visão Geral',
          issuer: 'Ka Solution',
          date: '2024',
          icon: '🏆'
        }
      ],
      contact: {
        linkedin: 'https://www.linkedin.com/in/rafael-rezende-de-oliveira-9523a4196/',
        email: 'rafael@email.com'
      }
    },
    currentPage: 'home'
  },
  
  getters: {
    getUserData: (state) => state.userData,
    getCurrentPage: (state) => state.currentPage
  },
  
  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page
    }
  },
  
  actions: {
    setCurrentPage({ commit }, page) {
      commit('SET_CURRENT_PAGE', page)
    }
  }
})