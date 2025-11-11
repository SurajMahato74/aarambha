import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            We are a Youth-Driven Organization
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Aarambha Foundation is dedicated to empowering youth and creating lasting change in Nepal. 
            Our mission is to reduce school dropouts and provide opportunities for every child to thrive 
            through education, mentorship, and community support. We believe in the power of youth-led 
            initiatives to transform communities and build a brighter future for all. Through our 
            volunteering platform, education support programs, and community action initiatives, we work 
            tirelessly to ensure that no child is left behind.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
