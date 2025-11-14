import { useEffect, useState } from "react";

interface Client {
  id: string;
  name: string;
  logo: string;
}

const ClientsScroll = () => {
  const [clients] = useState<Client[]>([
    { id: "1", name: "Client 1", logo: "/Clients_Logo/Client-01.png" },
    { id: "2", name: "Client 2", logo: "/Clients_Logo/Client-02.png" },
    { id: "3", name: "Client 3", logo: "/Clients_Logo/Client-03.png" },
    { id: "4", name: "Client 4", logo: "/Clients_Logo/Client-04.png" },
    { id: "5", name: "Client 5", logo: "/Clients_Logo/Client-05.png" },
    { id: "6", name: "Client 6", logo: "/Clients_Logo/Client-06.png" },
    { id: "7", name: "Client 7", logo: "/Clients_Logo/Client-07.png" },
    { id: "8", name: "Client 8", logo: "/Clients_Logo/Client-08.png" },
    { id: "9", name: "Client 9", logo: "/Clients_Logo/Client-09.png" },
    { id: "10", name: "Client 10", logo: "/Clients_Logo/Client-10.png" },
    { id: "11", name: "Client 11", logo: "/Clients_Logo/Client-11.png" },
    { id: "12", name: "Client 12", logo: "/Clients_Logo/Client-12.png" },
  ]);

  return (
    <section className="py-12 sm:py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Trusted by <span className="text-gradient">Leading Brands</span>
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          We're proud to work with amazing clients who trust us with their brand
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-slide-left">
          {/* Duplicate the clients for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 bg-card rounded-lg p-3 sm:p-4 md:p-6 shadow-sm hover-lift"
              style={{ width: "120px", height: "70px" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsScroll;
