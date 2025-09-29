import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely incredible! The masala dosa was crispy perfection and the sambhar had such authentic flavors. The desi chai is the best I've had outside of India. The staff are so friendly and the atmosphere is warm and welcoming.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Raj Patel",
      rating: 5,
      text: "Finally found authentic South Indian food in Walsall! The pani puri was explosive with flavor, and the chole bhature reminded me of home. My family keeps coming back - it's become our favorite weekend spot.",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      rating: 5,
      text: "Outstanding vegetarian food! I'm not even vegetarian but everything here is so delicious. The Bombay special dosa is amazing and the lassi is perfectly sweet. Great value for money too!",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Mohammed Ali",
      rating: 5,
      text: "Best Indian restaurant in the area! The aloo tikki chaat was perfection - just the right balance of spicy and sweet. The service is excellent and you can tell they use fresh ingredients in everything.",
      date: "1 week ago",
      verified: true
    },
    {
      id: 5,
      name: "Jessica Williams",
      rating: 5,
      text: "Took my family here for dinner and we were blown away! The ghee roast dosa was incredibly flavorful, and the momos were a hit with the kids. Clean, friendly, and authentic - we'll definitely be back!",
      date: "2 months ago",
      verified: true
    },
    {
      id: 6,
      name: "David Singh",
      rating: 5,
      text: "Authentic taste that brings back memories! The saag with makki roti is exactly like my grandmother used to make. The portion sizes are generous and the prices are very reasonable. Highly recommended!",
      date: "1 month ago",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic flavors that bring families together
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9 out of 5</span>
            <span className="text-muted-foreground">• 200+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="overflow-hidden hover-scale bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  {review.verified && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                <div className="flex space-x-1 mb-3">
                  {renderStars(review.rating)}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full border-2 border-background"></div>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Join 200+ happy customers</p>
              <p className="text-muted-foreground">Visit us today for authentic Indian cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;