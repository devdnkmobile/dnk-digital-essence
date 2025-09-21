import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Globe, Brain, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/ui/SEOHead";
import heroImage from "@/assets/hero-image.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectIot from "@/assets/project-iot.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Разработка ПО на заказ",
      description: "Создаем уникальные программные решения, адаптированные под специфику вашего бизнеса",
    },
    {
      icon: Globe,
      title: "Веб-разработка",
      description: "Современные веб-платформы и сайты с высокой производительностью и SEO-оптимизацией",
    },
    {
      icon: Smartphone,
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные приложения для iOS и Android",
    },
    {
      icon: Brain,
      title: "AI/ML решения",
      description: "Интеграция искусственного интеллекта и машинного обучения в бизнес-процессы",
    },
    {
      icon: Cpu,
      title: "Блокчейн разработка",
      description: "Децентрализованные приложения и смарт-контракты на современных блокчейн-платформах",
    },
    {
      icon: Shield,
      title: "IT-консалтинг",
      description: "Экспертные консультации по цифровой трансформации и техническому аудиту",
    },
  ];

  const projects = [
    {
      title: "Финтех платформа",
      description: "Комплексное решение для управления финансами с интеграцией банковских API",
      industry: "Финансы",
      image: projectFintech,
    },
    {
      title: "E-commerce маркетплейс",
      description: "Высоконагруженная платформа для онлайн-торговли с AI-рекомендациями",
      industry: "Электронная коммерция",
      image: projectEcommerce,
    },
    {
      title: "IoT система мониторинга",
      description: "Система сбора и анализа данных с IoT-устройств в реальном времени",
      industry: "Промышленность",
      image: projectIot,
    },
  ];

  const clients = [
    { name: "Сбербанк", logo: "/placeholder.svg" },
    { name: "Яндекс", logo: "/placeholder.svg" },
    { name: "МТС", logo: "/placeholder.svg" },
    { name: "Альфа-Банк", logo: "/placeholder.svg" },
    { name: "OZON", logo: "/placeholder.svg" },
    { name: "Тинькофф", logo: "/placeholder.svg" },
  ];

  return (
    <>
      <SEOHead
        title="DNK Mobile - IT-решения и разработка ПО на заказ | Москва"
        description="DNK Mobile - ведущая IT-компания по разработке программного обеспечения. Создаем мобильные приложения, веб-платформы и AI-решения для бизнеса."
        keywords="разработка ПО, IT услуги, мобильные приложения, веб-разработка, AI решения, блокчейн"
        canonical="https://dnkmobile.ru/"
      />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-background to-surface-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="DNK Mobile IT команда разработчиков"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-text mb-6">
              Разрабатываем цифровые продукты, которые трансформируют бизнес
            </h1>
            <h2 className="subtitle-text mb-8">
              DNK Mobile — экспертная команда разработчиков, создающая инновационные IT-решения для компаний любого масштаба
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-4">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Посмотреть портфолио
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
              О компании
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Мы специализируемся на заказной разработке цифровых продуктов для бизнеса любого масштаба. 
              Создаём мобильные приложения, веб-платформы, e-commerce решения, интерфейсы, серверные части 
              и AI-решения, адаптированные под задачи клиентов.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-text-secondary">Проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-text-secondary">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-text-secondary">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-text-secondary">Экспертов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-surface-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
              Наши услуги
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Полный спектр IT-услуг для цифровой трансформации вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-hero-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-secondary">
                Все услуги
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
              Избранные проекты
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Примеры наших успешных решений для различных отраслей
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.industry}
                  </div>
                  <h3 className="text-xl font-semibold text-hero-text mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>
                  <Link 
                    to={`/projects/${index + 1}`}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                  >
                    Подробнее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="btn-secondary">
                Все проекты
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-surface-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
              Нам доверяют
            </h2>
            <p className="text-lg text-text-secondary">
              Ведущие компании выбирают нас для реализации своих IT-проектов
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-16 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={client.logo}
                  alt={`Логотип ${client.name}`}
                  className="max-h-8 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Расскажите о своих задачах, и мы предложим оптимальное IT-решение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  Обсудить проект
                </Button>
              </Link>
              <a href="tel:+79000000000">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Позвонить сейчас
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;