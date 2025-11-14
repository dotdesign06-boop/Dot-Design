import { Award, Target, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Visionary leader with 10+ years in digital design and marketing. Passionate about creating innovative solutions.",
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Award-winning designer specializing in brand identity and visual storytelling. Drives creative excellence.",
    },
  ];

  const editors = [
    {
      name: "Akshay Shet",
      designation: "Managing Partner",
      company: "Udaya Jewellers",
      image: "/clients_images/Akshay Shet Managing Partner Udaya Jewellers.jpeg",
    },
    {
      name: "Pramod Gangadhar",
      designation: "CEO & Founder",
      company: "Nidhivriddhi",
      image: "/clients_images/Pramod Gangadhar CEO & Founder Nidhivriddhi.jpg",
    },
    {
      name: "Prathviraj Shetty",
      designation: "Vice President",
      company: "RuLoans India Pvt. Ltd",
      image: "/clients_images/Prathviraj Shetty, Vice President, RuLoans India Pvt. Ltd.JPG",
    },
    {
      name: "Sucheth Shetty",
      designation: "Co-Founder",
      company: "Locally Groomed",
      image: "/clients_images/Sucheth Shetty, Co-Founder, Locally Groomed.JPG",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in px-4">
            About <span className="text-gradient">DOT DESIGN</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in px-4">
            DOT DESIGN is a designing and marketing organization established to meet all kinds of designing and marketing necessities for your brand. We undertake digital designing, corporate ad filming, website development, printing and other interim services along the process.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="mx-auto mb-4 text-primary" size={48} />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
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
            <div className="animate-float">
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
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              The visionaries behind DOT DESIGN's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editors Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Editors</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Meet the professionals who trust us with their brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {editors.map((editor, index) => (
              <Card
                key={editor.name}
                className="text-center hover-lift animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={editor.image}
                    alt={editor.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{editor.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-1">{editor.designation}</p>
                  <p className="text-muted-foreground text-sm">{editor.company}</p>
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
