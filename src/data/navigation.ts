export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/", description: "An Address That Reflects Your Signature" },
  { label: "About", href: "/about", description: "Signature Properties & Our Vision" },
  { label: "Projects", href: "/projects", description: "Architecture & Interior Design Portfolio" },
  { label: "Concept Design", href: "/concept-design", description: "Lotus Signature Residences, Floor Plans & Specifications" },
  { label: "Contact", href: "/contact", description: "Get in Touch & Residence Booking Enquiry" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Residence", href: "/concept-design" },
  { label: "Floor Plans", href: "/concept-design#explorer" },
  { label: "About Signature Properties", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Enquire Now", href: "/contact" },
];
