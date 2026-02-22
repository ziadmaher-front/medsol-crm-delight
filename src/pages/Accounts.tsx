import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { MoreHorizontal, Phone, Globe, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const demoAccounts = [
  { id: "1", name: "Metro Hospital", phone: "+1 555-2001", accountNumber: "ACC-001", website: "metrohospital.com", industry: "Healthcare", territory: "East Coast", accountType: "Customer", ownership: "Public" },
  { id: "2", name: "Wilson Health", phone: "+1 555-2002", accountNumber: "ACC-002", website: "wilsonhealth.com", industry: "Healthcare", territory: "Midwest", accountType: "Customer", ownership: "Private" },
  { id: "3", name: "City Health Clinic", phone: "+1 555-2003", accountNumber: "ACC-003", website: "cityhealthclinic.com", industry: "Healthcare", territory: "West Coast", accountType: "Prospect", ownership: "Private" },
  { id: "4", name: "Brown & Associates", phone: "+1 555-2004", accountNumber: "ACC-004", website: "brownassoc.com", industry: "Consulting", territory: "South", accountType: "Partner", ownership: "Private" },
  { id: "5", name: "White Medical Center", phone: "+1 555-2005", accountNumber: "ACC-005", website: "whitemedical.com", industry: "Healthcare", territory: "East Coast", accountType: "Customer", ownership: "Public" },
  { id: "6", name: "Harris Health Systems", phone: "+1 555-2006", accountNumber: "ACC-006", website: "harrishealth.com", industry: "Technology", territory: "Midwest", accountType: "Prospect", ownership: "Public" },
];

const typeColors: Record<string, string> = {
  Customer: "bg-success/10 text-success",
  Prospect: "bg-warning/10 text-warning",
  Partner: "bg-primary/10 text-primary",
};

export default function Accounts() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="Accounts">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage your company accounts</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                + New Account
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Account</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="basic" className="mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="billing">Billing Address</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping Address</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Account Name *</Label>
                      <Input placeholder="Company name" />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone *</Label>
                      <Input placeholder="+1 555-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>User IDs * (comma-separated UUIDs)</Label>
                    <Input placeholder="uuid1, uuid2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Account Number</Label>
                      <Input placeholder="ACC-XXX" />
                    </div>
                    <div className="space-y-2">
                      <Label>Website</Label>
                      <Input type="url" placeholder="https://example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Industry</Label>
                      <Input placeholder="Healthcare, Technology..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Territory</Label>
                      <Input placeholder="Region / territory" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Account Type</Label>
                      <Input placeholder="Customer, Prospect..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Ownership</Label>
                      <Input placeholder="Public, Private..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Parent Account ID</Label>
                      <Input placeholder="UUID (optional)" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="billing" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Billing Street</Label>
                    <Input placeholder="Street address" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Billing City</Label>
                      <Input placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label>Billing State</Label>
                      <Input placeholder="State" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Billing Zip</Label>
                      <Input placeholder="Zip code" />
                    </div>
                    <div className="space-y-2">
                      <Label>Billing Country</Label>
                      <Input placeholder="Country" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label>Shipping Street</Label>
                    <Input placeholder="Street address" />
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
                      <Label>Shipping Zip</Label>
                      <Input placeholder="Zip code" />
                    </div>
                    <div className="space-y-2">
                      <Label>Shipping Country</Label>
                      <Input placeholder="Country" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  Cancel
                </button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Create Account
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
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Account</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Account #</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Phone</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Website</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Industry</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Type</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {demoAccounts.map((a) => (
                  <tr key={a.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-card-foreground">{a.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{a.accountNumber}</td>
                    <td className="px-5 py-3">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" /> {a.phone}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <a href={`https://${a.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:underline">
                        <Globe className="h-3.5 w-3.5" /> {a.website}
                      </a>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{a.industry}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColors[a.accountType] || "bg-muted text-muted-foreground"}`}>
                        {a.accountType}
                      </span>
                    </td>
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
