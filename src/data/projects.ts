import Home1 from "@/assets/Home1.jpg";
import project2 from "@/assets/project-2.jpg";
import Home3 from "@/assets/Home3.jpg";

export interface Project {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  units: string;
  image: string;
  description: string;
  size: string;
  possession: string;
  amenities: string[];
  mapUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PTRinfraCons Serene",
    location: "Gachibowli, Hyderabad",
    priceRange: "₹65L - ₹1.2Cr",
    units: "2 & 3 BHK Apartments",
    image: Home1,
    description:
      "Experience luxury living at PTRinfraCons Serene, where contemporary design meets world-class amenities. Nestled in the heart of Gachibowli, this premium residential project offers spacious apartments with stunning views and unmatched comfort.",
    size: "1200 - 2100 sq.ft",
    possession: "Dec 2025",
    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Children's Play Area",
      "Landscaped Gardens",
      "24/7 Security",
      "Power Backup",
      "Indoor Games",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: 2,
    title: "PTRinfraCons Elite Villas",
    location: "Jubilee Hills, Hyderabad",
    priceRange: "₹2.5Cr - ₹4Cr",
    units: "4 & 5 BHK Villas",
    image: project2,
    description:
      "Discover opulent living with PTRinfraCons Elite Villas. These architecturally stunning independent villas offer the perfect blend of privacy, luxury, and modern amenities in one of Hyderabad's most prestigious neighborhoods.",
    size: "3500 - 5000 sq.ft",
    possession: "Ready to Move",
    amenities: [
      "Private Garden",
      "Home Automation",
      "Modular Kitchen",
      "Premium Fittings",
      "Servant Quarter",
      "Private Parking",
      "Solar Power",
      "Security System",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: 3,
    title: "PTRinfraCons Skyline",
    location: "Financial District, Hyderabad",
    priceRange: "₹45L - ₹85L",
    units: "1, 2 & 3 BHK Apartments",
    image: Home3,
    description:
      "Soar above the ordinary at PTRinfraCons Skyline. This high-rise residential complex in the Financial District offers panoramic city views, cutting-edge amenities, and easy connectivity to major IT hubs and commercial centers.",
    size: "650 - 1800 sq.ft",
    possession: "Jun 2026",
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Co-working Space",
      "Yoga Deck",
      "Squash Court",
      "Multipurpose Hall",
      "EV Charging",
      "Concierge Service",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2!2d78.35!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzEyLjAiTiA3OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
];
