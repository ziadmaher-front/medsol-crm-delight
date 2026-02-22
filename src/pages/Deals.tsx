import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { MoreHorizontal, DollarSign } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const demoDeals = [
  { id: "1", name: "MedKit Pro – Metro Hospital", account: "Metro Hospital", owner: "John Doe", amount: 45000, stage: "Proposal", probability: 60, closingDate: "2026-03-15", currency: "USD" },
  { id: "2", name: "SurgePack – Wilson Health", account: "Wilson Health", owner: "Sarah Miller", amount: 15800, stage: "Negotiation", probability: 80, closingDate: "2026-02-28", currency: "USD" },
  { id: "3", name: "DiagnoSuite – City Clinic", account: "City Health Clinic", owner: "James Wilson", amount: 38000, stage: "Qualification", probability: 35, closingDate: "2026-04-10", currency: "USD" },
  { id: "4", name: "DermaScan – White Medical", account: "White Medical Center", owner: "Emily Rodriguez", amount: 52000, stage: "Closed Won", probability: 100, closingDate: "2026-02-01", currency: "USD" },
  { id: "5", name: "Lab Equipment – Brown Assoc", account: "Brown & Associates", owner: "John Doe", amount: 28500, stage: "Prospecting", probability: 20, closingDate: "2026-05-20", currency: "USD" },
];

const stageColors: Record<string, string> = {
  Prospecting: "bg-info/10 text-info",
  Qualification: "bg-warning/10 text-warning",
  Proposal: "bg-primary/10 text-primary",
  Negotiation: "bg-chart-quaternary/10 text-chart-quaternary",
  "Closed Won": "bg-success/10 text-success",
};

export default function Deals() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="Deals">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage your deals and opportunities</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                + New Deal
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Deal</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Deal Name *</Label>
                    <Input placeholder="Deal name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Account ID *</Label>
                    <Input placeholder="Account UUID" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Owner ID *</Label>
                    <Input placeholder="Owner UUID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Lead ID</Label>
                    <Input placeholder="Lead UUID (optional)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Contact ID</Label>
                    <Input placeholder="Contact UUID (optional)" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <Input placeholder="USD" />
                  </div>
                  <div className="space-y-2">
                    <Label>Stage</Label>
                    <Input placeholder="Prospecting, Proposal..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Probability (%)</Label>
                    <Input type="number" placeholder="0-100" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Closing Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Input placeholder="New Business, Renewal..." />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Lead Source</Label>
                    <Input placeholder="Web, Referral..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Campaign Source</Label>
                    <Input placeholder="Campaign name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input placeholder="Deal description" />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">Cancel</button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Create Deal</button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="stat-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Deal</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Account</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Owner</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Amount</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Stage</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Closing Date</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {demoDeals.map((d) => (
                  <tr key={d.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-card-foreground">{d.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{d.account}</td>
                    <td className="px-5 py-3 text-muted-foreground">{d.owner}</td>
                    <td className="px-5 py-3 font-semibold text-card-foreground">${d.amount.toLocaleString()}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${stageColors[d.stage] || "bg-muted text-muted-foreground"}`}>
                        {d.stage}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{d.closingDate}</td>
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
