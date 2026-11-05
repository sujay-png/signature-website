export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/", description: "An Address That Reflects Your Signature" },
  { label: "About", href: "/about", description: "Signature Properties & Our Vision" },
  { label: "Projects", href: "/projects", description: "Lotus Signature Residences, Floor Plans & Specifications" },
  { label: "Concept Design", href: "/concept-design", description: "Architecture, Interior Design & PMC Portfolio" },
  { label: "Contact", href: "/contact", description: "Get in Touch & Residence Booking Enquiry" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Residence", href: "/projects" },
  { label: "Floor Plans", href: "/projects#explorer" },
  { label: "About Signature Properties", href: "/about" },
  { label: "Concept Design", href: "/concept-design" },
  { label: "Enquire Now", href: "/contact" },
];
