import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
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
  );
};

export default Hero;