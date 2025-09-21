import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const Testimonial = ({ name, role, company, content, rating, avatar }: TestimonialProps) => {
  return (
    <Card className="card-hover border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-text-secondary mb-6 leading-relaxed">"{content}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-primary font-semibold text-lg">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <div className="font-semibold text-hero-text">{name}</div>
            <div className="text-text-secondary text-sm">{role} в {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;