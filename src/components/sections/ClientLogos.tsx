import { Card } from "@/components/ui/card";

const ClientLogos = () => {
  const clients = [
    { name: "Сбербанк", id: "sberbank" },
    { name: "Яндекс", id: "yandex" },
    { name: "МТС", id: "mts" },
    { name: "Альфа-Банк", id: "alfabank" },
    { name: "OZON", id: "ozon" },
    { name: "Тинькофф", id: "tinkoff" },
  ];

  return (
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
          {clients.map((client) => (
            <Card
              key={client.id}
              className="w-full h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity border-0 shadow-sm"
            >
              <div className="text-text-secondary font-semibold text-sm text-center">
                {client.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;