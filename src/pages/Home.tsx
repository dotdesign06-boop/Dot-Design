import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientsScroll from "@/components/ClientsScroll";

const Home = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };
  const services = [
    {
      title: "Graphic Designing",
      description: "From bold brand identities to stunning visuals that tell your story, we craft designs that captivate and convert.",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
    },
    {
      title: "Web Development",
      description: "We develop websites that are fast, secure, responsive, and made to match your brand's personality — turning your ideas into digital reality.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      title: "Digital Marketing",
      description: "We specialize in delivering powerful digital marketing solutions that help businesses connect with their audience and drive measurable growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Corporate Ad Film",
      description: "We promote films and brands across digital platforms with creativity and strategy that deliver real impact.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
    },
    {
      title: "WhatsApp API",
      description: "Connect with customers instantly and professionally using the WhatsApp API — automate, engage, and grow your business.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    },
    {
      title: "Printing Services",
      description: "We bring your brand to life in the real world with impactful offline marketing — from packaging to billboards.",
      image: "/image.webp",
    },
    {
      title: "Offline Marketing",
      description: "Maximize your brand visibility with strategic offline marketing campaigns that create lasting impressions in the physical world.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    },
    {
      title: "Social Media & Film Promotion",
      description: "Amplify your reach with targeted social media strategies and film promotion campaigns that engage audiences and drive results.",
      image: "/Social Media & Film Promotion.jpg",
    },
  ];

  const features = [
    "8+ Years of Experience",
    "100+ Projects Delivered",
    "Expert Team",
    "24/7 Support",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="text-primary" size={20} />
                <span className="text-sm sm:text-base font-medium text-primary">The Best Agency Solution Since 2018</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Work With Our <span className="text-gradient">Full Time Experts</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                Work with our full-time experts who turn ideas into impact. Backed by deep industry knowledge and a passion for perfection, we ensure every project is delivered with precision, professionalism, and excellence you can trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-base sm:text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-accent w-full sm:w-auto">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="animate-float hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Expert team working together"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Service Area</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your brand and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="overflow-hidden hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-52 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl sm:text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-5 sm:p-6">
                  <p className="text-base sm:text-base text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary text-base">
                    <Link to="/services">
                      Get Started <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from the leaders who trusted us with their brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { image: "/clients_images/Akshay Shet Managing Partner Udaya Jewellers.jpeg", name: "Akkshay Shet", designation: "Managing Partner", brand: "UDAYA JEWELLERS KUNDAPURA", objectPosition: "center 30%", scale: "", feedback: "DOT DESIGN transformed our brand identity with exceptional creativity and professionalism. Their attention to detail is outstanding!" },
              { image: "/clients_images/Pramod Gangadhar CEO & Founder Nidhivriddhi.jpg", name: "Pramod Gangadhar", designation: "CEO & Founder", brand: "NIDHIVRIDDHI FINANCIAL ADVISORS", objectPosition: "center", scale: "", feedback: "Working with DOT DESIGN has been a game-changer for our business. Their digital marketing strategies delivered remarkable results!" },
              { image: "/clients_images/Sucheth Shetty, Co-Founder, Locally Groomed.JPG", name: "Sucheth Shetty", designation: "Co-Founder", brand: "LOCALLY GROOMED & PLAIN T SHIRT STORE", objectPosition: "center 35%", scale: "scale-125", feedback: "Excellent work at DOT DESIGN! They understood our vision perfectly and brought it to life with stunning designs and seamless execution." },
              { image: "/clients_images/Prathviraj Shetty, Vice President, RuLoans India Pvt. Ltd.JPG", name: "Prathviraj Shetty", designation: "Vice President", brand: "Ruloans Distribution Services Pvt. Ltd", objectPosition: "center 35%", scale: "scale-125", feedback: "DOT DESIGN's team is highly professional and creative. They delivered beyond our expectations with innovative solutions and timely delivery!" },
            ].map((client, index) => {
              const isFlipped = flippedCards.includes(index);
              return (
                <div key={index} className="perspective-1000 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                    onClick={() => toggleFlip(index)}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front */}
                    <Card className={`text-center hover-lift backface-hidden ${isFlipped ? 'pointer-events-none' : ''}`} style={{ backfaceVisibility: 'hidden' }}>
                      <div className="pt-6 pb-4">
                        <div className="aspect-square overflow-hidden rounded-full max-w-[200px] sm:max-w-[220px] mx-auto ring-4 ring-primary/20">
                          <img
                            src={client.image}
                            alt={client.name}
                            className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${client.scale}`}
                            style={{ objectPosition: client.objectPosition }}
                          />
                        </div>
                      </div>
                      <CardContent className="px-4 pb-6 pt-2">
                        <h3 className="text-base font-bold mb-1">{client.name}</h3>
                        <p className="text-xs text-primary font-semibold mb-1">{client.designation}</p>
                        <p className="text-xs text-muted-foreground leading-tight">{client.brand}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Back */}
                    <Card className="absolute inset-0 text-center backface-hidden rotate-y-180 bg-gradient-to-br from-primary/10 to-accent/10" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                      <CardContent className="h-full flex flex-col justify-center items-center p-6">
                        <Quote className="text-primary mb-4" size={32} />
                        <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{client.feedback}"</p>
                        <div className="mt-auto">
                          <h3 className="text-base font-bold">{client.name}</h3>
                          <p className="text-xs text-primary font-semibold">{client.designation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsScroll />

      <Footer />
    </div>
  );
};

export default Home;
