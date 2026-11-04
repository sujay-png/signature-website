# Lotus Signature — Premium Real Estate Website

A bespoke, production-ready, international award-grade architectural website for **Lotus Signature**, a premium residential apartment project by **Lotus Properties**, situated in Bendoorwell, Mangaluru, Karnataka, India.

---

## 1. Project Overview & Architectural Facts

- **Project Name:** Lotus Signature
- **Promoter:** Lotus Properties ("We Pursue Quality")
- **Corporate Office:** #305, 306, 307, 3rd Floor, Kushe Sadan, Near PVS Junction, K.R. Rao Road, Kodialbail, Mangaluru - 575003
- **Location:** Bendoorwell, Mangaluru, Karnataka, India
- **Total Residential Apartments:** 22 Exclusive Units
- **Building Configuration:** Ground Floor + 4 Upper Floors with Dedicated Basement Parking
- **Available Configurations & Saleable Areas:**
  - **2 BHK:** 1034 sq. ft.
  - **2 BHK:** 1084 sq. ft.
  - **2 BHK:** 1125 sq. ft.
  - **2 BHK:** 1183 sq. ft.
  - **3 BHK:** 1700 sq. ft.
  - **3 BHK:** 1718 sq. ft.
- **Key Amenities:**
  - 1 automated elevator with 8-passenger capacity
  - Fully equipped gymnasium
  - Indoor recreation games lounge
  - Reticulated piped gas connection
  - Dedicated covered basement & surface parking
  - 24/7 CCTV surveillance system
  - Standby generator with soundproof acoustic enclosure for common areas and apartment lighting
  - Rainwater harvesting system & dual borewell/corporation water supply

---

## 2. Technology Stack & Architecture

- **Framework:** [Astro](https://astro.build/) (v5.x stable)
- **Rendering Architecture:** Static Site Generation (`output: 'static'`)
- **Build Output:** Single unified `dist/` directory (ready for cPanel, Netlify, Vercel, Apache, Nginx, or GitHub Pages)
- **Language:** TypeScript
- **Styling:** Modular Vanilla CSS Architecture (Custom Design Tokens, No Tailwind)
- **Aesthetic Direction:** Warm Ivory (`#F8F7F4`), Champagne (`#D6BE91`), Muted Gold (`#B89B69`), Lotus Muted Magenta (`#A33B83`), and Deep Charcoal (`#292725`)
- **Typography:** *Playfair Display* & *Cormorant Garamond* for editorial serif headings; *Manrope* & *DM Sans* for crisp functional body and metadata.
- **Animations & Micro-interactions:** [GSAP](https://greensock.com/gsap/) with ScrollTrigger, custom desktop cursor, scroll reading progress indicator, and smooth modal lightboxes.
- **Form Architecture:** Client-validated enquiry registration with instant unique Reference ID generation and direct WhatsApp/phone fast-track messaging.

---

## 3. Directory Structure

```
lotus-signature/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── branding/
│       │   ├── lotus-properties-logo.png
│       │   └── lotus-signature-logo.png
│       ├── hero/
│       │   ├── hero-exterior.webp
│       │   └── hero-building.webp
│       ├── exterior/
│       │   ├── building-day.webp
│       │   ├── exterior-dusk-full.webp
│       │   └── exterior-dusk.webp
│       ├── interiors/
│       │   ├── living-room.webp
│       │   ├── master-bedroom.webp
│       │   ├── modular-kitchen.webp
│       │   └── interiors-full.webp
│       ├── floor-plans/
│       │   ├── ground-floor-site.webp
│       │   ├── ground-unit-001.webp
│       │   ├── ground-unit-002.webp
│       │   ├── typical-floor-cluster.webp
│       │   ├── typical-unit-001.webp
│       │   ├── typical-unit-002.webp
│       │   ├── typical-unit-003.webp
│       │   ├── typical-unit-004.webp
│       │   └── basement-parking-plan.webp
│       ├── amenities/
│       │   ├── amenity-gym.webp
│       │   ├── amenity-games.webp
│       │   ├── amenity-elevator.webp
│       │   ├── amenity-parking.webp
│       │   ├── amenity-gas.webp
│       │   ├── amenity-cctv.webp
│       │   └── amenity-generator.webp
│       └── portfolio/ (24 past projects by Lotus Properties)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileMenu.astro
│   │   │   ├── Preloader.astro
│   │   │   ├── CustomCursor.astro
│   │   │   ├── ScrollProgress.astro
│   │   │   └── BackToTop.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ProjectIntro.astro
│   │   │   ├── ArchitectureShowcase.astro
│   │   │   ├── ProjectHighlights.astro
│   │   │   ├── ApartmentTypes.astro
│   │   │   ├── AmenitiesPreview.astro
│   │   │   └── LocationPreview.astro
│   │   ├── project/
│   │   │   ├── ProjectGallery.astro
│   │   │   ├── InteriorGallery.astro
│   │   │   ├── ProjectSpecifications.astro
│   │   │   └── PortfolioGrid.astro
│   │   ├── concept/
│   │   │   ├── FloorPlanExplorer.astro
│   │   │   ├── FloorPlanViewer.astro
│   │   │   ├── InteriorShowcase.astro
│   │   │   └── MaterialShowcase.astro
│   │   ├── contact/
│   │   │   └── EnquiryForm.astro
│   │   └── ui/
│   │       ├── SectionHeading.astro
│   │       ├── AnimatedText.astro
│   │       ├── RevealImage.astro
│   │       ├── MagneticButton.astro
│   │       └── CTASection.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro            # HOME (/)
│   │   ├── about.astro            # ABOUT (/about)
│   │   ├── projects.astro         # PROJECTS (/projects)
│   │   ├── concept-design.astro   # CONCEPT DESIGN (/concept-design)
│   │   ├── contact.astro          # CONTACT (/contact)
│   │   └── api/
│   │       └── enquiry.ts         # Server-side enquiry API endpoint
│   ├── data/
│   │   ├── project.ts             # Centralised project & promoter details
│   │   ├── floorPlans.ts          # Technical floor plan metadata & unit areas
│   │   ├── amenities.ts           # Amenities specifications & features
│   │   ├── specifications.ts      # Detailed construction specifications
│   │   └── navigation.ts          # Nav links & quick navigation
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── animations.css
│   │   ├── components.css
│   │   ├── responsive.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── about.css
│   │       ├── projects.css
│   │       ├── concept-design.css
│   │       └── contact.css
│   ├── scripts/
│   │   ├── animations.ts
│   │   ├── navigation.ts
│   │   ├── gallery.ts
│   │   └── floor-plan.ts
│   └── env.d.ts
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── .env.example
└── README.md
```

---

## 4. Setup, Development & Deployment

### Prerequisites
- Node.js (v18.17.0 or higher, tested on Node v24)
- npm (v9.0.0 or higher)

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Configure your email service parameters in `.env`:
- `SMTP_HOST`: Host of your SMTP mail server (e.g., `smtp.gmail.com` or `smtp.sendgrid.net`)
- `SMTP_PORT`: Port (e.g., `587` or `465`)
- `SMTP_USER`: SMTP authenticated username
- `SMTP_PASS`: Application password or API key
- `ENQUIRY_RECIPIENT_EMAIL`: Recipient inbox (defaults to `info@lotusproperties.co.in`)

### 3. Running Locally (Development Mode)
```bash
npm run dev
```
The server will start at `http://localhost:4321`.

### 4. Production Build & Static Preview
Build the project for production:
```bash
npm run build
```
This outputs a single static directory in `dist/` containing `index.html`, all page subdirectories, assets, and images.

To preview the production build locally:
```bash
npm start
# or: npm run preview
```
The preview server will serve `dist/` at `http://localhost:4321`.

---

## 5. Booking & Sales Contacts

- **Sampath Shetty:** [+91 70222 78352](tel:+917022278352) | [WhatsApp](https://wa.me/917022278352)
- **Jithendra Kottary:** [+91 96204 32499](tel:+919620432499) | [WhatsApp](https://wa.me/919620432499)
- **Javid Nadeem:** [+91 99869 17368](tel:+919986917368) | [WhatsApp](https://wa.me/919986917368)
- **Promoter Office:** [0824 4257222](tel:08244257222) / [95330 63675](tel:9533063675)
- **Email:** [info@lotusproperties.co.in](mailto:info@lotusproperties.co.in)
