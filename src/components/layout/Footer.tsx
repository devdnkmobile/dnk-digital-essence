import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-light border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-hero-text">
              DNK Mobile
            </div>
            <p className="text-text-secondary leading-relaxed">
              Специализируемся на заказной разработке цифровых продуктов для бизнеса любого масштаба.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-hero-text">
              Услуги
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Разработка ПО на заказ
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Веб-разработка
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Мобильные приложения
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  IT-консалтинг
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  AI/ML решения
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-hero-text">
              Компания
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Карьера
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-hero-text">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@dnkmobile.ru"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  info@dnkmobile.ru
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+79000000000"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  +7 (900) 000-00-00
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-text-secondary">
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2024 DNK Mobile. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;