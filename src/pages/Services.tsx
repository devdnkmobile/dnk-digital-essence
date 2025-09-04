import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Smartphone, Brain, Cpu, Shield, Database, Cloud, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/ui/SEOHead";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Разработка ПО на заказ",
      description: "Создаем уникальные программные решения, полностью адаптированные под специфику вашего бизнеса. От концепции до внедрения.",
      features: [
        "Анализ требований и техническое планирование",
        "Разработка архитектуры и дизайна системы",
        "Кодирование и тестирование",
        "Внедрение и техническая поддержка"
      ],
      technologies: "Python, Java, C#, Node.js, Go, Rust"
    },
    {
      icon: Globe,
      title: "Веб-разработка",
      description: "Современные веб-платформы и сайты с высокой производительностью, SEO-оптимизацией и адаптивным дизайном.",
      features: [
        "Frontend разработка на React, Vue, Angular",
        "Backend разработка и API",
        "SEO-оптимизация и производительность",
        "Интеграция с внешними системами"
      ],
      technologies: "React, Vue.js, Node.js, Django, Laravel"
    },
    {
      icon: Smartphone,
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные приложения для iOS и Android с интуитивным интерфейсом и высокой производительностью.",
      features: [
        "Нативная разработка для iOS и Android",
        "Кроссплатформенная разработка",
        "UI/UX дизайн мобильных интерфейсов",
        "Интеграция с внешними сервисами"
      ],
      technologies: "Swift, Kotlin, React Native, Flutter"
    },
    {
      icon: Brain,
      title: "AI/ML решения",
      description: "Интеграция искусственного интеллекта и машинного обучения в бизнес-процессы для автоматизации и повышения эффективности.",
      features: [
        "Анализ данных и машинное обучение",
        "Computer Vision и обработка изображений",
        "Natural Language Processing",
        "Рекомендательные системы"
      ],
      technologies: "Python, TensorFlow, PyTorch, Scikit-learn"
    },
    {
      icon: Cpu,
      title: "Блокчейн решения",
      description: "Децентрализованные приложения и смарт-контракты на современных блокчейн-платформах для безопасности и прозрачности.",
      features: [
        "Разработка смарт-контрактов",
        "DeFi приложения",
        "NFT платформы",
        "Аудит смарт-контрактов"
      ],
      technologies: "Solidity, Web3.js, Ethereum, Polygon"
    },
    {
      icon: Shield,
      title: "IT-консалтинг",
      description: "Экспертные консультации по цифровой трансформации, техническому аудиту и оптимизации IT-инфраструктуры.",
      features: [
        "Аудит существующих систем",
        "Планирование цифровой трансформации",
        "Выбор технологий и архитектуры",
        "Оптимизация процессов разработки"
      ],
      technologies: "DevOps, Cloud Architecture, Security"
    },
    {
      icon: Database,
      title: "Работа с данными",
      description: "Проектирование баз данных, настройка аналитики, создание отчетности и систем бизнес-интеллекта.",
      features: [
        "Проектирование и оптимизация БД",
        "Data Engineering и ETL",
        "Бизнес-аналитика и отчетность",
        "Big Data решения"
      ],
      technologies: "PostgreSQL, MongoDB, Redis, Apache Spark"
    },
    {
      icon: Cloud,
      title: "Облачные решения",
      description: "Миграция в облако, настройка облачной инфраструктуры и обеспечение масштабируемости приложений.",
      features: [
        "Миграция в облако",
        "Настройка облачной инфраструктуры",
        "Containerization и Kubernetes",
        "Мониторинг и логирование"
      ],
      technologies: "AWS, Azure, Google Cloud, Docker"
    },
    {
      icon: Settings,
      title: "DevOps и автоматизация",
      description: "Настройка процессов CI/CD, автоматизация развертывания и обеспечение надежности систем.",
      features: [
        "Настройка CI/CD пайплайнов",
        "Infrastructure as Code",
        "Мониторинг и алертинг",
        "Автоматизация тестирования"
      ],
      technologies: "Jenkins, GitLab CI, Terraform, Ansible"
    }
  ];

  return (
    <>
      <SEOHead
        title="IT услуги DNK Mobile - разработка ПО, веб и мобильные приложения"
        description="Полный спектр IT услуг: custom software development, веб-разработка, мобильные приложения, AI/ML решения, блокчейн, IT-консалтинг от DNK Mobile."
        keywords="IT услуги, разработка ПО на заказ, веб-разработка, мобильные приложения, AI решения, блокчейн разработка, IT консалтинг"
        canonical="https://dnkmobile.ru/services"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background to-surface-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-hero-text mb-6">
                IT услуги от DNK Mobile
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Комплексные решения для цифровой трансформации вашего бизнеса. 
                От разработки ПО на заказ до внедрения AI и блокчейн технологий.
              </p>
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-4">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-hover border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-hero-text mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-hero-text mb-3">
                          Что входит в услугу:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-hero-text mb-2">
                          Технологии:
                        </h4>
                        <p className="text-sm text-primary font-medium">
                          {service.technologies}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-surface-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
                  Как мы работаем
                </h2>
                <p className="text-lg text-text-secondary">
                  Проверенный процесс разработки, обеспечивающий качество и соблюдение сроков
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Анализ задач",
                    description: "Изучаем ваши требования и определяем оптимальное решение"
                  },
                  {
                    step: "02", 
                    title: "Планирование",
                    description: "Создаем техническое задание и план разработки"
                  },
                  {
                    step: "03",
                    title: "Разработка",
                    description: "Реализуем решение с регулярными демонстрациями прогресса"
                  },
                  {
                    step: "04",
                    title: "Запуск",
                    description: "Внедряем систему и обеспечиваем техническую поддержку"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-hero-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
                Начните свой проект уже сегодня
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Получите бесплатную консультацию и оценку стоимости вашего проекта
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Получить консультацию
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button className="btn-secondary text-lg px-8 py-4">
                    Посмотреть примеры работ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;