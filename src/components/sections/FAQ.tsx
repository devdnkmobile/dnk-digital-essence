import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Сколько времени занимает разработка мобильного приложения?",
      answer: "Время разработки зависит от сложности проекта. Простое приложение занимает 2-3 месяца, среднее по сложности — 4-6 месяцев, а сложные корпоративные решения могут потребовать 8-12 месяцев. Мы предоставляем детальную оценку после анализа ваших требований."
    },
    {
      question: "Какие технологии вы используете для разработки?",
      answer: "Мы используем современный стек технологий: React Native и Flutter для мобильных приложений, React.js, Vue.js, Angular для фронтенда, Node.js, Python, .NET для бэкенда. Выбор технологий зависит от специфики проекта и ваших потребностей."
    },
    {
      question: "Предоставляете ли вы техническую поддержку после запуска?",
      answer: "Да, мы предлагаем различные варианты технической поддержки: от базового обслуживания до полного сопровождения с развитием функциональности. Гарантийный период составляет 6 месяцев, в течение которого мы исправляем любые выявленные ошибки бесплатно."
    },
    {
      question: "Можно ли интегрировать AI/ML в наш проект?",
      answer: "Абсолютно! Мы специализируемся на интеграции ИИ-решений: от простых чат-ботов до сложных систем машинного обучения. Можем добавить рекомендательные системы, обработку естественного языка, компьютерное зрение и другие AI-функции."
    },
    {
      question: "Как происходит процесс разработки?",
      answer: "Мы используем гибкую методологию Agile/Scrum. Процесс включает: анализ требований, создание технического задания, дизайн и прототипирование, разработку итерациями с еженедельными демо, тестирование, деплой и сопровождение. Вы всегда в курсе прогресса проекта."
    },
    {
      question: "Работаете ли вы с блокчейн проектами?",
      answer: "Да, у нас есть экспертиза в области блокчейн-разработки: создание смарт-контрактов, DeFi платформы, NFT маркетплейсы, интеграция с различными блокчейн-сетями (Ethereum, Binance Smart Chain, Polygon и др.)."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-hero-text mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-text-secondary">
              Ответы на самые популярные вопросы о наших услугах и процессе разработки
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium text-hero-text pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;