import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import lifestyleImage from "@/assets/lifestyle.jpg";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaTree,
  FaChild,
  FaHome,
} from "react-icons/fa";
import ConstructionPackages from "./ConstructionPackages";
import { Link } from "react-router-dom";

const Index = () => {
  const amenities = [
    { icon: FaSwimmingPool, name: "Swimming Pool" },
    { icon: FaDumbbell, name: "Gymnasium" },
    { icon: FaTree, name: "Landscaped Parks" },
    { icon: FaChild, name: "Play Area" },
    { icon: FaHome, name: "Clubhouse" },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "10K+", label: "Happy Families" },
    { value: "25+", label: "Years of Trust" },
    { value: "15+", label: "Awards Won" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "PTRinfraCons Serene",
      text: "Moving into PTRinfraCons Serene was the best decision we made. The amenities are top-notch and the community is wonderful!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Rajesh Kumar",
      location: "PTRinfraCons Elite Villas",
      text: "The quality of construction and attention to detail is exceptional. Truly a landmark of trust.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Anitha Reddy",
      location: "PTRinfraCons Skyline",
      text: "Living here feels like a dream. The views are breathtaking and the location couldn't be better!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <SearchBar /> */}

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted residential projects designed for modern living
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Lifestyle */}
      <div>
        <ConstructionPackages></ConstructionPackages>
      </div>
      <section className="section-padding bg-accent/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Amenities & Lifestyle
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Experience a lifestyle that redefines luxury. Our projects come equipped with
                world-class amenities designed to enhance your everyday living.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <amenity.icon className="text-primary text-xl" />
                    </div>
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={lifestyleImage}
                alt="Luxury Clubhouse"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose PTRinfraCons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for Life. Built for Legacy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors animate-fade-in"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-accent/20 to-background">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our Residents Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the families who call PTRinfraCons home
          </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 shadow-md hover-lift animate-fade-in"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Schedule a Site Visit Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Experience the PTRinfraCons difference firsthand. Our team is ready to show you around.
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
        <Button variant="secondary" size="lg" className="shadow-xl rounded-full h-14 px-8">
          <Link to="/enquire">Enquire Now</Link>
         
        </Button>
      </div>
    </div>
  );
};

export default Index;
