import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Eye, FileText } from "lucide-react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const templates = {
  employment: {
    title: "Employment Contract",
    description:
      "A comprehensive employment agreement template suitable for businesses of all sizes.",
    category: "Employment",
    preview: `EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is made and entered into on [DATE], by and between:

[EMPLOYER NAME], a company organized and existing under the laws of [STATE/COUNTRY], with its principal place of business at [ADDRESS] (the "Employer"),

and

[EMPLOYEE NAME], residing at [ADDRESS] (the "Employee").

1. POSITION AND DUTIES

The Employee shall be employed in the position of [JOB TITLE] and shall perform the following duties: [DESCRIPTION OF DUTIES]

2. TERM

This Agreement shall commence on [START DATE] and shall continue until terminated in accordance with the provisions herein.

3. COMPENSATION

The Employee shall receive a base salary of [AMOUNT] per [PERIOD], payable in accordance with the Employer's standard payroll practices.

4. BENEFITS

The Employee shall be entitled to participate in the employee benefit plans provided by the Employer, subject to the terms and conditions of such plans.

[Additional sections would follow...]`,
  },
  nda: {
    title: "Non-Disclosure Agreement",
    description:
      "Protect your confidential information with this comprehensive NDA template.",
    category: "Legal",
    preview: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into on [DATE] between:

[PARTY A NAME], located at [ADDRESS] ("Disclosing Party"),

and

[PARTY B NAME], located at [ADDRESS] ("Receiving Party").

1. CONFIDENTIAL INFORMATION

"Confidential Information" means any information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly, in writing, orally or by inspection of tangible objects.

2. OBLIGATIONS

The Receiving Party shall:
a) Maintain the confidentiality of the Confidential Information
b) Use the Confidential Information only for the purpose of [PURPOSE]
c) Not disclose the Confidential Information to any third party without prior written consent

[Additional sections would follow...]`,
  },
  // Add other templates here...
};

const TemplateDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const template = templates[id as keyof typeof templates];

  if (!template) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
        <p className="text-muted-foreground">
          The template you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your template is being prepared for download.",
    });
  };

  return (
    <div className="container mx-auto px-6 py-12 animate-enter">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-primary font-medium">
            {template.category}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{template.title}</h1>
          <p className="text-lg text-muted-foreground">{template.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Button onClick={handleDownload} size="lg" className="flex-1">
            <Download className="mr-2 h-5 w-5" />
            Download Template
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            <Eye className="mr-2 h-5 w-5" />
            Preview
          </Button>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Template Preview</h2>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          <pre className="legal-text whitespace-pre-wrap text-sm bg-secondary p-6 rounded-lg overflow-auto max-h-[600px]">
            {template.preview}
          </pre>
        </Card>
      </div>
    </div>
  );
};

export default TemplateDetails;