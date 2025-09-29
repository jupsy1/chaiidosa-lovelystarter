import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const Menu = () => {
  const menuSections: MenuSection[] = [
    {
      title: "Dosas & Uttapams",
      items: [
        { name: "Plain Dosa", price: "£6.49", description: "Thin crispy rice & lentil crêpe" },
        { name: "Masala Dosa", price: "£7.49", description: "Rice crêpe stuffed with spicy potatoes & onions" },
        { name: "Paneer Dosa", price: "£8.49", description: "Thin rice crêpe prepared with onion & paneer masala/spices" },
        { name: "Ghee Roast", price: "£7.99", description: "Very thin & crispy crêpe cooked in clarified butter stuffed with masala potato" },
        { name: "Bombay Special", price: "£8.99", description: "Thin crêpe with two chutneys & stuffed with sautéed vegetables, potatoes, paneer & cheese" },
        { name: "Three Barrel Dosa", price: "£8.99", description: "Three small rice crêpes with different fillings (paneer/potatoes/mushroom)" },
        { name: "Pizza Dosa", price: "£8.99", description: "Thin crêpe with Italian herbs, cheese stuffed with mixed vegetables" },
        { name: "Onion Uttapam", price: "£6.99", description: "Thick soft savoury crêpe topped with chopped onions & coriander" },
        { name: "Mix Veg Uttapam", price: "£6.99", description: "Thick soft savoury crêpe topped with chopped mixed vegetables" },
        { name: "Cheese Uttapam", price: "£6.99", description: "Thick soft savoury crêpe topped with cheese & coriander" }
      ]
    },
    {
      title: "Street Food & Chaats",
      items: [
        { name: "Pani Puri (6 PC)", price: "£4.99", description: "Small crispy puffed breads stuffed with boiled potatoes & chickpeas, with tangy tamarind & mint sauce" },
        { name: "Bhel Puri", price: "£4.99", description: "Puffed rice mixed with potatoes, sweet & hot chutney in crunchy texture" },
        { name: "Dhai Puri (8PC)", price: "£5.99", description: "Stuffed crispy puris with potatoes & topped with sweet, sour & spicy chutneys, onion, sev & yogurt" },
        { name: "Ragada Patty Chaat", price: "£6.99", description: "Potatoes patty/tikki in white peas masala topped with onion, tomato & chutneys" },
        { name: "Aloo Tikki Chaat", price: "£6.99", description: "Crisp spiced potato patty served with chickpeas & finished with cream yogurt & chutney blend" },
        { name: "Samosa Chaat (2PC)", price: "£6.99", description: "Punjabi samosas served with potatoes, chickpeas, yogurt & tamarind sauce" },
        { name: "Vada Pav", price: "£5.99", description: "Deep fried potato dumpling in a bread bun with green chilli & trio of zesty chutneys" }
      ]
    },
    {
      title: "North Indian Specialties",
      items: [
        { name: "Chole Bhature", price: "£7.99", description: "Thick chickpea curry, served with plain deep fried flour bread" },
        { name: "Aloo Paratha (2 PCS)", price: "£6.99", description: "Flatbread stuffed with boiled potatoes, Indian spices & herbs" },
        { name: "Makki Mooli Roti (2 PCS)", price: "£6.99", description: "Corn flour flatbread stuffed with mooli (radish), Indian spices & herbs" },
        { name: "Makki Methi Roti (2 PCS)", price: "£6.99", description: "Corn flour flatbread stuffed with methi (fenugreek), Indian spices & herbs" },
        { name: "Saag with Makki Plain Roti (2 PCS)", price: "£9.99", description: "Blend of mustard leaf & spinach with onion, garlic, ginger, corn flour flatbread" },
        { name: "Any Single Paratha", price: "£3.99", description: "Served with yogurt, butter & mix pickle" }
      ]
    },
    {
      title: "Rice & Momos",
      items: [
        { name: "Mix Veg Fried Rice", price: "£6.99", description: "Small diced mixed vegetables seasoned with basmati rice" },
        { name: "Chilli Garlic Fried Rice", price: "£7.99", description: "Mixed vegetables, fried garlic & chilli seasoned with basmati rice" },
        { name: "Bombay Special Rice", price: "£8.99", description: "Mix vegetable, mushroom, paneer seasoned with blend of Indian spices" },
        { name: "Veggie Momo (6 PC)", price: "£7.99", description: "Steamed dumplings filled with flavourful veg mince, served with spicy Himalayan sauce" },
        { name: "Chili Momo", price: "£8.99", description: "Steamed dumplings (6 PC) tossed with chilli garlic sauce" },
        { name: "Butter Cream Momo (6 PC)", price: "£8.99", description: "Steamed dumplings tossed in butter cream & special spices" }
      ]
    },
    {
      title: "Wraps & Light Bites",
      items: [
        { name: "Grilled Sandwich", price: "£6.49" },
        { name: "Paneer Kathi Wrap", price: "£6.99" },
        { name: "Aloo Tikki Wrap", price: "£6.49" },
        { name: "Vegetable or Soya Burger", price: "£6.49" },
        { name: "Noodle Burger", price: "£6.99" }
      ]
    },
    {
      title: "Soups",
      items: [
        { name: "Cream Tomato Soup", price: "£4.49" },
        { name: "Cream of Corn Soup", price: "£4.49" },
        { name: "Veg Manchow Soup", price: "£4.49" },
        { name: "Veg Hot & Sour", price: "£4.49" }
      ]
    },
    {
      title: "Kids Meal",
      items: [
        { name: "Mozzarella Sticks", price: "£5.99" },
        { name: "Veg Fingers", price: "£5.99" },
        { name: "Veg Spring Roll", price: "£5.99" },
        { name: "Chocolate Dosa", price: "£5.99" }
      ]
    },
    {
      title: "Sides",
      items: [
        { name: "Plain Chips", price: "£2.99" },
        { name: "Masala Chips", price: "£3.49" },
        { name: "Chilli Chips", price: "£3.99" },
        { name: "Cheesy Chips", price: "£3.99" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Falooda", price: "£5.99" },
        { name: "Ice Cream (2 Scoops)", price: "£2.99" },
        { name: "Malai Kulfi (2 Scoops)", price: "£3.49" },
        { name: "Gulab Jamun (2 PCS)", price: "£2.99" },
        { name: "Ice Cream with Jamun", price: "£3.99" },
        { name: "Rasmalai (2 PCS)", price: "£4.99" },
        { name: "Brownie", price: "£4.99" },
        { name: "Gajar Halwa", price: "£4.99" }
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "Desi Chai (Mixed Blend of Spices)", price: "£2.99" },
        { name: "Gud Chai (Jaggery)", price: "£2.99" },
        { name: "Coffee (Indian Style)", price: "£2.99" },
        { name: "Hot Chocolate", price: "£3.49" },
        { name: "Fresh Lime Soda", price: "£2.99" },
        { name: "Mango Lassi", price: "£3.99" },
        { name: "Sweet Lassi", price: "£3.49" },
        { name: "Salted Lassi", price: "£3.49" },
        { name: "Masala Lassi", price: "£3.49" },
        { name: "Tadka Lassi", price: "£3.49" },
        { name: "Rose Milk", price: "£3.99" },
        { name: "House Milk Shakes", price: "£4.49" },
        { name: "Choice of Soft Drinks", price: "£2.49" },
        { name: "Bottle Water", price: "£1.49" },
        { name: "Can Sodas", price: "£1.99" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic flavors, fresh ingredients, traditional recipes
          </p>
          <Badge variant="secondary" className="mt-4 text-sm">
            All dosas served with chutney & sambhar
          </Badge>
        </div>

        <div className="grid gap-8">
          {menuSections.map((section, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start border-b border-border/50 pb-3 last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-primary font-bold text-lg ml-4">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold text-foreground mb-3">Allergens Notice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Please note: we make every effort to provide allergen free food on request, however this cannot be guaranteed as we handle allergens on the premises. 
            Due to high demand we recommend you reserve your table in advance to avoid disappointment and waiting. We do not charge for service. 
            Gratuity at your discretion. The management reserves the right to refuse admittance. If there is a dish you know and is not listed on our menu, 
            please do not hesitate to ask one of our friendly members of staff and we will be more than happy to prepare it for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;