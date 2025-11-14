import { useRef, useEffect } from "react";

const clients = [
  { name: "Udaya Jewellers", logo: "/Clients_Logo/Client-01.png" },
  { name: "Andromeda", logo: "/Clients_Logo/Client-02.png" },
  { name: "The Brand Stitch (TBS)", logo: "/Clients_Logo/Client-03.png" },
  { name: "Jenyufin", logo: "/Clients_Logo/Client-04.png" },
  { name: "Jobz Shala", logo: "/Clients_Logo/Client-05.png" },
  { name: "Kundapra Kannada Prathishtana Bengaluru", logo: "/Clients_Logo/Client-06.png" },
  { name: "Nidhi Vriddhi", logo: "/Clients_Logo/Client-07.png" },
  { name: "Adsreverb", logo: "/Clients_Logo/Client-08.png" },
  { name: "SM Innovative Edge", logo: "/Clients_Logo/Client-09.png" },
  { name: "Mehta Gold & Diamonds", logo: "/Clients_Logo/Client-10.png" },
  { name: "Locally Groomed", logo: "/Clients_Logo/Client-11.png" },
  { name: "Ruloans", logo: "/Clients_Logo/Client-12.png" },
];

const ClientsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollAmount = 1;
        
        if (scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollWidth / 2;
        } else {
          scrollRef.current.scrollLeft -= scrollAmount;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl p-8 shadow-lg border border-border overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
              Trusted by Leading Brands
            </h2>
          </div>

          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 min-w-[140px]"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain mb-3"
                  />
                  <span className="text-xs font-medium text-muted-foreground text-center">{client.name}</span>
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsScroll;
