// app/translations.ts

export type LangCode = "en" | "pt" | "es" | "fr" | "de" | "ja";

// dicionário de textos por idioma
export const translations: Record<
  LangCode,
  {
    heroHeadline: string;
    heroSub: string;
    promptPlaceholder: string;
    badgeAiTitle: string;
    badgeAiDesc: string;
    badgeTeamTitle: string;
    badgeTeamDesc: string;
    badgeLaunchTitle: string;
    badgeLaunchDesc: string;
    footerTagline: string;
    startButton: string;
  }
> = {
  en: {
    heroHeadline: "Shape your vision into reality.",
    heroSub:
      "Tell Kodiah what you want. We build intelligent, connected applications — fast, reliable, and beautifully designed. No code needed.",
    promptPlaceholder:
      "Build me an appointment app that takes payments",
    badgeAiTitle: "Built with AI",
    badgeAiDesc:
      "You describe the product. Kodiah drafts it in minutes.",
    badgeTeamTitle: "Refined by humans",
    badgeTeamDesc:
      "Our team polishes flows, UI and data model for real business use.",
    badgeLaunchTitle: "Ready to sell",
    badgeLaunchDesc:
      "Hosting, login, dashboard, payments. You don’t just “test” — you launch.",
    footerTagline: "Kodiah — Intelligence has a new signature.",
    startButton: "Start Building",
  },

  pt: {
    heroHeadline: "Transforme sua visão em realidade.",
    heroSub:
      "Diga para a Kodiah o que você quer. Nós construímos aplicações inteligentes e conectadas — rápido, confiável e com design de alto nível. Sem precisar programar.",
    promptPlaceholder:
      "Crie um app de agendamento que aceita pagamento",
    badgeAiTitle: "Construído com IA",
    badgeAiDesc:
      "Você descreve o produto. A Kodiah desenha em minutos.",
    badgeTeamTitle: "Aprimorado por humanos",
    badgeTeamDesc:
      "Nosso time ajusta fluxo, interface e dados para uso real de negócio.",
    badgeLaunchTitle: "Pronto para vender",
    badgeLaunchDesc:
      "Hospedagem, login, dashboard, pagamentos. Você não só “testa” — você lança.",
    footerTagline: "Kodiah — Inteligência ganhou nova assinatura.",
    startButton: "Começar agora",
  },

  es: {
    heroHeadline: "Convierte tu visión en realidad.",
    heroSub:
      "Dile a Kodiah lo que quieres. Construimos aplicaciones inteligentes y conectadas — rápido, confiable y con un diseño impecable. Sin código.",
    promptPlaceholder:
      "Crea una app de reservas con pago integrado",
    badgeAiTitle: "Creado con IA",
    badgeAiDesc:
      "Describes el producto. Kodiah lo genera en minutos.",
    badgeTeamTitle: "Refinado por humanos",
    badgeTeamDesc:
      "Pulimos flujos, interfaz y modelo de datos para uso real.",
    badgeLaunchTitle: "Listo para vender",
    badgeLaunchDesc:
      "Hosting, login, dashboard, pagos. No es demo — es producto.",
    footerTagline: "Kodiah — La inteligencia tiene nueva firma.",
    startButton: "Empezar",
  },

  fr: {
    heroHeadline: "Donnez forme à votre vision.",
    heroSub:
      "Dites à Kodiah ce que vous voulez. Nous créons des applications intelligentes et connectées — rapides, fiables et magnifiquement conçues. Sans code.",
    promptPlaceholder:
      "Crée une app de rendez-vous avec paiement intégré",
    badgeAiTitle: "Conçu avec l’IA",
    badgeAiDesc:
      "Vous décrivez le produit. Kodiah le génère en quelques minutes.",
    badgeTeamTitle: "Fini par des humains",
    badgeTeamDesc:
      "Notre équipe peaufine les flux, l’UI et la structure de données pour un usage réel.",
    badgeLaunchTitle: "Prêt à vendre",
    badgeLaunchDesc:
      "Hébergement, connexion, dashboard, paiements. Ce n’est pas un test — c’est un lancement.",
    footerTagline:
      "Kodiah — L’intelligence a une nouvelle signature.",
    startButton: "Commencer",
  },

  de: {
    heroHeadline: "Forme deine Vision zur Realität.",
    heroSub:
      "Sag Kodiah, was du bauen willst. Wir liefern intelligente, vernetzte Anwendungen — schnell, stabil und hochwertig im Design. Kein Code nötig.",
    promptPlaceholder:
      "Erstelle eine Buchungs-App mit Zahlungsfunktion",
    badgeAiTitle: "Mit KI gebaut",
    badgeAiDesc:
      "Du beschreibst das Produkt. Kodiah entwirft es in Minuten.",
    badgeTeamTitle: "Veredelt von Experten",
    badgeTeamDesc:
      "Unser Team finalisiert Flows, UI und Datenmodell für echte Business-Nutzung.",
    badgeLaunchTitle: "Bereit zum Verkaufen",
    badgeLaunchDesc:
      "Hosting, Login, Dashboard, Payments. Kein Prototyp — ein Produkt.",
    footerTagline:
      "Kodiah — Intelligenz bekommt eine neue Signatur.",
    startButton: "Jetzt starten",
  },

  ja: {
    heroHeadline: "アイデアを現実にする。",
    heroSub:
      "ほしいアプリをKodiahに伝えるだけ。高速・安定・美しいデザインのインテリジェントなアプリを、コードなしで構築します。",
    promptPlaceholder:
      "支払い対応の予約アプリを作って",
    badgeAiTitle: "AIで構築",
    badgeAiDesc:
      "あなたが説明するだけで、Kodiahが数分でドラフトします。",
    badgeTeamTitle: "人間の仕上げ",
    badgeTeamDesc:
      "実運用向けにフロー・UI・データ設計を専門チームが磨き上げます。",
    badgeLaunchTitle: "すぐ販売できる状態",
    badgeLaunchDesc:
      "ホスティング / ログイン / ダッシュボード / 決済すべて込み。テストではなく、リリース。",
    footerTagline: "Kodiah — インテリジェンスの新しいかたち。",
    startButton: "今すぐ始める",
  },
};
