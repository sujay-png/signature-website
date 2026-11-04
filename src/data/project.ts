export interface ProjectDetails {
  name: string;
  tagline: string;
  promoter: {
    name: string;
    motto: string;
    logo: string;
    address: {
      line1: string;
      line2: string;
      line3: string;
      city: string;
      pin: string;
      full: string;
    };
    phones: string[];
    email: string;
    website: string;
  };
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    coordinates: { lat: number; lng: number };
    googleMapsEmbed: string;
    googleMapsLink: string;
  };
  structure: {
    totalUnits: number;
    floors: string;
    basement: string;
    configurations: string[];
    elevator: string;
  };
  bookingContacts: {
    name: string;
    phone: string;
    displayPhone: string;
    whatsappUrl: string;
  }[];
  overviewText: string;
}

export const projectData: ProjectDetails = {
  name: "Lotus Signature",
  tagline: "Make Your Mark.",
  promoter: {
    name: "Signature Properties",
    motto: "Contemporary Living. Thoughtfully Designed.",
    logo: "/images/branding/signature-properties-logo.png",
    // Corporate office details to be supplied by the client.
    // Any field left empty is hidden on the site automatically.
    address: {
      line1: "Lotus Paradise Plaza",
      line2: "1st Floor, Shop No. 103",
      line3: "Bendoorwell",
      city: "Mangalore",
      pin: "575002",
      full: "Signature Properties, Lotus Paradise Plaza, 1st Floor, Shop No. 103, Bendoorwell, Mangalore - 575002"
    },
    phones: ["81233 07368"],
    email: "signatureproperties368@gmail.com",
    website: ""
  },
  location: {
    area: "Bendoorwell",
    city: "Mangaluru",
    state: "Karnataka",
    country: "India",
    coordinates: { lat: 12.8687, lng: 74.8560 },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8242461942157!2d74.8538!3d12.8687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4d46f5e27d%3A0x8e83348f0293b137!2sBendoorwell%2C%20Mangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Bendoorwell,+Mangaluru,+Karnataka"
  },
  structure: {
    totalUnits: 22,
    floors: "Ground Floor + 4 Upper Floors",
    basement: "Dedicated Covered Basement Parking",
    configurations: ["2 BHK", "3 BHK"],
    elevator: "1 Automated Elevator with 8-Passenger Capacity"
  },
  bookingContacts: [
    {
      name: "Javid Nadeem",
      phone: "+919986917368",
      displayPhone: "+91 99869 17368",
      whatsappUrl: "https://wa.me/919986917368?text=Hello%20Javid,%20I%20am%20interested%20in%20Lotus%20Signature%20residences%20at%20Bendoorwell,%20Mangaluru."
    },
    {
      name: "Sampath Shetty",
      phone: "+917022278352",
      displayPhone: "+91 70222 78352",
      whatsappUrl: "https://wa.me/917022278352?text=Hello%20Sampath,%20I%20am%20interested%20in%20Lotus%20Signature%20residences%20at%20Bendoorwell,%20Mangaluru."
    }
  ],
  overviewText: "Imagine your loved ones living in aesthetically built premium surroundings at a sought-after location in the heart of the city. Places of importance in the vicinity. All your favourite places accessible within a few minutes via multiple modes of transport. You get to embrace the city life like no other. An opportunity like this, presents itself rarely. We invite you to make your mark at Lotus Signature, Bendoorwell. A mixed-use project with premium residences for an upscale living, at a location like no other."
};
