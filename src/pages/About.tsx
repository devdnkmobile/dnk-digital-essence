import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/ui/SEOHead";

const About = () => {
  const team = [
    { name: "Алексей Иванов", role: "Технический директор", experience: "10+ лет" },
    { name: "Мария Петрова", role: "Ведущий разработчик", experience: "8+ лет" },
    { name: "Дмитрий Сидоров", role: "UI/UX дизайнер", experience: "6+ лет" },
    { name: "Анна Козлова", role: "Project Manager", experience: "5+ лет" },
  ];

  return (
    <>
      <SEOHead
        title="О компании DNK Mobile - команда экспертов по разработке ПО"
        description="DNK Mobile - команда опытных IT-специалистов с 7+ летним опытом разработки. Наша миссия, ценности и подход к созданию цифровых продуктов."
        keywords="о компании, IT команда, разработчики, DNK Mobile, опыт разработки"
        canonical="https://dnkmobile.ru/about"
      />

      <div className="min-h-screen">
        <section className="section-padding bg-gradient-to-br from-background to-surface-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-hero-text mb-6">
                О компании DNK Mobile
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Мы — команда опытных IT-специалистов, которая превращает бизнес-идеи в успешные цифровые продукты
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Миссия", desc: "Создавать технологии, которые делают бизнес эффективнее" },
                { icon: Heart, title: "Ценности", desc: "Качество, надежность и клиентоориентированность" },
                { icon: Users, title: "Команда", desc: "15+ экспертов с опытом в различных областях IT" },
                { icon: Award, title: "Опыт", desc: "100+ успешных проектов за 7+ лет работы" },
              ].map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-sm">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-hero-text mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface-light">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-hero-text mb-12 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4" />
                    <h3 className="font-semibold text-hero-text">{member.name}</h3>
                    <p className="text-text-secondary text-sm">{member.role}</p>
                    <p className="text-primary text-xs">{member.experience}</p>
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

export default About;