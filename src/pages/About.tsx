import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Building2, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1999", event: "Company Founded" },
    { year: "2005", event: "First Luxury Project Launched" },
    { year: "2010", event: "10,000 Happy Families" },
    { year: "2015", event: "Expansion to Multiple Cities" },
    { year: "2020", event: "50+ Projects Delivered" },
    { year: "2024", event: "25 Years of Excellence" },
  ];

  const values = [
    {
      icon: Building2,
      title: "Quality Construction",
      description: "We never compromise on quality. Every project is built with the finest materials and craftsmanship.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description: "We constantly innovate to bring you the best in modern residential living.",
    },
    {
      icon: Heart,
      title: "Trust & Transparency",
      description: "We build relationships based on trust, honesty, and complete transparency.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-1xl animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              Building Landmarks of Trust
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              For over 25 years, PTRinfraCons has been synonymous with quality, trust, and excellence in real estate development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1999, PTRinfraCons began with a simple vision: to create homes that families would cherish for generations. What started as a small venture has grown into one of the most trusted names in real estate.
                </p>
                <p>
                  Over the years, we've delivered 50+ residential projects, housing over 10,000 happy families. Our commitment to quality, transparency, and customer satisfaction has earned us numerous awards and, more importantly, the trust of our customers.
                </p>
                <p>
                  Today, PTRinfraCons stands as a symbol of luxury, innovation, and reliability. We continue to push boundaries, embracing new technologies and sustainable practices to create homes that are not just places to live, but spaces to thrive.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Modern Architecture"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-accent/30">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 font-heading text-2xl font-bold text-primary flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <div className="flex-1 pl-8">
                    <p className="font-semibold text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover-lift animate-fade-in"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
            Recognition & Awards
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12 animate-fade-in">
            Our commitment to excellence has been recognized by industry leaders and satisfied customers alike.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Best Residential Developer 2023",
              "Customer Satisfaction Award",
              "Innovation in Design Award",
              "Sustainable Building Excellence",
            ].map((award, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm animate-fade-in"
              >
                <Award className="h-12 w-12 mx-auto mb-3" />
                <p className="font-semibold">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
