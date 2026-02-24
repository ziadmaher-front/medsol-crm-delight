import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Play, Pause, Trash2, Edit2, Zap, Clock, Mail, Bell, GitBranch } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface WorkflowRule {
  id: number;
  name: string;
  module: string;
  trigger: string;
  conditions: string;
  actions: string[];
  active: boolean;
  lastTriggered: string;
  executions: number;
}

const initialWorkflows: WorkflowRule[] = [
  {
    id: 1,
    name: "New Lead Assignment",
    module: "Leads",
    trigger: "On Create",
    conditions: "Lead Source = Website",
    actions: ["Assign Owner", "Send Email Notification"],
    active: true,
    lastTriggered: "2 hours ago",
    executions: 234,
  },
  {
    id: 2,
    name: "Deal Stage Update Alert",
    module: "Deals",
    trigger: "On Edit",
    conditions: "Stage changed to Negotiation",
    actions: ["Send Email", "Create Task"],
    active: true,
    lastTriggered: "5 hours ago",
    executions: 89,
  },
  {
    id: 3,
    name: "Overdue Task Reminder",
    module: "Tasks",
    trigger: "Scheduled",
    conditions: "Due Date < Today & Status != Completed",
    actions: ["Send Reminder Email"],
    active: false,
    lastTriggered: "1 day ago",
    executions: 456,
  },
  {
    id: 4,
    name: "Account Inactivity Follow-up",
    module: "Accounts",
    trigger: "Scheduled",
    conditions: "No Activity > 30 days",
    actions: ["Create Task", "Send Alert"],
    active: true,
    lastTriggered: "12 hours ago",
    executions: 67,
  },
];

export default function Workflow() {
  const [workflows, setWorkflows] = useState<WorkflowRule[]>(initialWorkflows);
  const [createOpen, setCreateOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", module: "", trigger: "", conditions: "", actions: "" });
  const { toast } = useToast();

  const handleToggle = (id: number) => {
    setWorkflows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const updated = { ...w, active: !w.active };
          toast({ title: `Workflow ${updated.active ? "activated" : "deactivated"}`, description: w.name });
          return updated;
        }
        return w;
      })
    );
  };

  const handleDelete = (id: number) => {
    const wf = workflows.find((w) => w.id === id);
    setWorkflows((prev) => prev.filter((w) => w.id !== id));
    toast({ title: "Workflow deleted", description: wf?.name });
  };

  const handleCreate = () => {
    if (!formData.name || !formData.module) {
      toast({ title: "Missing fields", description: "Name and module are required", variant: "destructive" });
      return;
    }
    const newWf: WorkflowRule = {
      id: Date.now(),
      name: formData.name,
      module: formData.module,
      trigger: formData.trigger || "On Create",
      conditions: formData.conditions || "None",
      actions: formData.actions ? formData.actions.split(",").map((a) => a.trim()) : ["Send Notification"],
      active: true,
      lastTriggered: "Never",
      executions: 0,
    };
    setWorkflows((prev) => [...prev, newWf]);
    setFormData({ name: "", module: "", trigger: "", conditions: "", actions: "" });
    setCreateOpen(false);
    toast({ title: "Workflow created", description: newWf.name });
  };

  const handleEdit = (wf: WorkflowRule) => {
    setEditingId(wf.id);
    setFormData({ name: wf.name, module: wf.module, trigger: wf.trigger, conditions: wf.conditions, actions: wf.actions.join(", ") });
    setCreateOpen(true);
  };

  const handleUpdate = () => {
    if (!editingId) return;
    setWorkflows((prev) =>
      prev.map((w) =>
        w.id === editingId
          ? { ...w, name: formData.name, module: formData.module, trigger: formData.trigger, conditions: formData.conditions, actions: formData.actions.split(",").map((a) => a.trim()) }
          : w
      )
    );
    setEditingId(null);
    setFormData({ name: "", module: "", trigger: "", conditions: "", actions: "" });
    setCreateOpen(false);
    toast({ title: "Workflow updated" });
  };

  const actionIcons: Record<string, React.ReactNode> = {
    "Send Email": <Mail className="h-3 w-3" />,
    "Send Email Notification": <Mail className="h-3 w-3" />,
    "Send Reminder Email": <Mail className="h-3 w-3" />,
    "Assign Owner": <Zap className="h-3 w-3" />,
    "Create Task": <Clock className="h-3 w-3" />,
    "Send Alert": <Bell className="h-3 w-3" />,
    "Send Notification": <Bell className="h-3 w-3" />,
  };

  return (
    <AppLayout title="Workflow Rules">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Automate actions based on triggers and conditions</p>
          <Dialog open={createOpen} onOpenChange={(open) => { setCreateOpen(open); if (!open) { setEditingId(null); setFormData({ name: "", module: "", trigger: "", conditions: "", actions: "" }); } }}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" /> New Workflow</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Workflow" : "Create Workflow Rule"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Rule Name</Label>
                  <Input placeholder="e.g. New Lead Assignment" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Module</Label>
                  <Select value={formData.module} onValueChange={(v) => setFormData({ ...formData, module: v })}>
                    <SelectTrigger><SelectValue placeholder="Select module" /></SelectTrigger>
                    <SelectContent>
                      {["Leads", "Contacts", "Accounts", "Deals", "Tasks", "Activities", "RFQs"].map((m) => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Trigger</Label>
                  <Select value={formData.trigger} onValueChange={(v) => setFormData({ ...formData, trigger: v })}>
                    <SelectTrigger><SelectValue placeholder="Select trigger" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="On Create">On Create</SelectItem>
                      <SelectItem value="On Edit">On Edit</SelectItem>
                      <SelectItem value="On Delete">On Delete</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Conditions</Label>
                  <Textarea placeholder="e.g. Lead Source = Website" value={formData.conditions} onChange={(e) => setFormData({ ...formData, conditions: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Actions (comma-separated)</Label>
                  <Input placeholder="e.g. Send Email, Create Task" value={formData.actions} onChange={(e) => setFormData({ ...formData, actions: e.target.value })} />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setCreateOpen(false); setEditingId(null); }}>Cancel</Button>
                <Button onClick={editingId ? handleUpdate : handleCreate}>{editingId ? "Update" : "Create"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-primary/10 p-2"><Zap className="h-5 w-5 text-primary" /></div><div><p className="text-2xl font-bold text-card-foreground">{workflows.length}</p><p className="text-xs text-muted-foreground">Total Rules</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-success/10 p-2"><Play className="h-5 w-5 text-success" /></div><div><p className="text-2xl font-bold text-card-foreground">{workflows.filter((w) => w.active).length}</p><p className="text-xs text-muted-foreground">Active</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-warning/10 p-2"><Pause className="h-5 w-5 text-warning" /></div><div><p className="text-2xl font-bold text-card-foreground">{workflows.filter((w) => !w.active).length}</p><p className="text-xs text-muted-foreground">Inactive</p></div></CardContent></Card>
          <Card><CardContent className="p-4 flex items-center gap-3"><div className="rounded-lg bg-accent p-2"><GitBranch className="h-5 w-5 text-accent-foreground" /></div><div><p className="text-2xl font-bold text-card-foreground">{workflows.reduce((s, w) => s + w.executions, 0)}</p><p className="text-xs text-muted-foreground">Total Executions</p></div></CardContent></Card>
        </div>

        {/* Workflow list */}
        <div className="space-y-3">
          {workflows.map((wf) => (
            <Card key={wf.id} className={`transition-opacity ${!wf.active ? "opacity-60" : ""}`}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4 flex-1">
                  <Switch checked={wf.active} onCheckedChange={() => handleToggle(wf.id)} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-card-foreground">{wf.name}</p>
                      <Badge variant="secondary" className="text-xs">{wf.module}</Badge>
                      <Badge variant="outline" className="text-xs">{wf.trigger}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Condition: {wf.conditions}</p>
                    <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                      {wf.actions.map((a) => (
                        <Badge key={a} variant="secondary" className="text-xs gap-1">
                          {actionIcons[a] || <Zap className="h-3 w-3" />} {a}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-4 shrink-0">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Last: {wf.lastTriggered}</p>
                    <p className="text-xs text-muted-foreground">{wf.executions} runs</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(wf)}><Edit2 className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(wf.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {workflows.length === 0 && (
            <Card><CardContent className="p-8 text-center text-muted-foreground">No workflow rules yet. Create one to get started.</CardContent></Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
