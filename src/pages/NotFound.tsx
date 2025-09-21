import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import SEOHead from "@/components/ui/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Страница не найдена - 404 | DNK Mobile"
        description="Запрашиваемая страница не найдена. Вернитесь на главную страницу DNK Mobile или воспользуйтесь навигацией по сайту."
        keywords="404, страница не найдена, DNK Mobile"
        canonical="https://dnkmobile.ru/404"
      />
      
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-3xl font-bold text-hero-text mb-4">
            Страница не найдена
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-primary">
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
