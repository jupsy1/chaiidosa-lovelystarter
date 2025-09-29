import { Card } from "@/components/ui/card";
import { Leaf, Heart, Users } from "lucide-react";
import chaiImage from "@/assets/chai-tea.jpg";
import streetFoodImage from "@/assets/street-food.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing the authentic flavors of South India and Punjab to Walsall
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-6">
              Authentic Vegetarian Cuisine
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Chaii Dosa Cafe, we celebrate the rich culinary traditions of South India and Punjab. 
              Every dish is crafted with bold spices, fresh ingredients, and recipes passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our signature crispy dosas served with coconut chutney and sambhar to our aromatic 
              desi chai blended with traditional spices, we bring you the authentic taste of India.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">100% Vegetarian</h4>
                <p className="text-sm text-muted-foreground">Pure vegetarian kitchen with authentic flavors</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Fresh Daily</h4>
                <p className="text-sm text-muted-foreground">Made fresh daily with quality ingredients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Family Recipes</h4>
                <p className="text-sm text-muted-foreground">Traditional recipes from our family kitchen</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <img
                src={chaiImage}
                alt="Traditional Indian chai tea service"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden mt-8">
              <img
                src={streetFoodImage}
                alt="Colorful Indian street food spread"
                className="w-full h-48 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;