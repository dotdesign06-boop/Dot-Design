import { Mail, Phone, Instagram, Facebook, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+918050891802 / +919611710816",
      link: "tel:+918050891802",
    },
    {
      icon: Mail,
      title: "Email",
      content: "dotdesign06@gmail.com",
      link: "mailto:dotdesign06@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kundapura / Bangalore",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Let's Connect</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Ready to transform your brand? Get in touch with us today and let's create something amazing together.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Instagram size={20} className="text-primary" />
                    Follow Us on Social Media
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/dot.design06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:shadow-md transition-all"
                    >
                      <Instagram size={20} className="text-primary" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1Gf5XACLPz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg hover:shadow-md transition-all"
                    >
                      <Facebook size={20} className="text-primary" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Image & Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
                  alt="Contact us"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose DOT DESIGN?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>8+ years of industry experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>100+ satisfied clients across industries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Full-service digital solutions under one roof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Dedicated team of creative professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Proven track record of successful projects</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 animate-fade-in">
            Let's discuss how we can help transform your brand and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="tel:+918050891802"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <a
              href="mailto:dotdesign06@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
