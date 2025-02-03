import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Eye, FileText, Printer } from "lucide-react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import PreviewModal from "@/components/PreviewModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  recipientName: z.string().min(2, "Recipient name must be at least 2 characters"),
  effectiveDate: z.string(),
  confidentialInfo: z.string().min(10, "Please provide more detail about the confidential information"),
});

const templates = {
  employment: {
    title: "Employment Contract",
    description: "A comprehensive employment agreement template suitable for businesses of all sizes.",
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
    description: "Protect your confidential information with this NDA template.",
    category: "Legal",
    preview: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into on [effectiveDate] between:

[companyName], ("Disclosing Party"),

and

[recipientName], ("Receiving Party").

1. CONFIDENTIAL INFORMATION

The following information shall be considered Confidential Information under this agreement:

[confidentialInfo]

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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [customizedPreview, setCustomizedPreview] = useState("");
  
  const template = templates[id as keyof typeof templates];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      recipientName: "",
      effectiveDate: new Date().toISOString().split('T')[0],
      confidentialInfo: "",
    },
  });

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

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${template.title}</title>
            <style>
              body {
                font-family: serif;
                line-height: 1.6;
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
              }
              pre {
                white-space: pre-wrap;
                font-family: serif;
                font-size: 12pt;
              }
            </style>
          </head>
          <body>
            <pre>${customizedPreview || template.preview}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const updatePreview = (values: z.infer<typeof formSchema>) => {
    let preview = template.preview;
    preview = preview.replace("[companyName]", values.companyName || "[Company Name]");
    preview = preview.replace("[recipientName]", values.recipientName || "[Recipient Name]");
    preview = preview.replace("[effectiveDate]", values.effectiveDate || "[Date]");
    preview = preview.replace("[confidentialInfo]", values.confidentialInfo || "[Confidential Information Description]");
    setCustomizedPreview(preview);
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

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Customize Template</h2>
            <Form {...form}>
              <form onChange={() => updatePreview(form.getValues())} className="space-y-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recipientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter recipient name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="effectiveDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Effective Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confidentialInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confidential Information</FormLabel>
                      <FormControl>
                        <Input placeholder="Describe the confidential information" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Preview</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setIsPreviewOpen(true)}>
                  <Eye className="h-4 w-4 mr-2" />
                  Full Preview
                </Button>
                <Button variant="outline" size="sm" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
              </div>
            </div>
            <pre className="text-sm bg-secondary p-4 rounded-lg overflow-auto max-h-[400px] whitespace-pre-wrap">
              {customizedPreview || template.preview}
            </pre>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button onClick={handleDownload} size="lg" className="flex-1">
            <Download className="mr-2 h-5 w-5" />
            Download Template
          </Button>
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        content={customizedPreview || template.preview}
        title={template.title}
      />
    </div>
  );
};

export default TemplateDetails;
