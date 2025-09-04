import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/ui/SEOHead";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Финтех платформа для управления инвестициями",
      description: "Комплексное решение для управления инвестиционными портфелями с интеграцией банковских API и аналитикой в реальном времени.",
      industry: "Финансы",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      image: "/placeholder.svg",
      category: "Веб-платформа",
      year: "2024"
    },
    {
      id: 2,
      title: "E-commerce маркетплейс с AI-рекомендациями",
      description: "Высоконагруженная платформа для онлайн-торговли с системой персонализированных рекомендаций на основе машинного обучения.",
      industry: "Электронная коммерция",
      technologies: ["Vue.js", "Python", "TensorFlow", "MongoDB", "Kubernetes"],
      image: "/placeholder.svg",
      category: "Маркетплейс",
      year: "2024"
    },
    {
      id: 3,
      title: "IoT система мониторинга промышленного оборудования",
      description: "Система сбора и анализа данных с IoT-устройств в реальном времени для предиктивного обслуживания оборудования.",
      industry: "Промышленность",
      technologies: ["Angular", "Python", "InfluxDB", "MQTT", "Grafana"],
      image: "/placeholder.svg",
      category: "IoT платформа",
      year: "2023"
    },
    {
      id: 4,
      title: "Мобильное приложение для доставки еды",
      description: "Кроссплатформенное мобильное приложение с геолокацией, системой заказов и интеграцией с платежными системами.",
      industry: "Доставка",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
      image: "/placeholder.svg",
      category: "Мобильное приложение",
      year: "2023"
    },
    {
      id: 5,
      title: "Блокчейн платформа для торговли NFT",
      description: "Децентрализованная платформа для создания, покупки и продажи NFT с интеграцией различных блокчейн сетей.",
      industry: "Блокчейн",
      technologies: ["React", "Solidity", "Web3.js", "IPFS", "Ethereum"],
      image: "/placeholder.svg",
      category: "DeFi платформа",
      year: "2023"
    },
    {
      id: 6,
      title: "CRM система для управления клиентами",
      description: "Комплексная CRM система с автоматизацией продаж, аналитикой и интеграцией с внешними сервисами.",
      industry: "B2B",
      technologies: ["Laravel", "Vue.js", "MySQL", "ElasticSearch"],
      image: "/placeholder.svg",
      category: "CRM система",
      year: "2022"
    },
    {
      id: 7,
      title: "Образовательная платформа с видеокурсами",
      description: "Онлайн платформа для обучения с системой видеокурсов, тестирования и отслеживания прогресса студентов.",
      industry: "Образование",
      technologies: ["Django", "React", "PostgreSQL", "AWS S3", "WebRTC"],
      image: "/placeholder.svg",
      category: "EdTech платформа",
      year: "2022"
    },
    {
      id: 8,
      title: "Система управления складом с RFID",
      description: "Автоматизированная система управления складскими операциями с интеграцией RFID технологий.",
      industry: "Логистика",
      technologies: ["C#", ".NET Core", "SQL Server", "RFID", "WPF"],
      image: "/placeholder.svg",
      category: "Складская система",
      year: "2022"
    },
    {
      id: 9,
      title: "Телемедицинская платформа",
      description: "Платформа для онлайн консультаций врачей с системой записи, видеозвонков и электронных рецептов.",
      industry: "Медицина",
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io"],
      image: "/placeholder.svg",
      category: "Телемедицина",
      year: "2021"
    }
  ];

  const categories = ["Все проекты", "Веб-платформа", "Мобильное приложение", "DeFi платформа", "CRM система", "IoT платформа"];

  return (
    <>
      <SEOHead
        title="Портфолио DNK Mobile - наши проекты и кейсы разработки ПО"
        description="Примеры наших IT проектов: веб-платформы, мобильные приложения, блокчейн решения, IoT системы. Case studies успешной разработки ПО."
        keywords="портфолио, IT проекты, кейсы разработки, примеры работ, case study, веб-платформы, мобильные приложения"
        canonical="https://dnkmobile.ru/projects"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background to-surface-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-hero-text mb-6">
                Наши проекты и кейсы
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Примеры успешных IT-решений, которые мы создали для клиентов из различных отраслей. 
                От стартапов до крупных корпораций.
              </p>
              <Link to="/contact">
                <Button className="btn-primary text-lg px-8 py-4">
                  Обсудить ваш проект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-surface-light">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-text-secondary">Проектов завершено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-text-secondary">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-text-secondary">Отраслей</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-text-secondary">Проектов в срок</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "btn-primary" : "btn-secondary"}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="card-hover overflow-hidden border-0 shadow-sm">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={`Проект ${project.title}`}
                      className="w-16 h-16 opacity-50"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-text-secondary">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-hero-text mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-medium text-primary mb-2">
                        {project.industry}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center text-sm"
                    >
                      Подробнее о проекте
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-surface-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
                Хотите создать подобный проект?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Расскажите о своих задачах, и мы разработаем решение, превосходящее ваши ожидания
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Начать проект
                  </Button>
                </Link>
                <a 
                  href="mailto:info@dnkmobile.ru"
                  className="inline-block"
                >
                  <Button className="btn-secondary text-lg px-8 py-4">
                    Написать на email
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;