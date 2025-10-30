import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, IndianRupee } from "lucide-react";

const SearchBar = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container px-4">
        <div className="card-gradient rounded-2xl shadow-lg p-6 md:p-8 -mt-20 relative z-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
            Find Your Perfect Property
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter Location"
                className="pl-10 h-12"
              />
            </div>

            {/* Property Type */}
            <div className="relative">
              <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Select>
                <SelectTrigger className="pl-10 h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Select>
                <SelectTrigger className="pl-10 h-12">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20-40">₹20L - ₹40L</SelectItem>
                  <SelectItem value="40-60">₹40L - ₹60L</SelectItem>
                  <SelectItem value="60-100">₹60L - ₹1Cr</SelectItem>
                  <SelectItem value="100+">₹1Cr+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button variant="secondary" size="lg" className="h-12 font-semibold">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
