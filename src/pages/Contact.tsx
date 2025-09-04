import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/ui/SEOHead";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Контакты DNK Mobile - связаться с IT компанией разработчиков"
        description="Свяжитесь с DNK Mobile для обсуждения IT проекта. Телефон, email, форма обратной связи. Контакты software developers и консультации."
        keywords="контакты IT компании, связаться с разработчиками, консультация по ПО, DNK Mobile контакты"
        canonical="https://dnkmobile.ru/contact"
      />

      <div className="min-h-screen">
        <section className="section-padding bg-gradient-to-br from-background to-surface-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-hero-text mb-6">
                Связаться с DNK Mobile
              </h1>
              <p className="text-xl text-text-secondary">
                Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-hero-text mb-6">Напишите нам</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-hero-text mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hero-text mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hero-text mb-2">
                      Сообщение *
                    </label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button className="btn-primary w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-hero-text mb-6">Контактная информация</h2>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: "Email", value: "info@dnkmobile.ru", href: "mailto:info@dnkmobile.ru" },
                      { icon: Phone, title: "Телефон", value: "+7 (900) 000-00-00", href: "tel:+79000000000" },
                      { icon: MapPin, title: "Адрес", value: "Москва, Россия", href: "#" },
                    ].map((contact, index) => (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <contact.icon className="h-6 w-6 text-primary" />
                            <div>
                              <div className="font-medium text-hero-text">{contact.title}</div>
                              <a 
                                href={contact.href}
                                className="text-text-secondary hover:text-primary"
                              >
                                {contact.value}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-light p-6 rounded-lg">
                  <h3 className="font-semibold text-hero-text mb-2">Время работы</h3>
                  <p className="text-text-secondary text-sm">
                    Пн-Пт: 9:00 - 18:00 МСК<br />
                    Сб-Вс: По договоренности
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;