// Concept Design — architecture & interior design studio portfolio.
// Content sourced from the client's Drive: "Signature Properties Website /
// Description for Projects" and "CONCEPT DESIGN / ARCHITECTURE".
// `images` are paths under /public; leave empty to show the lettered tile.

export type ConceptCategory = 'Residential Apartments' | 'Villas' | 'Commercial' | 'Residential & Commercial';
export type ConceptStatus = 'Ongoing' | 'Completed';

export interface ConceptProject {
  id: string;
  name: string;
  location?: string;
  category: ConceptCategory;
  status: ConceptStatus;
  description: string[];
  images: string[];
}

export const conceptStudio = {
  name: 'Concept Design',
  discipline: 'Architecture & Interior Design',
  logo: '/images/concept/concept-design-logo.png',
  email: 'conceptdesign368@gmail.com',
};

export const conceptCategories: ConceptCategory[] = [
  'Residential Apartments',
  'Villas',
  'Commercial',
  'Residential & Commercial',
];

export const conceptProjects: ConceptProject[] = [
  // ---------------- Ongoing · Residential apartments ----------------
  {
    id: 'pranava-leela', name: 'Pranava Leela', location: 'Ashoknagar', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Pranava Leela in Ashoknagar is an ongoing residential development envisioned around contemporary design and comfortable everyday living. Its architectural form presents a distinctive modern profile, with carefully composed balconies and clean exterior lines. The project is taking shape as a residential address for those who value a considered balance between style and practicality. Follow its progress as this development moves toward completion.'],
  },
  {
    id: 'lotus-the-address', name: 'Lotus The Address', location: 'Kuntikana', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Lotus The Address in Kuntikana is an ongoing residential project with a striking vertical architectural presence. Its detailed façade and prominent design give the development a recognisable identity within its setting. Planned as a contemporary residential address, the project brings together a confident exterior expression and a focus on day-to-day living. Discover the development as it continues to take shape.'],
  },
  {
    id: 'psv-shaktinagar', name: 'PSV', location: 'Shaktinagar', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['PSV Shaktinagar is an ongoing residential development defined by a contemporary architectural style and a composed building profile. The design brings together clean lines, balanced proportions and a welcoming residential character. As construction progresses, the project is shaping into an address suited to modern urban living. Stay connected for updates as the development advances.'],
  },
  {
    id: 'crown', name: 'Crown', location: 'Bejai Kapikad', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Crown in Bejai Kapikad is an ongoing residential project distinguished by its tall, elegant architectural silhouette. The exterior design gives the building a strong visual identity while maintaining a refined, contemporary character. The development is progressing toward becoming a notable residential address in its locality. Explore the project as it moves through its next stages of development.'],
  },
  {
    id: 'big-apple', name: 'Big Apple', location: 'Krishnapura', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Big Apple in Krishnapura is an ongoing residential development with a modern façade and a distinctive arrangement of balconies. Its architectural expression combines clean geometry with a warm, welcoming residential feel. The project is being developed with an emphasis on contemporary design and the everyday experience of home. Follow its progress as Big Apple continues to take shape.'],
  },
  {
    id: 'amardeep-heights', name: 'Amardeep Heights – Vistara Valencia', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Amardeep Heights – Vistara Valencia is an ongoing residential project showcasing a contemporary multi-storey design. Its exterior combines strong vertical lines, well-defined balconies and a carefully balanced façade. The development is taking shape as a modern residential setting with a clear architectural identity. Keep an eye on its progress as the project advances toward completion.'],
  },
  {
    id: 'psv-ruby', name: 'PSV Ruby', location: 'Puttur', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['PSV Ruby in Puttur is an ongoing residential project with a crisp, modern exterior and a balanced building composition. Its façade uses clean lines and balcony details to create a distinctive yet understated appearance. The development is progressing as a residential address designed around contemporary tastes and practical everyday living. Follow the project for updates as work continues.'],
  },
  {
    id: 'atharva-legacy', name: 'Atharva Legacy', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Atharva Legacy is an ongoing residential development with a slender profile and a contemporary architectural character. The building’s exterior features a rhythmic arrangement of balconies and a clean, defined façade. Its design creates a confident residential presence while keeping the overall expression refined. Discover Atharva Legacy as the project continues to develop.'],
  },
  {
    id: 'city-anantya', name: 'City Anantya', location: 'Surathkal', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['City Anantya in Surathkal is an ongoing residential project with a prominent urban presence and a contemporary exterior. The building’s façade and balcony pattern create a strong visual rhythm, complemented by its landscaped surroundings in the presentation. The development is taking shape as a modern residential address for today’s lifestyles. Follow its progress as City Anantya moves forward.'],
  },
  {
    id: 'lotus-gowri-shankar', name: 'Lotus Gowri Shankar', location: 'Urwa, Mangalore', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Lotus Gowri Shankar in Urwa, Mangalore is an ongoing residential development marked by a distinctive vertical form and modern façade detailing. Its layered balconies and clean architectural lines give the building a refined, contemporary appearance. The project is progressing toward creating a considered residential address in the area. Stay tuned for updates as the development takes shape.'],
  },
  {
    id: 'lotus-signature', name: 'Lotus Signature', location: 'Bendoorwell', category: 'Residential Apartments', status: 'Ongoing', images: ['/images/hero/hero-exterior.webp'],
    description: ['Lotus Signature in Bendoorwell is an ongoing residential project with a bold contemporary design and carefully articulated exterior details. The building’s projecting balconies and contrasting façade elements create a distinctive architectural identity. The development is taking shape as a modern residential address with a polished visual character. Follow its progress as construction continues.'],
  },
  {
    id: 'royal-olivia', name: 'Royal Olivia', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Royal Olivia is an ongoing residential development featuring a contemporary façade and a balanced composition of balconies and exterior finishes. Its warm-toned architectural details lend the building a welcoming and distinctive appearance. The project is progressing toward becoming a modern residential address. Keep following Royal Olivia as it continues to take shape.'],
  },
  {
    id: 'siddiq', name: 'Siddiq', location: 'Krishnapura', category: 'Residential Apartments', status: 'Ongoing', images: [],
    description: ['Siddiq in Krishnapura is an ongoing residential project with a contemporary architectural expression and a distinctive exterior profile. Its façade combines clean geometry with well-defined balconies and thoughtfully arranged design elements. The development is taking shape as a modern residential address with its own character. Follow the project for further updates as work progresses.'],
  },

  // ---------------- Ongoing · Villas ----------------
  {
    id: 'rahiman-villa', name: 'Rahiman Villa', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Rahiman Villa presents a contemporary architectural expression defined by clean white volumes, bold dark accents and warm timber finishes. The generous cantilevered roof creates a strong entrance statement while providing shade to the balcony and outdoor areas. Glass railings and tall windows bring openness to the façade, allowing natural light to become part of the home’s character. Carefully placed landscape elements soften the modern geometry and create a welcoming approach. The design balances striking street presence with a comfortable, private residential atmosphere.'],
  },
  {
    id: 'arif-villa', name: 'Arif Villa', location: 'Krishnapura', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Arif Villa in Krishnapura combines a confident multi-level form with a refined mix of stone-toned surfaces, timber textures and dark framing. Broad balconies with glass balustrades create outdoor extensions to the upper floors and lend the elevation a light, open feel. The dramatic roof overhang and layered façade add depth while helping define shaded exterior spaces. Warm lighting and integrated greenery complement the contemporary materials. The overall composition creates a distinctive home with a sophisticated, resort-inspired character.'],
  },
  {
    id: 'fizel-guest-house', name: 'Fizel Guest House', location: 'Mukka', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Fizel Guest House, Mukka, is designed with a welcoming, low-profile form that emphasizes generous verandahs and a strong connection to the landscape. Its sloping tiled roofs, warm-toned columns and broad glazed openings give the building a relaxed, timeless character. The wide covered outdoor areas provide comfortable spaces for gathering and enjoying the surroundings. Natural materials and a balanced, symmetrical composition help the architecture feel both grounded and inviting. The result is a guest house that pairs traditional roof forms with the openness of contemporary living.'],
  },
  {
    id: 'nawaz-natekal', name: 'Nawaz Natekal', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Nawaz Natekal features a clean, modern façade shaped by simple horizontal and vertical volumes. A restrained palette of light walls, darker cladding and warm timber accents gives the residence a polished yet understated appearance. Large windows connect the interiors with daylight, while the covered entrance and layered roof forms create a clear sense of arrival. The open frontage and carefully composed landscaping enhance the home’s street presence without overwhelming its architecture. The design focuses on practical elegance, visual balance and everyday comfort.'],
  },
  {
    id: 'shareef-jeddah', name: 'Shareef Jeddah', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Shareef Jeddah is conceived as a contemporary villa with crisp geometric lines, bright exterior surfaces and carefully integrated timber detailing. Projecting balconies and large glazed openings create a sense of openness while adding depth to the elevation. The combination of white finishes, warm wood tones and greenery brings contrast and softness to the overall composition. Subtle lighting highlights the architectural planes and enhances the home’s appearance after dusk. This design offers a modern residential character that feels refined, welcoming and connected to outdoor space.'],
  },
  {
    id: 'sunrise-kk-villa', name: 'Sunrise KK Villa', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Sunrise KK Villa presents a compact, contemporary composition with a strong rectangular frame and a prominent upper-floor balcony. The combination of light exterior finishes, dark borders and timber-toned panels gives the façade a crisp, balanced identity. Wide glazing opens the living spaces toward the outdoors and introduces natural light, while the sheltered entrance creates a practical transition from outside to inside. Simple landscaping and a neat paved approach reinforce the clean architectural lines. The result is a modern family home designed around clarity, comfort and understated style.'],
  },
  {
    id: 'surya-attavara', name: 'Surya Attavara', category: 'Villas', status: 'Ongoing', images: [],
    description: ['Surya Attavara brings together a familiar pitched-roof silhouette and a detailed, contemporary residential façade. White exterior walls, terracotta-toned roof tiles and layered entrance canopies create a warm, inviting first impression. Broad windows and balconies introduce openness, while the garden planting softens the building’s defined edges. The façade’s horizontal bands and carefully framed openings add visual rhythm without losing the home’s traditional character. The design creates a welcoming family residence that blends classic roof forms with modern detailing.'],
  },

  // ---------------- Completed · Villas ----------------
  {
    id: 'dr-shakeel-villa', name: 'Dr. Shakeel Villa', category: 'Villas', status: 'Completed', images: [],
    description: [
      'Dr. Shakeel Villa presents a contemporary architectural expression defined by clean horizontal lines, bold geometric frames and expansive glazing. A refined palette of white surfaces and darker accent finishes gives the façade a confident, elegant character. Carefully layered balconies and sheltered outdoor areas add depth while connecting the home with its landscaped surroundings. Warm exterior lighting highlights the architectural features and creates an inviting atmosphere after sunset. The result is a distinctive modern residence that balances visual impact with everyday comfort.',
      'Seen from an angled street perspective, Dr. Shakeel Villa reveals the composition of its projecting frames, open balconies and layered roof forms. Contrasting textures and vertical accent panels bring visual interest to the crisp white exterior. Large windows allow the architecture to feel open and bright, while covered entry and boundary elements establish a clear sense of arrival. Landscape planting softens the contemporary lines and integrates the residence with its setting. The overall design presents a polished, modern home with a strong street presence.',
    ],
  },
  {
    id: 'murshid-villa', name: 'Murshid Villa', location: 'Pavoor', category: 'Villas', status: 'Completed', images: [],
    description: ['Murshid Villa in Pavoor combines bold contemporary forms with warm timber-look finishes and broad glazed openings. Strong white frames define the balconies and upper-level volumes, creating a balanced composition against darker architectural accents. The entrance and covered parking are integrated into the façade, supporting a practical approach to daily living. Glass balcony railings and generous windows maintain an open, light-filled appearance. Landscaping along the boundary adds a natural layer to this elegant, modern residence.'],
  },
  {
    id: 'naveen-villa', name: 'Naveen Villa', category: 'Villas', status: 'Completed', images: [],
    description: ['Naveen Villa pairs a clean, modern massing with a warm mix of light exterior finishes, textured surfaces and wood-toned detailing. The broad car porch and sheltered entrance create a welcoming arrival, while the upper-level balcony extends the home’s outdoor living space. Dark-framed windows and carefully placed façade details provide contrast without overwhelming the overall composition. Landscape planting and mature trees frame the building and soften its geometric lines. The design offers a contemporary family home with a comfortable, well-defined street-facing presence.'],
  },
  {
    id: 'soukath-villa', name: 'Soukath Villa', location: 'Gurupura', category: 'Villas', status: 'Completed', images: [],
    description: ['Soukath Villa in Gurupura showcases a contemporary design with layered volumes, expansive glazing and a sophisticated mix of light and dark finishes. Vertical accent panels and warm soffit details add texture and rhythm to the façade. Balconies and covered outdoor areas create depth while offering sheltered spaces connected to the home. The boundary wall and landscaped frontage provide a composed transition between the residence and the street. With its balanced proportions and refined material palette, the villa makes a distinctive modern statement.'],
  },

  // ---------------- Ongoing · Commercial ----------------
  {
    id: 'pranava-business-center', name: 'Pranava Business Center', location: 'Bejai Kapikad, Mangalore', category: 'Commercial', status: 'Ongoing', images: [],
    description: ['Pranava Business Center is envisioned as a contemporary commercial destination in Bejai Kapikad, Mangalore. Its striking angular profile, expansive glass frontage and layered façade create a distinctive presence within the urban setting. The design brings a bright, open character to the building while presenting a professional image for businesses and visitors. Street-level visibility and a welcoming entrance help connect the development with the surrounding city. With its modern architectural language, the project is designed to make a confident impression as a place for business.'],
  },
  {
    id: 'shetty-mahal', name: 'Shetty Mahal', location: 'Statebank', category: 'Commercial', status: 'Ongoing', images: [],
    description: ['Shetty Mahal presents a refined commercial design that combines warm architectural finishes with a clean, contemporary form. Its strong vertical lines, generous glazing and carefully composed façade give the building a prominent street presence. The illuminated exterior highlights the material palette and creates an inviting appearance after dusk. Ground-level frontage adds a direct connection to the surrounding streetscape and supports an active commercial environment. The overall design balances visual character with a professional setting suited to a range of business uses.'],
  },
  {
    id: 'pranava-krsna', name: 'Pranava Krsna', location: 'Nantoor', category: 'Commercial', status: 'Ongoing', images: [],
    description: ['Pranava Krsna in Nantoor is defined by a confident façade that pairs textured brick tones with dark vertical fins and clean-lined detailing. The contrast of materials gives the building a distinctive identity while keeping the overall composition contemporary and understated. Glazed spaces at street level create visual openness and strengthen the relationship between the building and its surroundings. Architectural lighting brings out the façade’s depth and texture, adding to its presence in the evening. The project is conceived as a modern commercial address with a strong visual identity and a welcoming street-facing profile.'],
  },

  // ---------------- Ongoing · Residential & commercial ----------------
  {
    id: 'atharva-mayfair', name: 'Atharva Mayfair', location: 'Kotekani', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Atharva Mayfair is a contemporary commercial and residential apartment development in Kotekani, designed with a clean, modern façade and a well-defined building profile. The ground-level frontage creates a clear presence for commercial activity, while the upper floors are arranged for apartment living. Balconies and broad window openings bring visual depth to the elevation and allow natural light into the homes. Its balanced exterior design gives the building a smart urban character suited to both everyday living and business use.'],
  },
  {
    id: 'atharva-srivari-heights', name: 'Atharva Srivari Heights', location: 'Hathill', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Atharva Srivari Heights in Hathill presents a modern multi-storey building combining commercial frontage with residential apartments above. The elevation features a distinctive central design, contrasting finishes and repeated balconies that create a strong vertical profile. The street-level commercial space offers visibility and convenient access for business purposes, while the upper floors provide a separate residential setting. Its contemporary styling gives the development a prominent presence in the neighbourhood.'],
  },
  {
    id: 'fn-vista', name: 'FN Vista', location: 'Krishnapura', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['FN Vista in Krishnapura is a contemporary mixed-use apartment building with commercial space at street level and residences on the upper floors. Its tall, streamlined façade, glass balcony railings and modern exterior finishes create a refined architectural appearance. The commercial frontage gives the building a practical connection to the surrounding street, while the upper-level apartments are visually set apart from the business area. FN Vista is designed to bring residential living and everyday commercial convenience together in one urban development.'],
  },
  {
    id: 'haneef-apartment', name: 'Haneef Apartment', location: 'Mukka', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: [
      'Haneef Apartment in Mukka features a modern mixed-use design with a prominent ground-floor commercial frontage and residential apartments above. The building’s corner-facing composition, open balconies and large windows give the elevation a bright, contemporary look. The commercial level is clearly visible from the street, making it suitable for customer-facing business activity, while the upper floors create a distinct residential zone. The overall design combines practical urban use with a neat, modern architectural style.',
      'A second view highlights the building’s corner profile and its combination of commercial and residential spaces. The illuminated ground-floor frontage adds visibility to the commercial area, while the balconies and windows above define the apartment floors. Contrasting façade materials and clean horizontal lines give the building a contemporary identity.',
    ],
  },
  {
    id: 'lotus-chandan', name: 'Lotus Chandan', location: 'Abbakka Nagar', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Lotus Chandan in Abbakka Nagar is a contemporary mixed-use development that combines ground-floor commercial space with residential apartments on the upper levels. Its façade uses contrasting colours, projecting balconies and broad window openings to create an attractive, well-defined elevation. The commercial frontage faces the surrounding street, supporting visibility and easy identification, while the upper floors provide a more private residential environment. The building’s modern appearance is designed to complement an urban neighbourhood.'],
  },
  {
    id: 'lotus-pearl', name: 'Lotus Pearl', location: 'Anegundi', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Lotus Pearl in Anegundi presents a broad apartment elevation with commercial space at the lower level and residential homes above. The repeated balconies and large windows give the building a balanced appearance and create a consistent rhythm across the façade. Street-level commercial units add a practical business component, while the upper floors are dedicated visually to apartment living. The overall design offers a straightforward combination of everyday residential use and convenient commercial frontage.'],
  },
  {
    id: 'lotus-srinidhi', name: 'Lotus Srinidhi', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Lotus Srinidhi is a modern commercial and residential apartment building with a carefully composed façade and a clearly defined street-level commercial zone. The upper floors feature balconies, broad windows and contrasting exterior finishes that add character to the building. Its commercial frontage creates a visible connection with the street, while the apartments above offer a separate setting for residential life. The overall architectural treatment is contemporary, neat and suited to a mixed-use urban property.'],
  },
  {
    id: 'sunrise-aura', name: 'Sunrise Aura', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Sunrise Aura features a compact contemporary design that brings commercial space at the ground level together with residential apartments above. The façade combines light exterior surfaces, darker accent panels and balconies to create a distinctive modern look. The lower commercial frontage gives the building an active street presence, while the upper levels are arranged as a residential portion. Its clean lines and contrasting finishes make the development visually prominent without an overly complicated design.'],
  },
  {
    id: 'pranava-naveen', name: 'Pranava Naveen', location: 'Shaktinagar', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Pranava Naveen in Shaktinagar is a modern mixed-use building with a street-facing commercial level and residential apartments on the floors above. The elevation is defined by geometric forms, open balconies and a combination of light and contrasting façade colours. Commercial frontage at ground level offers visibility from the road, while the upper apartment floors provide a distinct residential zone. The design balances practical mixed-use planning with a contemporary architectural appearance.'],
  },
  {
    id: 'pranava-srivari', name: 'Pranava Srivari', location: 'Car Street', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Pranava Srivari on Car Street is a multi-storey commercial and residential development with a prominent commercial base and apartments above. Its taller façade, repeated balconies and detailed exterior finishes create a strong presence along the street. The ground-floor frontage is visually suited to commercial activity, while the upper levels form the residential portion of the building. The overall design combines an active street edge with modern apartment living in a central urban setting.'],
  },
  {
    id: 'pratham-anugraha', name: 'Pratham Anugraha', location: 'Kinnigoli', category: 'Residential & Commercial', status: 'Ongoing', images: [],
    description: ['Pratham Anugraha in Kinnigoli features an elongated contemporary building form that combines commercial space at street level with residential apartments above. The façade uses a mix of brick-toned accents, light finishes and repeated balconies to create a distinctive visual identity. The commercial frontage provides a visible connection to the road, while the upper floors establish a separate residential environment. Its modern elevation is designed to accommodate both business activity and apartment living within one development.'],
  },
];

// Project management consultancy (CONCEPT DESIGN / PMC)
export const pmcProjects = [
  {
    id: 'abdul-razaak-residence',
    name: 'Residence for Mr. Abdul Razaak and Family',
    note: 'Compound wall presentation, two design options',
    images: [] as string[],
  },
];
