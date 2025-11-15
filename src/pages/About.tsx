import { useState, useEffect, useRef } from "react";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CounterAnimation = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-4xl font-bold mb-2 sm:mb-2">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: 100, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 8, suffix: "+" },
    { icon: Target, label: "Projects Completed", value: 500, suffix: "+" },
    { icon: TrendingUp, label: "Success Rate", value: 98, suffix: "%" },
  ];

  const team = [
    {
      name: "Manoj Mendon",
      role: "Founder & Creative Head",
      image: "/Founder & Creative Head.jpg",
      description: "A visionary leader with over 8 years of expertise in digital design and marketing. Passionate about crafting innovative solutions that transform brands and drive meaningful business growth.",
    },
  ];

  const editors = [
    {
      name: "Darshan Annigeri",
      designation: "Video Editor & VFX Artist",
      company: "DOT DESIGN",
      image: "/Darshan Annigeri.jpg",
    },
    {
      name: "Midhun T",
      designation: "Jewellery Designer",
      company: "DOT DESIGN",
      image: "/Midhun T.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 sm:mb-6 animate-fade-in">
            About <span className="text-gradient">DOT DESIGN</span>
          </h1>
          <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed">
            DOT DESIGN is a designing and marketing organization established to meet all kinds of designing and marketing necessities for your brand. We undertake digital designing, corporate ad filming, website development, printing and other interim services along the process.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="mx-auto mb-3 sm:mb-4 text-primary" size={36} />
                <CounterAnimation end={stat.value} suffix={stat.suffix} />
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 sm:space-y-4 text-base sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in the industry, DOT DESIGN has evolved from a small design studio into a full-service digital solutions agency. Our journey has been driven by a passion for creativity and a commitment to excellence.
                </p>
                <p>
                  We've had the privilege of working with diverse clients across various industries, helping them bring their visions to life through innovative design and strategic marketing solutions.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace new technologies, and deliver results that exceed expectations. Our team of experts is dedicated to your success, treating every project as an opportunity to create something extraordinary.
                </p>
              </div>
            </div>
            <div className="animate-float hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The visionaries behind DOT DESIGN's success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-12 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover-lift animate-fade-in shadow-lg border-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="pt-8 pb-4">
                  <div className="aspect-square overflow-hidden rounded-full max-w-[280px] sm:max-w-[320px] mx-auto ring-4 ring-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <CardContent className="px-8 pb-8 pt-4 text-center">
                  <h3 className="text-3xl sm:text-3xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-bold mb-5 text-lg sm:text-lg">{member.role}</p>
                  <p className="text-foreground/80 text-base sm:text-base leading-relaxed max-w-lg mx-auto">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editors Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Editors</span>
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the professionals who trust us with their brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {editors.map((editor, index) => (
              <Card
                key={editor.name}
                className="text-center hover-lift animate-fade-in overflow-hidden shadow-lg border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="pt-8 pb-4">
                  <div className="aspect-square overflow-hidden rounded-full max-w-[240px] sm:max-w-[260px] mx-auto ring-4 ring-primary/20">
                    <img
                      src={editor.image}
                      alt={editor.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <CardContent className="px-6 pb-8 pt-4">
                  <h3 className="text-2xl sm:text-2xl font-bold mb-2 text-foreground">{editor.name}</h3>
                  <p className="text-primary font-bold text-base sm:text-base mb-1">{editor.designation}</p>
                  <p className="text-foreground/70 text-base">{editor.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
