import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const templates = [
  {
    id: "employment",
    title: "Employment Contract",
    description: "Standard employment agreement for hiring new employees.",
    category: "Employment",
    tags: ["HR", "Hiring", "Business"],
    preview: "This Employment Agreement (the 'Agreement') is made between...",
  },
  {
    id: "nda",
    title: "Non-Disclosure Agreement",
    description: "Protect your confidential information with this NDA template.",
    category: "Legal",
    tags: ["Confidentiality", "Business", "Legal Protection"],
    preview: "This Non-Disclosure Agreement (the 'Agreement') is entered into...",
  },
  {
    id: "service",
    title: "Service Agreement",
    description: "Define the terms of your service provision with this template.",
    category: "Business",
    tags: ["Services", "Business", "Contracts"],
    preview: "This Service Agreement outlines the terms and conditions...",
  },
  {
    id: "rental",
    title: "Rental Agreement",
    description: "Comprehensive rental/lease agreement for property management.",
    category: "Real Estate",
    tags: ["Property", "Rental", "Lease"],
    preview: "This Rental Agreement is made and entered into on [DATE]...",
  },
  {
    id: "sales",
    title: "Sales Contract",
    description: "Standard sales agreement for goods and services.",
    category: "Business",
    tags: ["Sales", "Commerce", "Business"],
    preview: "This Sales Agreement is made between the Seller and Buyer...",
  },
  {
    id: "consulting",
    title: "Consulting Agreement",
    description: "Professional consulting services contract template.",
    category: "Business",
    tags: ["Consulting", "Services", "Professional"],
    preview: "This Consulting Agreement defines the terms of service...",
  },
  {
    id: "partnership",
    title: "Partnership Agreement",
    description: "Establish terms for business partnerships and joint ventures.",
    category: "Business",
    tags: ["Partnership", "Business Formation", "Legal"],
    preview: "This Partnership Agreement establishes the terms between partners...",
  },
  {
    id: "intellectual-property",
    title: "IP Assignment Agreement",
    description: "Transfer intellectual property rights with this agreement.",
    category: "Legal",
    tags: ["IP", "Legal", "Rights"],
    preview: "This Intellectual Property Assignment Agreement transfers...",
  },
  {
    id: "independent-contractor",
    title: "Independent Contractor Agreement",
    description: "Define terms for hiring independent contractors.",
    category: "Employment",
    tags: ["Contractor", "Employment", "Services"],
    preview: "This Independent Contractor Agreement establishes...",
  },
  {
    id: "software-license",
    title: "Software License Agreement",
    description: "License software products with this comprehensive agreement.",
    category: "Technology",
    tags: ["Software", "Licensing", "Technology"],
    preview: "This Software License Agreement grants the right to use...",
  },
  {
    id: "confidentiality",
    title: "Confidentiality Agreement",
    description: "Protect sensitive information with this agreement.",
    category: "Legal",
    tags: ["Confidentiality", "Legal", "Privacy"],
    preview: "This Confidentiality Agreement ensures the protection of...",
  },
  {
    id: "website-terms",
    title: "Website Terms of Service",
    description: "Standard terms of service for website usage.",
    category: "Technology",
    tags: ["Website", "Terms", "Digital"],
    preview: "These Terms of Service govern the use of the website...",
  }
];

const categories = ["All", "Business", "Employment", "Legal", "Real Estate", "Technology"];

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-12 animate-enter">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Templates</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contract Templates</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our collection of professionally crafted templates and
          customize them to your needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <HoverCard key={template.id}>
            <HoverCardTrigger asChild>
              <Link
                to={`/templates/${template.id}`}
                className="template-card group"
              >
                <Card className="h-full transition-all duration-200 hover:shadow-lg">
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
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-accent px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      View Template
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{template.title}</h4>
                <p className="text-sm text-muted-foreground">{template.preview}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default Templates;
