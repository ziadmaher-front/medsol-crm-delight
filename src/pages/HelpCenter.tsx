import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, MessageCircle, Mail, Phone, FileText, Users, Target, DollarSign, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "How do I create a new lead?", a: "Navigate to the Leads page from the sidebar, then click the '+ New Lead' button. Fill in the required fields (First Name, Last Name, Phone, Email) and submit the form.", category: "Leads" },
  { q: "How do I convert a lead to a deal?", a: "Open the lead you want to convert, then click the 'Convert' button. This will create a new Account, Contact, and Deal from the lead information.", category: "Leads" },
  { q: "How do I manage my pipeline stages?", a: "Go to Blueprint from the sidebar to define stage transitions and criteria. Use Workflow Rules to automate actions when deals move between stages.", category: "Deals" },
  { q: "How do I assign tasks to team members?", a: "Go to the Tasks page and click '+ New Task'. Select the owner from the dropdown, set the due date, priority, and description.", category: "Tasks" },
  { q: "How do I create a workflow rule?", a: "Navigate to Workflow Rules, click 'New Workflow', select the module and trigger type, define conditions, and specify the actions to execute.", category: "Automation" },
  { q: "How do I set up a blueprint?", a: "Go to Blueprint, click 'New Blueprint', select the module and field to track, then define transitions with required criteria for each stage change.", category: "Automation" },
  { q: "How do I export reports?", a: "Go to Reports & Analytics, select the report type, configure filters, and click the Export button to download as CSV or PDF.", category: "Reports" },
  { q: "How do I manage user permissions?", a: "Navigate to User Management from the sidebar. You can create profiles with specific module permissions and assign roles to users.", category: "Admin" },
];

const guides = [
  { title: "Getting Started with Medsol CRM", icon: BookOpen, desc: "Learn the basics of navigating and using the CRM", category: "Beginner" },
  { title: "Managing Leads & Contacts", icon: Target, desc: "Best practices for lead management and conversion", category: "Sales" },
  { title: "Deal Pipeline Management", icon: DollarSign, desc: "How to track and manage your sales pipeline", category: "Sales" },
  { title: "Automating with Workflows", icon: CheckCircle2, desc: "Set up rules to automate repetitive tasks", category: "Automation" },
  { title: "Team & User Management", icon: Users, desc: "Configure roles, profiles, and permissions", category: "Admin" },
  { title: "Reports & Analytics Guide", icon: FileText, desc: "Generate insights from your CRM data", category: "Analytics" },
];

export default function HelpCenter() {
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const filteredFaqs = faqs.filter((f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <AppLayout title="Help Center">
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Search */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-lg font-semibold text-card-foreground">How can we help you?</h2>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search for help..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        {/* Quick guides */}
        <div>
          <h3 className="font-semibold text-card-foreground mb-3">Quick Guides</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Card key={g.title} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => toast({ title: g.title, description: "Guide content would open here" })}>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2"><g.icon className="h-5 w-5 text-primary" /></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-card-foreground">{g.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{g.desc}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">{g.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="font-semibold text-card-foreground mb-3">Frequently Asked Questions</h3>
          <Card>
            <CardContent className="p-4">
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-sm text-left">
                      <div className="flex items-center gap-2">
                        {f.q}
                        <Badge variant="outline" className="text-xs shrink-0">{f.category}</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
                {filteredFaqs.length === 0 && <p className="text-sm text-muted-foreground py-4 text-center">No results found for "{search}"</p>}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-card-foreground mb-3">Contact Support</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => toast({ title: "Live Chat", description: "Chat support would open here" })}>
              <CardContent className="p-4 flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary" /><div><p className="font-medium text-sm text-card-foreground">Live Chat</p><p className="text-xs text-muted-foreground">Available 9 AM – 6 PM</p></div></CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => toast({ title: "Email Support", description: "support@medsol.com" })}>
              <CardContent className="p-4 flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><div><p className="font-medium text-sm text-card-foreground">Email</p><p className="text-xs text-muted-foreground">support@medsol.com</p></div></CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => toast({ title: "Phone Support", description: "+1 555-0100" })}>
              <CardContent className="p-4 flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><div><p className="font-medium text-sm text-card-foreground">Phone</p><p className="text-xs text-muted-foreground">+1 555-0100</p></div></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
