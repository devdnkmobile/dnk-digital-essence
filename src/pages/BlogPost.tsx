import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/components/ui/SEOHead";
import blogMobileDev from "@/assets/blog-mobile-development.jpg";
import blogBlockchain from "@/assets/blog-blockchain.jpg";

// Mock данные для статей (в реальном проекте это будет API или CMS)
const blogPosts = {
  "mobile-app-development-trends-2024": {
    id: 1,
    title: "Тенденции разработки мобильных приложений в 2024 году",
    excerpt: "Исследуем ключевые тренды в мобильной разработке: от нейросетей до новых фреймворков React Native и Flutter.",
    author: "Команда DNK Mobile",
    publishDate: "2024-03-15",
    readTime: "5 мин чтения",
    category: "Мобильная разработка",
    tags: ["React Native", "Flutter", "iOS", "Android", "AI"],
    image: blogMobileDev,
    content: `
# Введение

Мобильная разработка продолжает стремительно эволюционировать. В 2024 году мы наблюдаем значительные изменения в подходах к созданию мобильных приложений, появление новых инструментов и технологий.

## Основные тренды 2024 года

### 1. Интеграция искусственного интеллекта

Искусственный интеллект становится неотъемлемой частью мобильных приложений. Разработчики активно интегрируют:

- **Персонализированные рекомендации** на основе поведения пользователей
- **Голосовые ассистенты** для улучшения UX
- **Компьютерное зрение** для AR-функций
- **Обработка естественного языка** для чат-ботов

### 2. Кроссплатформенная разработка

Кроссплатформенные решения достигли нового уровня зрелости:

#### React Native
- Новая архитектура Fabric обеспечивает лучшую производительность
- Hermes JavaScript Engine стал стандартом
- Улучшенная интеграция с нативными модулями

#### Flutter
- Flutter 3.x предлагает стабильную поддержку веб и десктоп платформ
- Улучшенная производительность рендеринга
- Растущая экосистема пакетов

### 3. Фокус на безопасности

Кибербезопасность становится приоритетом:

- **Биометрическая аутентификация** (Face ID, Touch ID, отпечатки пальцев)
- **End-to-end шифрование** для защиты данных
- **Двухфакторная аутентификация** как стандарт
- **Regular security audits** и penetration testing

## Технические инновации

### Progressive Web Apps (PWA)

PWA продолжают набирать популярность благодаря:

- Офлайн функциональности
- Push-уведомлениям
- Установке через браузер
- Кроссплатформенности

### 5G и Edge Computing

Развитие 5G сетей открывает новые возможности:

- **Низкая задержка** для real-time приложений
- **Edge computing** для обработки данных ближе к пользователю
- **Улучшенная AR/VR** функциональность
- **IoT интеграция** в мобильных приложениях

## Лучшие практики разработки

### Performance Optimization

1. **Lazy Loading** компонентов и изображений
2. **Code Splitting** для уменьшения размера bundle
3. **Optimized images** в формате WebP/AVIF
4. **Caching strategies** для снижения нагрузки на сеть

### User Experience

- **Micro-interactions** для повышения engagement
- **Dark mode support** как обязательный элемент
- **Accessibility** в соответствии с WCAG guidelines
- **Responsive design** для всех размеров экранов

## Заключение

2024 год обещает быть революционным для мобильной разработки. Компании, которые адаптируются к новым трендам и внедряют современные технологии, получат значительные конкурентные преимущества.

В DNK Mobile мы следим за всеми инновациями и готовы помочь вашему бизнесу воспользоваться новейшими возможностями мобильных технологий.

---

*Хотите обсудить разработку мобильного приложения для вашего бизнеса? Свяжитесь с нашими экспертами.*
    `
  },
  "blockchain-solutions-business": {
    id: 2,
    title: "Блокчейн-решения для бизнеса: практические кейсы",
    excerpt: "Как блокчейн технологии помогают компаниям повышать прозрачность операций и снижать издержки.",
    author: "Алексей Петров",
    publishDate: "2024-03-10",
    readTime: "7 мин чтения",
    category: "Блокчейн",
    tags: ["Blockchain", "Smart Contracts", "Web3", "DeFi"],
    image: blogBlockchain,
    content: `Блокчейн технологии перестали быть только криптовалютной экзотикой. Сегодня они предлагают реальные решения для бизнеса в различных отраслях.

## Ключевые преимущества блокчейна для бизнеса

### Прозрачность и доверие
- Неизменяемость записей  
- Публичная верификация транзакций
- Снижение необходимости в посредниках

### Снижение издержек
- Автоматизация процессов через смарт-контракты
- Уменьшение операционных расходов
- Оптимизация документооборота

## Практические кейсы внедрения

### Supply Chain Management
**Проблема:** Отсутствие прозрачности в цепочках поставок
**Решение:** Отслеживание товаров на всех этапах производства и доставки
**Результат:** Сокращение подделок на 90%, ускорение процесса аудита в 10 раз

### Финансовые услуги
DeFi платформы позволяют осуществлять кредитование без банков-посредников, автоматическое исполнение контрактов и обеспечивают глобальную доступность финансовых услуг.

### Здравоохранение
Безопасное хранение медицинских данных с контролем доступа пациентами, межклиническая совместимость и защита от несанкционированного доступа.

## Технические аспекты

Smart Contracts обеспечивают автоматическое исполнение соглашений, а различные консенсус механизмы (Proof of Work, Proof of Stake) гарантируют безопасность сети.

## Вызовы и ограничения

Основные вызовы включают вопросы масштабируемости, регулирования и технической сложности внедрения.

## Roadmap внедрения

1. **Анализ и планирование** (2-4 недели)
2. **Разработка MVP** (6-8 недель)  
3. **Пилотное внедрение** (4-6 недель)
4. **Масштабирование** (ongoing)

## Заключение

Блокчейн технологии предлагают огромный потенциал для трансформации бизнес-процессов. В DNK Mobile мы помогаем компаниям интегрировать блокчейн решения, учитывая специфику их бизнеса и технические требования.`
  }
};

const relatedPosts = [
  {
    slug: "ai-integration-web-applications",
    title: "Интеграция ИИ в веб-приложения: пошаговое руководство",
    category: "Искусственный интеллект"
  },
  {
    slug: "react-performance-optimization",
    title: "Оптимизация производительности React приложений",
    category: "Веб-разработка"
  },
  {
    slug: "cybersecurity-best-practices",
    title: "Кибербезопасность в разработке: лучшие практики",
    category: "Кибербезопасность"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-hero-text mb-4">Статья не найдена</h1>
          <Link to="/blog">
            <Button>Вернуться к блогу</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Блог DNK Mobile`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`https://dnkmobile.ru/blog/${slug}`}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="bg-surface-light border-b border-border">
          <div className="container-custom py-4">
            <nav className="flex items-center gap-2 text-sm text-text-secondary">
              <Link to="/" className="hover:text-hero-text">Главная</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-hero-text">Блог</Link>
              <span>/</span>
              <span className="text-hero-text">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <header className="section-padding bg-gradient-to-b from-surface-light to-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                <ArrowLeft className="w-4 h-4" />
                Вернуться к блогу
              </Link>
              
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-hero-text leading-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishDate).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Share2 className="w-4 h-4 mr-2" />
                  Поделиться
                </Button>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s+/g, '<h2 class="text-2xl font-semibold text-hero-text mt-8 mb-4">').replace(/<br \/><br \/>/g, '</h2>')
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-hero-text mb-4">Теги:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author CTA */}
              <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-hero-text mb-4">
                    Нужна консультация по проекту?
                  </h3>
                  <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                    Наши эксперты готовы обсудить ваши задачи и предложить оптимальные решения 
                    в области разработки программного обеспечения.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="btn-primary">
                      Связаться с нами
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="section-padding bg-surface-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-hero-text mb-8">Похожие статьи</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="card-hover">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-hero-text leading-tight">
                        <Link 
                          to={`/blog/${relatedPost.slug}`} 
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogPost;