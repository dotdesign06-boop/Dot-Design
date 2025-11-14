import { Link } from "react-router-dom";
import { Palette, Code, Megaphone, Video, MessageSquare, Printer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Transform your brand with stunning visual designs that capture attention and communicate your message effectively. From logos to complete brand identities, we create designs that leave lasting impressions.",
      features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Print Design"],
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build fast, secure, and responsive websites that perfectly match your brand's personality. We turn your ideas into digital reality with cutting-edge technologies and best practices.",
      features: ["Custom Websites", "E-commerce Solutions", "CMS Integration", "Mobile Responsive"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Powerful digital marketing solutions that help businesses connect with their audience and drive measurable growth. From SEO to social media, we've got you covered.",
      features: ["SEO Optimization", "Social Media Marketing", "Email Campaigns", "Analytics & Reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      icon: Video,
      title: "Corporate Ad Film",
      description: "Create compelling corporate films and promotional videos that tell your brand story. Our creative team brings your vision to life with professional videography and post-production.",
      features: ["Corporate Videos", "Product Promotions", "Photography", "Video Post-Production"],
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp API",
      description: "Connect with customers instantly and professionally using the WhatsApp Business API. Automate messages, engage customers, and grow your business with seamless integration.",
      features: ["Business API Integration", "Automated Messaging", "Customer Engagement", "Analytics Dashboard"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    },
    {
      icon: Printer,
      title: "Printing Services",
      description: "Bring your brand to life in the real world with high-quality printing services. From business cards to large-format prints, we handle all your printing needs with precision.",
      features: ["Business Cards", "Brochures & Flyers", "Packaging Design", "Large Format Printing"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive digital solutions designed to elevate your brand and drive business growth. From design to development, marketing to production, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`overflow-hidden animate-fade-in ${
                  index % 2 === 0 ? "" : "bg-muted/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div
                    className={`relative h-48 sm:h-64 md:h-auto ${
                      index % 2 === 0 ? "" : "md:col-start-2"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                  </div>

                  <CardContent
                    className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                        <service.icon className="text-primary" size={24} />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{service.title}</h2>
                    </div>

                    <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg">
                      {service.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">What We Offer:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-fit bg-primary hover:bg-accent">
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
