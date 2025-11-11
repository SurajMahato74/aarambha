import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Youth Leadership Summit 2024",
    date: "March 15, 2024",
    location: "Kathmandu",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    summary: "Join us for a day of inspiring talks, workshops, and networking with youth leaders.",
  },
  {
    id: 2,
    title: "Community Education Drive",
    date: "March 22, 2024",
    location: "Pokhara",
    image: "https://images.unsplash.com/photo-1523050854073-702d18b0d3b7?w=600&q=80",
    summary: "Volunteer opportunity to support educational initiatives in rural communities.",
  },
  {
    id: 3,
    title: "Women Empowerment Workshop",
    date: "April 5, 2024",
    location: "Lalitpur",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
    summary: "Skill development and leadership training for women in our communities.",
  },
  {
    id: 4,
    title: "School Dropout Prevention Campaign",
    date: "April 12, 2024",
    location: "Multiple Districts",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80",
    summary: "Join our nationwide campaign to identify and support at-risk students.",
  },
];

const LatestEvents = () => {
  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our upcoming events and be part of the change
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg animate-fade-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.summary}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-primary text-primary hover:bg-primary hover:text-white"
          >
            See All Events
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
