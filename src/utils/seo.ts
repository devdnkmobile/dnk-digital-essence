interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
}

export const generateSEOData = (pageName: string, customData?: Partial<SEOData>): SEOData => {
  const baseData = {
    title: "DNK Mobile - IT-решения и разработка ПО на заказ",
    description: "DNK Mobile - ведущая IT-компания по разработке программного обеспечения. Создаем мобильные приложения, веб-платформы и AI-решения для бизнеса.",
    keywords: "разработка ПО, IT услуги, мобильные приложения, веб-разработка, AI решения, блокчейн",
    canonical: "https://dnkmobile.ru/",
    ogType: "website"
  };

  const pageData: Record<string, Partial<SEOData>> = {
    home: baseData,
    services: {
      title: "IT-услуги DNK Mobile - разработка ПО на заказ",
      description: "Полный спектр IT-услуг: разработка мобильных приложений, веб-платформ, блокчейн и AI-решений. Экспертная команда разработчиков.",
      keywords: "IT услуги, разработка ПО, мобильные приложения, веб-разработка, блокчейн, AI решения, консалтинг",
      canonical: "https://dnkmobile.ru/services"
    },
    projects: {
      title: "Портфолио DNK Mobile - наши IT проекты и кейсы",
      description: "Примеры наших успешных IT-проектов: веб-платформы, мобильные приложения, блокчейн решения. Case studies разработки ПО.",
      keywords: "портфолио, IT проекты, кейсы разработки, примеры работ, case study",
      canonical: "https://dnkmobile.ru/projects"
    },
    about: {
      title: "О компании DNK Mobile - команда экспертов по разработке ПО",
      description: "DNK Mobile - команда опытных IT-специалистов с 7+ летним опытом разработки. Наша миссия, ценности и подход к созданию цифровых продуктов.",
      keywords: "о компании, IT команда, разработчики, DNK Mobile, опыт разработки",
      canonical: "https://dnkmobile.ru/about"
    },
    contact: {
      title: "Контакты DNK Mobile - связаться с IT-компанией",
      description: "Свяжитесь с DNK Mobile для обсуждения вашего IT-проекта. Контактная форма, телефон, email. Консультация по разработке ПО.",
      keywords: "контакты, связаться, IT компания, консультация, разработка ПО",
      canonical: "https://dnkmobile.ru/contact"
    },
    blog: {
      title: "Блог DNK Mobile - статьи о разработке ПО и IT-технологиях",
      description: "Читайте экспертные статьи о мобильной разработке, веб-технологиях, блокчейне и ИИ от команды DNK Mobile. Практические советы и кейсы.",
      keywords: "блог разработка, IT статьи, мобильные приложения, веб-разработка, блокчейн, искусственный интеллект",
      canonical: "https://dnkmobile.ru/blog"
    }
  };

  return {
    ...baseData,
    ...pageData[pageName],
    ...customData
  };
};

export const formatTitle = (title: string): string => {
  return title.length > 60 ? title.substring(0, 57) + "..." : title;
};

export const formatDescription = (description: string): string => {
  return description.length > 160 ? description.substring(0, 157) + "..." : description;
};