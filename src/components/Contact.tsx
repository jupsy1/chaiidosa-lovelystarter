import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star } from "lucide-react";

const Contact = () => {
  const openingHours = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "11am - 9pm" },
    { day: "Wednesday", hours: "11am - 9pm" },
    { day: "Thursday", hours: "11am - 9pm" },
    { day: "Friday", hours: "11am - 9pm" },
    { day: "Saturday", hours: "11am - 9pm" },
    { day: "Sunday", hours: "11am - 9pm" }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience authentic Indian flavors in the heart of Walsall
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      91-92, Ablewell St<br />
                      Walsall WS1 2EU<br />
                      United Kingdom
                    </p>
                    <Button variant="outline" size="sm" className="mt-3">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-3">07311 522700</p>
                    <div className="space-x-2">
                      <Button size="sm">Call Now</Button>
                      <Button variant="outline" size="sm">Order Takeaway</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                    <p className="text-muted-foreground mb-2">
                      Authentic vegetarian South Indian & Punjabi cuisine
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bold spices, fresh ingredients • Dine-in/Takeaway
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Opening Hours */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Opening Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className={`${schedule.hours === "Closed" ? "text-destructive" : "text-muted-foreground"}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Tip:</strong> Due to high demand, we recommend you reserve your table in advance to avoid disappointment and waiting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                    <p className="text-sm text-muted-foreground mt-1">91-92 Ablewell St, Walsall WS1 2EU</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;