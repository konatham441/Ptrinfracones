import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "secondary" | "primary";
  size?: "lg" | "md" | "sm";
  className?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold focus:outline-none";
  const variants: Record<string, string> = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    outline: "bg-card text-foreground hover:bg-card/90 border",
    secondary: "bg-yellow-400 text-red-700 hover:bg-yellow-500",
  };
  const sizes: Record<string, string> = {
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1 text-sm",
  };
  const cls = [base, variants[variant] ?? "", sizes[size] ?? "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const ComparePackages = () => {
  const [activeTab, setActiveTab] = useState("homes");

  // 🏠 HOMES PACKAGES (each plan has different content)
  const homes = [
    { name: "Basic", price: "₹1900 per sqft" },
    { name: "Classic", price: "₹2155 per sqft" },
    { name: "Premium", price: "₹2555 per sqft" },
    { name: "Royale", price: "₹2780 per sqft" },
  ];

  const homesFeatures = {
    STRUCTURE: {
      Steel: [
        "Bondex / Radha / Tirumala",
        "JSW One / SAIL/ Vizag",
        "JSW One / SAIL/ Vizag",
        "JSW One / SAIL/ Vizag",
      ],
      Cement: [
        "Bharathi / Zuari / Dalmia ",
        "Bharathi / Zuari / Dalmia ",
        " Ultratech / Ramco Supercrete / ACC",
        " Ultratech / Ramco Supercrete / ACC",
      ],
    },
    KITCHEN: {
      "Wall Dado": [
        "Ceramic Tiles up to ₹120/sqft",
        "Vitrified Tiles up to ₹180/sqft",
        "Italian Marble up to ₹230/sqft",
        "Granite/Marble Designer up to ₹280/sqft",
      ],
      Sink: [
        "Single SS Sink ₹5,000",
        "Kaff Sink ₹10,000",
        "Franke Sink ₹15,000",
        "Franke Premium ₹20,000",
      ],
      "Sink Faucet": [
        "Jaquar ₹2,000",
        "Hindware ₹4,000",
        "Grohe ₹6,000",
        "Kohler ₹8,000",
      ],
    },
    BATHROOM: {
      "Wall Dado": [
        "Ceramic Tiles ₹120/sqft",
        "Vitrified ₹180/sqft",
        "Italian ₹250/sqft",
        "Italian Premium ₹300/sqft",
      ],
      "CP Fittings": [
        "ESSCO ₹10k",
        "Jaquar ₹15k",
        "Grohe ₹20k",
        "Kohler ₹25k",
      ],
      "Water Heater Provision": ["✅", "✅", "✅", "✅"],
    },
    "DOORS & WINDOWS": {
      "Main Door": [
        "Teak Frame + Flush Door",
        "Teak Veneer Finish Door",
        "Solid Teak Door",
        "Designer Veneer Door with Polishing",
      ],
      "Internal Doors": [
        "Flush Door ₹10k",
        "Membrane Door ₹15k",
        "Membrane Door ₹20k",
        "Premium Veneer Door ₹25k",
      ],
    },
  };

  // 💎 LUXURY HOMES
  const luxury = [
    { name: "Freesia", price: "₹4910 per sqft" },
    { name: "Delhia", price: "₹5540 per sqft" },
    { name: "Magnolia", price: "₹6510 per sqft" },
  ];

  const luxuryFeatures = {
    STRUCTURE: {
      Steel: [
        "JSW Neosteel Fe 550D",
        "TATA Tiscon 600 Grade",
        "TATA EQR 700 Grade",
      ],
      Cement: ["Ultratech OPC 53", "Birla Super Premium", "ACC Gold Elite"],
    },
    KITCHEN: {
      "Wall Dado": [
        "Italian Marble ₹250/sqft",
        "Granite Designer ₹300/sqft",
        "Imported Italian Marble ₹400/sqft",
      ],
      Sink: ["Franke ₹20k", "Franke Premium ₹25k", "Blanco ₹30k"],
      "Sink Faucet": ["Grohe ₹8k", "Kohler ₹12k", "Kohler Designer ₹18k"],
    },
    BATHROOM: {
      "Wall Dado": ["Italian ₹250/sqft", "Italian ₹300/sqft", "Onyx ₹400/sqft"],
      "CP Fittings": ["Grohe ₹25k", "Kohler ₹30k", "Hansgrohe ₹40k"],
      "Water Heater Provision": ["✅", "✅", "✅"],
    },
    "DOORS & WINDOWS": {
      "Main Door": [
        "Teak Veneer Finish",
        "Designer Teak with Carving",
        "Solid Teak Imported Veneer",
      ],
      "Internal Doors": [
        "Veneer ₹25k",
        "Veneer ₹30k",
        "Veneer ₹35k",
      ],
    },
  };

  const renderTable = (packages, features) => (
    <div className="overflow-x-auto shadow-lg rounded-2xl border border-yellow-300 bg-white mt-6">
      <table className="min-w-full text-sm">
        <thead className="bg-gradient-to-r from-yellow-400 to-red-500 text-white">
          <tr>
            <th className="p-4 text-left font-semibold">Features</th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="p-4 text-center font-semibold">
                <div>{pkg.name}</div>
                <div className="text-xs text-yellow-100">{pkg.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow-200">
          {Object.keys(features).map((section) => (
            <React.Fragment key={section}>
              <tr className="bg-yellow-100">
                <td className="p-3 font-bold text-red-700" colSpan={packages.length + 1}>
                  {section}
                </td>
              </tr>
              {Object.keys(features[section]).map((feature) => (
                <tr key={feature}>
                  <td className="p-3 font-medium">{feature}</td>
                  {features[section][feature].map((value, idx) => (
                    <td key={idx} className="p-3 text-center">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Navbar />
          <h1 className="text-4xl font-bold text-red-600 mb-2 py-12">
            Compare Packages
          </h1>
          <p className="text-gray-600">
            Switch between Homes and Luxury Homes to explore unique features
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("homes")}
            className={`px-6 py-2 rounded-full font-semibold border-2 ${
              activeTab === "homes"
                ? "bg-red-500 border-red-500 text-white shadow-lg"
                : "border-yellow-400 text-red-600 bg-yellow-100 hover:bg-yellow-200"
            }`}
          >
            Homes
          </button>
          <button
            onClick={() => setActiveTab("luxury")}
            className={`px-6 py-2 rounded-full font-semibold border-2 ${
              activeTab === "luxury"
                ? "bg-red-500 border-red-500 text-white shadow-lg"
                : "border-yellow-400 text-red-600 bg-yellow-100 hover:bg-yellow-200"
            }`}
          >
            Luxury Homes
          </button>
        </div>

        {/* Dynamic Table */}
        {activeTab === "homes"
          ? renderTable(homes, homesFeatures)
          : renderTable(luxury, luxuryFeatures)}

        {/* Footer */}
        <div className="text-center mt-10 text-sm text-gray-600">
          <p>
            *All fittings can be customized at additional cost. Contact us for
            complete details.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Schedule a Site Visit Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Experience the PTRinfraCons difference firsthand. Our team is ready
            to show you around.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-card text-foreground hover:bg-card/90 border-0 shadow-lg animate-fade-in"
          >
            Book a Visit
          </Button>
        </div>
      </section>

      <Footer />

      {/* Floating Enquiry Button */}
      <div className="fixed bottom-6 right-6 z-40 animate-float">
        <Button
          variant="secondary"
          size="lg"
          className="shadow-xl rounded-full h-14 px-8"
        >
          <Link to="/enquire">Enquire Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default ComparePackages;
