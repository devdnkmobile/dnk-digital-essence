import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/ui/SEOHead";
import blogMobileDev from "@/assets/blog-mobile-development.jpg";
import blogBlockchain from "@/assets/blog-blockchain.jpg";
import blogAiMl from "@/assets/blog-ai-ml.jpg";
import blogReactPerf from "@/assets/blog-react-performance.jpg";
import blogCyberSec from "@/assets/blog-cybersecurity.jpg";

// Mock data для статей блога
const blogPosts = [
  {
    id: 1,
    slug: "mobile-app-development-trends-2024",
    title: "Тенденции разработки мобильных приложений в 2024 году",
    excerpt: "Исследуем ключевые тренды в мобильной разработке: от нейросетей до новых фреймворков React Native и Flutter.",
    content: "Полный анализ современных подходов к разработке мобильных приложений...",
    author: "Команда DNK Mobile",
    publishDate: "2024-03-15",
    readTime: "5 мин чтения",
    category: "Мобильная разработка",
    tags: ["React Native", "Flutter", "iOS", "Android", "AI"],
    image: blogMobileDev,
    featured: true
  },
  {
    id: 2,
    slug: "blockchain-solutions-business",
    title: "Блокчейн-решения для бизнеса: практические кейсы",
    excerpt: "Как блокчейн технологии помогают компаниям повышать прозрачность операций и снижать издержки.",
    content: "Детальный разбор реальных кейсов внедрения блокчейн...",
    author: "Алексей Петров",
    publishDate: "2024-03-10",
    readTime: "7 мин чтения",
    category: "Блокчейн",
    tags: ["Blockchain", "Smart Contracts", "Web3", "DeFi"],
    image: blogBlockchain,
    featured: false
  },
  {
    id: 3,
    slug: "ai-integration-web-applications",
    title: "Интеграция ИИ в веб-приложения: пошаговое руководство",
    excerpt: "Практические советы по внедрению машинного обучения в веб-проекты для улучшения пользовательского опыта.",
    content: "Подробное руководство по интеграции AI/ML решений...",
    author: "Мария Сидорова",
    publishDate: "2024-03-05",
    readTime: "10 мин чтения",
    category: "Искусственный интеллект",
    tags: ["AI", "Machine Learning", "ChatGPT", "API"],
    image: blogAiMl,
    featured: true
  },
  {
    id: 4,
    slug: "react-performance-optimization",
    title: "Оптимизация производительности React приложений",
    excerpt: "Эффективные методы повышения скорости работы React приложений: от lazy loading до мемоизации.",
    content: "Комплексный гид по оптимизации React приложений...",
    author: "Дмитрий Иванов",
    publishDate: "2024-02-28",
    readTime: "8 мин чтения",
    category: "Веб-разработка",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    image: blogReactPerf,
    featured: false
  },
  {
    id: 5,
    slug: "cybersecurity-best-practices",
    title: "Кибербезопасность в разработке: лучшие практики",
    excerpt: "Основные принципы безопасной разработки программного обеспечения и защиты от современных угроз.",
    content: "Подробный обзор методов обеспечения безопасности...",
    author: "Команда DNK Mobile",
    publishDate: "2024-02-20",
    readTime: "6 мин чтения",
    category: "Кибербезопасность",
    tags: ["Security", "OWASP", "Penetration Testing", "DevSecOps"],
    image: blogCyberSec,
    featured: false
  }
];

const categories = [
  "Все категории",
  "Мобильная разработка",
  "Веб-разработка",
  "Блокчейн",
  "Искусственный интеллект",
  "Кибербезопасность"
];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Блог DNK Mobile - Статьи о разработке ПО и IT-технологиях"
        description="Читайте экспертные статьи о мобильной разработке, веб-технологиях, блокчейне и ИИ от команды DNK Mobile. Практические советы и кейсы."
        keywords="блог разработка, IT статьи, мобильные приложения, веб-разработка, блокчейн, искусственный интеллект"
        canonical="https://dnkmobile.ru/blog"
      />

      <div className="min-h-screen bg-background">
        {/* Hero секция */}
        <section className="section-padding bg-gradient-to-b from-surface-light to-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-text mb-6">
                Экспертный блог о разработке и IT-технологиях
              </h1>
              <p className="subtitle-text mb-8">
                Делимся знаниями, опытом и лучшими практиками в области разработки программного обеспечения, 
                мобильных приложений и современных технологий
              </p>
            </div>
          </div>
        </section>

        {/* Рекомендуемые статьи */}
        {featuredPosts.length > 0 && (
          <section className="section-padding">
            <div className="container-custom">
              <h2 className="text-3xl font-semibold text-hero-text mb-12">Рекомендуемые статьи</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="card-hover overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishDate).toLocaleDateString('ru-RU')}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-hero-text leading-tight mb-3">
                        {post.title}
                      </h3>
                      <p className="text-text-secondary mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-text-secondary">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="group">
                            Читать далее
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Все статьи */}
        <section className="section-padding bg-surface-light">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Основной контент */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-semibold text-hero-text mb-8">Все статьи</h2>
                
                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                              <Badge variant="secondary">{post.category}</Badge>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishDate).toLocaleDateString('ru-RU')}
                              </span>
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-hero-text leading-tight mb-3">
                              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-text-secondary mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-2 text-sm text-text-secondary">
                                <User className="w-4 h-4" />
                                {post.author}
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Пагинация */}
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" disabled>Предыдущая</Button>
                    <Button variant="default">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Следующая</Button>
                  </div>
                </div>
              </div>

              {/* Боковая панель */}
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  {/* Категории */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-hero-text">Категории</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant="ghost"
                            className="w-full justify-start text-sm"
                          >
                            <Tag className="w-4 h-4 mr-2" />
                            {category}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Последние статьи */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-hero-text">Последние статьи</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentPosts.map((post) => (
                          <div key={post.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                            <h4 className="text-sm font-medium text-hero-text mb-1 leading-tight">
                              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </h4>
                            <p className="text-xs text-text-secondary">
                              {new Date(post.publishDate).toLocaleDateString('ru-RU')} • {post.readTime}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-3">Нужна разработка?</h3>
                      <p className="text-sm mb-4 opacity-90">
                        Обсудим ваш проект и предложим лучшее решение
                      </p>
                      <Link to="/contact">
                        <Button variant="secondary" className="w-full">
                          Связаться с нами
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;