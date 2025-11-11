import { Button } from "@/components/ui/button";
import { UserPlus, Users } from "lucide-react";

const VolunteerSection = () => {
  return (
    <section id="volunteer" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
          alt="Volunteers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Join the Movement — Be a Volunteer or Member
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Your time, skills, and passion can change lives. Join thousands of youth volunteers 
            across Nepal who are making a real difference in their communities. Together, we can 
            create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 gap-2 min-w-[200px]"
            >
              <UserPlus className="h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20 gap-2 min-w-[200px]"
            >
              <Users className="h-5 w-5" />
              Join as Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
