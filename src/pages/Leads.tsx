import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { MoreHorizontal, Mail, Phone, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const demoLeads = [
  { id: "1", first_name: "Mark", last_name: "Thompson", email: "mark@thompsonclinic.com", phone: "+1 555-1001", billing_city: "New York", shipping_street: "123 Main St", product_name: "MedKit Pro", billing_amount: 8500 },
  { id: "2", first_name: "Lisa", last_name: "Park", email: "lisa@parkmedical.com", phone: "+1 555-1002", billing_city: "Chicago", shipping_street: "456 Oak Ave", product_name: "SurgePack", billing_amount: 12000 },
  { id: "3", first_name: "Sarah", last_name: "Miller", email: "sarah@metrohospital.com", phone: "+1 555-1003", billing_city: "Houston", shipping_street: "789 Pine Rd", product_name: "DiagnoSuite", billing_amount: 45000 },
  { id: "4", first_name: "Robert", last_name: "Chen", email: "robert@cityclinic.com", phone: "+1 555-1004", billing_city: "Miami", shipping_street: "321 Elm St", product_name: "MedKit Basic", billing_amount: 23000 },
  { id: "5", first_name: "Anna", last_name: "Lee", email: "anna@leederma.com", phone: "+1 555-1005", billing_city: "Seattle", shipping_street: "654 Cedar Blvd", product_name: "DermaScan", billing_amount: 6800 },
];

export default function Leads() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="Leads">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage and track your leads</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                + New Lead
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Lead</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="basic" className="mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Salutation</Label>
                      <Input placeholder="Mr. / Mrs. / Dr." />
                    </div>
                    <div className="space-y-2">
                      <Label>Owner ID</Label>
                      <Input placeholder="Owner UUID (optional)" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name *</Label>
                      <Input placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name *</Label>
                      <Input placeholder="Last name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone *</Label>
                      <Input placeholder="+1 555-0000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Account ID</Label>
                      <Input placeholder="Account UUID (optional)" />
                    </div>
                    <div className="space-y-2">
                      <Label>Product Name</Label>
                      <Input placeholder="Product name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Currency Code</Label>
                      <Input placeholder="USD" />
                    </div>
                    <div className="space-y-2">
                      <Label>Employee Count</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>HQ Code</Label>
                      <Input placeholder="HQ code" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Shipping Street *</Label>
                    <Input placeholder="Street address" />
                  </div>
                  <div className="space-y-2">
                    <Label>Shipping Street 2</Label>
                    <Input placeholder="Apt, suite, etc." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Shipping City</Label>
                      <Input placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label>Shipping State</Label>
                      <Input placeholder="State" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Shipping Country</Label>
                      <Input placeholder="Country" />
                    </div>
                    <div className="space-y-2">
                      <Label>Shipping Zip Code</Label>
                      <Input placeholder="Zip code" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="billing" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Billing City *</Label>
                    <Input placeholder="Billing city" />
                  </div>
                  <div className="space-y-2">
                    <Label>Billing Street</Label>
                    <Input placeholder="Street address" />
                  </div>
                  <div className="space-y-2">
                    <Label>Billing Street 2</Label>
                    <Input placeholder="Apt, suite, etc." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Billing State</Label>
                      <Input placeholder="State" />
                    </div>
                    <div className="space-y-2">
                      <Label>Billing Country</Label>
                      <Input placeholder="Country" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Billing Zip Code</Label>
                      <Input placeholder="Zip" />
                    </div>
                    <div className="space-y-2">
                      <Label>Billing Amount</Label>
                      <Input type="number" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label>Exchange Rate</Label>
                      <Input type="number" placeholder="1.0" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  Cancel
                </button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Create Lead
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="stat-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Lead</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Email</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Phone</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">City</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Product</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Amount</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {demoLeads.map((l) => (
                  <tr key={l.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {l.first_name[0]}{l.last_name[0]}
                        </div>
                        <span className="font-medium text-card-foreground">{l.first_name} {l.last_name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <a href={`mailto:${l.email}`} className="flex items-center gap-1.5 text-primary hover:underline">
                        <Mail className="h-3.5 w-3.5" /> {l.email}
                      </a>
                    </td>
                    <td className="px-5 py-3">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" /> {l.phone}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{l.billing_city}</td>
                    <td className="px-5 py-3">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {l.product_name}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-semibold text-card-foreground">${l.billing_amount?.toLocaleString()}</td>
                    <td className="px-5 py-3">
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
