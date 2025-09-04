import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Users, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/ui/SEOHead";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in real app would fetch from API
  const project = {
    id: 1,
    title: "Финтех платформа для управления инвестициями",
    description: "Комплексное решение для управления инвестиционными портфелями с интеграцией банковских API и аналитикой в реальном времени.",
    fullDescription: `
      Разработали комплексную финтех платформу для управления инвестиционными портфелями, которая позволяет пользователям 
      отслеживать свои инвестиции в режиме реального времени, получать персонализированные рекомендации и автоматизировать 
      торговые стратегии.

      Платформа интегрирована с крупнейшими брокерами и банками, обеспечивая безопасный доступ к финансовым данным и 
      возможность совершения сделок прямо из интерфейса приложения.

      Особое внимание было уделено безопасности данных и соответствию финансовым регуляциям. Все операции проходят 
      многоуровневую аутентификацию, а данные шифруются на всех этапах передачи и хранения.
    `,
    client: "Крупный инвестиционный фонд",
    industry: "Финансы",
    year: "2024",
    duration: "8 месяцев",
    teamSize: "6 специалистов",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    features: [
      "Портфолио-трекер с визуализацией",
      "Интеграция с банковскими API",
      "Автоматические торговые стратегии",
      "Система уведомлений и алертов",
      "Мобильное приложение",
      "Расширенная аналитика и отчеты"
    ],
    challenges: [
      "Интеграция с множественными внешними API",
      "Обеспечение высокого уровня безопасности",
      "Обработка больших объемов финансовых данных",
      "Соответствие финансовым регуляциям"
    ],
    results: [
      "Увеличение активности пользователей на 150%",
      "Сокращение времени обработки заявок на 80%",
      "Повышение удовлетворенности клиентов до 95%",
      "Автоматизация 70% рутинных операций"
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Веб-платформа"
  };

  const relatedProjects = [
    {
      id: 2,
      title: "E-commerce маркетплейс",
      description: "Высоконагруженная платформа для онлайн-торговли",
      industry: "E-commerce",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "IoT система мониторинга", 
      description: "Система сбора данных с IoT-устройств",
      industry: "Промышленность",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <SEOHead
        title={`${project.title} - кейс разработки IT решения | DNK Mobile`}
        description={`Case study проекта ${project.title}. Описание IT решения, технологий и результатов. Пример успешной разработки ПО от DNK Mobile.`}
        keywords={`case study, IT проект, ${project.technologies.join(', ')}, разработка ПО, ${project.industry}`}
        canonical={`https://dnkmobile.ru/projects/${id}`}
      />

      <div className="min-h-screen">
        {/* Header */}
        <section className="py-8 bg-surface-light">
          <div className="container-custom">
            <Link
              to="/projects"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться к проектам
            </Link>
            
            <div className="flex items-center space-x-3 mb-4">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.industry}</Badge>
              <span className="text-text-secondary text-sm">{project.year}</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-hero-text mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center"
                    >
                      <img
                        src={image}
                        alt={`Скриншот проекта ${index + 1}`}
                        className="w-16 h-16 opacity-50"
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-hero-text mb-4">
                    О проекте
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {project.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-text-secondary leading-relaxed mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-hero-text mb-4">
                    Ключевые функции
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h2 className="text-2xl font-bold text-hero-text mb-4">
                    Технические вызовы
                  </h2>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h2 className="text-2xl font-bold text-hero-text mb-4">
                    Результаты
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <Card key={index} className="border-0 bg-surface-light">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary text-sm">{result}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-hero-text mb-4">
                      Детали проекта
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium text-hero-text">Длительность</div>
                          <div className="text-text-secondary text-sm">{project.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium text-hero-text">Команда</div>
                          <div className="text-text-secondary text-sm">{project.teamSize}</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium text-hero-text">Технологии</div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-hero-text mb-4">
                      Начать свой проект
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Хотите создать подобное решение для своего бизнеса?
                    </p>
                    <Link to="/contact">
                      <Button className="btn-primary w-full">
                        Обсудить проект
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="section-padding bg-surface-light">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-hero-text mb-8 text-center">
              Похожие проекты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Card key={relatedProject.id} className="card-hover overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-16 h-16 opacity-50"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {relatedProject.industry}
                    </Badge>
                    <h3 className="text-lg font-semibold text-hero-text mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {relatedProject.description}
                    </p>
                    <Link 
                      to={`/projects/${relatedProject.id}`}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    >
                      Подробнее
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;