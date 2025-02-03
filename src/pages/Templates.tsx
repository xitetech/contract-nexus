import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
  {
    id: "employment",
    title: "Employment Contract",
    description: "Standard employment agreement for hiring new employees.",
    category: "Employment",
  },
  {
    id: "nda",
    title: "Non-Disclosure Agreement",
    description: "Protect your confidential information with this NDA template.",
    category: "Legal",
  },
  {
    id: "service",
    title: "Service Agreement",
    description: "Define the terms of your service provision with this template.",
    category: "Services",
  },
  {
    id: "rental",
    title: "Rental Agreement",
    description: "Comprehensive rental/lease agreement for property management.",
    category: "Real Estate",
  },
  {
    id: "sales",
    title: "Sales Contract",
    description: "Standard sales agreement for goods and services.",
    category: "Sales",
  },
];

const Templates = () => {
  return (
    <div className="container mx-auto px-6 py-12 animate-enter">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contract Templates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our collection of professionally crafted templates and
          customize them to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Link
            key={template.id}
            to={`/templates/${template.id}`}
            className="template-card"
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">
                    {template.category}
                  </span>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  View Template
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Templates;