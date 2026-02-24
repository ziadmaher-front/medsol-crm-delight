import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, ArrowRight, Trash2, Edit2, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Transition {
  from: string;
  to: string;
  criteria: string[];
  mandatory: boolean;
}

interface BlueprintDef {
  id: number;
  name: string;
  module: string;
  field: string;
  transitions: Transition[];
  active: boolean;
  description: string;
}

const initialBlueprints: BlueprintDef[] = [
  {
    id: 1,
    name: "Lead Qualification Process",
    module: "Leads",
    field: "Lead Status",
    description: "Standardize how leads move through qualification stages",
    active: true,
    transitions: [
      { from: "New", to: "Contacted", criteria: ["Phone number required", "At least 1 activity logged"], mandatory: true },
      { from: "Contacted", to: "Qualified", criteria: ["Budget confirmed", "Decision maker identified"], mandatory: true },
      { from: "Qualified", to: "Converted", criteria: ["Account created", "Deal created"], mandatory: true },
      { from: "Contacted", to: "Disqualified", criteria: ["Reason required"], mandatory: false },
    ],
  },
  {
    id: 2,
    name: "Deal Pipeline Process",
    module: "Deals",
    field: "Stage",
    description: "Enforce deal progression with required actions at each stage",
    active: true,
    transitions: [
      { from: "Prospecting", to: "Qualification", criteria: ["Contact associated", "Budget range set"], mandatory: true },
      { from: "Qualification", to: "Proposal", criteria: ["Proposal document uploaded", "Amount specified"], mandatory: true },
      { from: "Proposal", to: "Negotiation", criteria: ["Client feedback received"], mandatory: true },
      { from: "Negotiation", to: "Closed Won", criteria: ["Contract signed", "Payment terms agreed"], mandatory: true },
      { from: "Negotiation", to: "Closed Lost", criteria: ["Loss reason required"], mandatory: false },
    ],
  },
];

export default function Blueprint() {
  const [blueprints, setBlueprints] = useState<BlueprintDef[]>(initialBlueprints);
  const [createOpen, setCreateOpen] = useState(false);
  const [selectedBp, setSelectedBp] = useState<BlueprintDef | null>(null);
  const [formData, setFormData] = useState({ name: "", module: "", field: "", description: "" });
  const { toast } = useToast();

  const handleCreate = () => {
    if (!formData.name || !formData.module || !formData.field) {
      toast({ title: "Missing fields", description: "Name, module, and field are required", variant: "destructive" });
      return;
    }
    const newBp: BlueprintDef = {
      id: Date.now(),
      name: formData.name,
      module: formData.module,
      field: formData.field,
      description: formData.description,
      active: true,
      transitions: [],
    };
    setBlueprints((prev) => [...prev, newBp]);
    setFormData({ name: "", module: "", field: "", description: "" });
    setCreateOpen(false);
    toast({ title: "Blueprint created", description: newBp.name });
  };

  const handleDelete = (id: number) => {
    const bp = blueprints.find((b) => b.id === id);
    setBlueprints((prev) => prev.filter((b) => b.id !== id));
    toast({ title: "Blueprint deleted", description: bp?.name });
  };

  return (
    <AppLayout title="Blueprint">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Design process flows that enforce business rules at every stage transition</p>
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" /> New Blueprint</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader><DialogTitle>Create Blueprint</DialogTitle></DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Blueprint Name</Label>
                  <Input placeholder="e.g. Lead Qualification Process" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Module</Label>
                  <Select value={formData.module} onValueChange={(v) => setFormData({ ...formData, module: v })}>
                    <SelectTrigger><SelectValue placeholder="Select module" /></SelectTrigger>
                    <SelectContent>
                      {["Leads", "Contacts", "Accounts", "Deals", "Tasks"].map((m) => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Field</Label>
                  <Input placeholder="e.g. Lead Status, Stage" value={formData.field} onChange={(e) => setFormData({ ...formData, field: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="What does this blueprint enforce?" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
                <Button onClick={handleCreate}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-primary/10 p-2"><Shield className="h-5 w-5 text-primary" /></div><div><p className="text-2xl font-bold text-card-foreground">{blueprints.length}</p><p className="text-xs text-muted-foreground">Total Blueprints</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-success/10 p-2"><CheckCircle2 className="h-5 w-5 text-success" /></div><div><p className="text-2xl font-bold text-card-foreground">{blueprints.filter((b) => b.active).length}</p><p className="text-xs text-muted-foreground">Active</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-accent p-2"><ArrowRight className="h-5 w-5 text-accent-foreground" /></div><div><p className="text-2xl font-bold text-card-foreground">{blueprints.reduce((s, b) => s + b.transitions.length, 0)}</p><p className="text-xs text-muted-foreground">Total Transitions</p></div></CardContent></Card>
        </div>

        {/* Blueprint cards */}
        <div className="space-y-4">
          {blueprints.map((bp) => (
            <Card key={bp.id}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-card-foreground">{bp.name}</h3>
                      <Badge variant="secondary">{bp.module}</Badge>
                      <Badge variant="outline">Field: {bp.field}</Badge>
                      <Badge className={bp.active ? "bg-success/10 text-success border-success/30" : "bg-muted text-muted-foreground"}>{bp.active ? "Active" : "Inactive"}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{bp.description}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => setSelectedBp(selectedBp?.id === bp.id ? null : bp)}>
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(bp.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                {/* Transition flow visualization */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Transitions</p>
                  {bp.transitions.length > 0 ? (
                    <div className="space-y-2">
                      {bp.transitions.map((t, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                          <Badge variant="outline" className="shrink-0">{t.from}</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                          <Badge variant="outline" className="shrink-0">{t.to}</Badge>
                          <div className="flex-1 flex items-center gap-1.5 flex-wrap ml-2">
                            {t.criteria.map((c) => (
                              <Badge key={c} variant="secondary" className="text-xs gap-1">
                                {t.mandatory ? <AlertCircle className="h-3 w-3 text-warning" /> : <CheckCircle2 className="h-3 w-3 text-success" />}
                                {c}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">No transitions defined yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          {blueprints.length === 0 && (
            <Card><CardContent className="p-8 text-center text-muted-foreground">No blueprints yet. Create one to enforce your business processes.</CardContent></Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
