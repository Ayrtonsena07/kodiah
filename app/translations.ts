export const translations = {
  en: {
    heroHeadline: "Shape your vision into reality.",
    heroSub:
      "Tell Kodiah what you want. We build intelligent, connected applications — fast, reliable, and beautifully designed. No code needed.",
    promptLabel: "Tell Kodiah what to build:",            // ⬅️ AQUI
    promptPlaceholder: "Build me an appointment app that takes payments",

    badgeAiTitle: "Built with AI",
    badgeAiDesc: "You describe the product. Kodiah drafts it in minutes.",

    badgeTeamTitle: "Refined by humans",
    badgeTeamDesc:
      "Our team polishes flows, UI and data model for real business use.",

    badgeLaunchTitle: "Ready to sell",
    badgeLaunchDesc:
      "Hosting, login, dashboard, payments. You don't just “test” — you launch.",

    footerTagline: "Kodiah — Intelligence has a new signature.",
    startButton: "Start Building",
    languageLabel: "EN",
  },

  pt: {
    heroHeadline: "Dê forma à sua visão.",
    heroSub:
      "Fale pra Kodiah o que você quer. Nós construímos aplicativos inteligentes e conectados — rápido, confiável e com design impecável. Sem código.",
    promptLabel: "Diga à Kodiah o que construir:",         // ⬅️ AQUI
    promptPlaceholder: "Crie um app de agendamento que aceite pagamentos",

    badgeAiTitle: "Feito com IA",
    badgeAiDesc: "Você descreve o produto. A Kodiah rascunha em minutos.",

    badgeTeamTitle: "Refinado por humanos",
    badgeTeamDesc:
      "Nosso time ajusta fluxos, interface e dados para uso real de negócios.",

    badgeLaunchTitle: "Pronto pra vender",
    badgeLaunchDesc:
      "Hosting, login, dashboard, cobrança. Você não só “testa” — você lança.",

    footerTagline: "Kodiah — Inteligência tem uma nova assinatura.",
    startButton: "Começar agora",
    languageLabel: "PT",
  },

  es: {
    heroHeadline: "Convierte tu visión en realidad.",
    heroSub:
      "Dile a Kodiah lo que quieres. Creamos aplicaciones inteligentes y conectadas — rápido, confiable y con diseño impecable. Sin código.",
    promptLabel: "Dile a Kodiah qué construir:",           // ⬅️ AQUI
    promptPlaceholder: "Crea una app de reservas que acepte pagos",

    badgeAiTitle: "Creado con IA",
    badgeAiDesc: "Describes el producto. Kodiah lo redacta en minutos.",

    badgeTeamTitle: "Perfeccionado por humanos",
    badgeTeamDesc:
      "Nuestro equipo pule flujos, interfaz y modelo de datos para uso real.",

    badgeLaunchTitle: "Listo para vender",
    badgeLaunchDesc:
      "Hosting, login, panel, pagos. No es sólo una demo — es tu producto.",

    footerTagline: "Kodiah — La inteligencia tiene una nueva firma.",
    startButton: "Empezar ahora",
    languageLabel: "ES",
  },
};

export type Lang = keyof typeof translations;
export type TDict = (typeof translations)["en"];
