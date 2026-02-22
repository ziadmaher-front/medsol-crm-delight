import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { MoreHorizontal, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const demoRFQs = [
  { id: "1", rfqName: "MedKit Pro Order", rfqNumber: "RFQ-001", account: "Metro Hospital", currency: "USD", status: "SUBMITTED", paymentTerms: "Net 30" },
  { id: "2", rfqName: "SurgePack Bulk Order", rfqNumber: "RFQ-002", account: "Wilson Health", currency: "USD", status: "COMPLETED", paymentTerms: "Net 45" },
  { id: "3", rfqName: "Lab Equipment Request", rfqNumber: "RFQ-003", account: "City Health Clinic", currency: "AED", status: "SUBMITTED", paymentTerms: "Net 30" },
  { id: "4", rfqName: "DermaScan Supply", rfqNumber: "RFQ-004", account: "White Medical Center", currency: "EGP", status: "SUBMITTED", paymentTerms: "Net 60" },
];

const statusColors: Record<string, string> = {
  SUBMITTED: "bg-warning/10 text-warning",
  COMPLETED: "bg-success/10 text-success",
};

export default function RFQs() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="RFQs">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage requests for quotation</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                + New RFQ
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New RFQ</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>RFQ Name *</Label>
                    <Input placeholder="RFQ name" />
                  </div>
                  <div className="space-y-2">
                    <Label>RFQ Number</Label>
                    <Input placeholder="RFQ-XXX" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Account ID *</Label>
                    <Input placeholder="Account UUID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Currency *</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="USD">USD</option>
                      <option value="AED">AED</option>
                      <option value="EGP">EGP</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Contact ID</Label>
                    <Input placeholder="Contact UUID (optional)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Lead ID</Label>
                    <Input placeholder="Lead UUID (optional)" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Vendor ID</Label>
                    <Input placeholder="Vendor UUID (optional)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Select status</option>
                      <option value="SUBMITTED">Submitted</option>
                      <option value="COMPLETED">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Payment Terms</Label>
                  <Input placeholder="Net 30, Net 45..." />
                </div>
                <div className="space-y-2">
                  <Label>Additional Notes</Label>
                  <Textarea placeholder="Notes..." />
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">RFQ Products</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <Label className="text-xs">Product ID</Label>
                        <Input placeholder="UUID" className="h-9" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Quantity *</Label>
                        <Input type="number" placeholder="0.01" className="h-9" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Discount</Label>
                        <Input placeholder="10%" className="h-9" />
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 text-xs font-medium text-primary hover:underline">+ Add Product</button>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">Cancel</button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Create RFQ</button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="stat-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">RFQ</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">RFQ #</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Account</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Currency</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Payment Terms</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {demoRFQs.map((r) => (
                  <tr key={r.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-card-foreground">{r.rfqName}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{r.rfqNumber}</td>
                    <td className="px-5 py-3 text-muted-foreground">{r.account}</td>
                    <td className="px-5 py-3 text-muted-foreground">{r.currency}</td>
                    <td className="px-5 py-3 text-muted-foreground">{r.paymentTerms}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[r.status]}`}>
                        {r.status}
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
