import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Professional Templates",
    description: "Access a wide range of professionally crafted contract templates.",
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description: "Customize and download contracts in minutes, not hours.",
  },
  {
    icon: Shield,
    title: "Legally Sound",
    description: "Templates reviewed by legal experts for your peace of mind.",
  },
];

const Index = () => {
  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Professional Contract Templates
          <br />
          <span className="text-primary">Made Simple</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create, customize, and download legally-sound contracts in minutes.
          Perfect for businesses and professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/templates">
              Browse Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Templates?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card p-6 rounded-lg text-center"
              >
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Create Your Contract?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose from our collection of professional templates and customize them to
          your needs in minutes.
        </p>
        <Button asChild size="lg" className="text-lg">
          <Link to="/templates">Get Started Now</Link>
        </Button>
      </section>
    </div>
  );
};

export default Index;