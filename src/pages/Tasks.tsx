import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { MoreHorizontal, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const demoTasks = [
  { id: "1", subject: "Follow up with Metro Hospital", owner: "Sarah Miller", dueDate: "2026-02-25", priority: "High", status: "in progress", description: "Review contract terms and finalize" },
  { id: "2", subject: "Prepare proposal for City Clinic", owner: "James Wilson", dueDate: "2026-02-28", priority: "Medium", status: "not started", description: "Draft initial proposal document" },
  { id: "3", subject: "Schedule demo for Dr. Chen", owner: "Emily Rodriguez", dueDate: "2026-03-01", priority: "High", status: "not started", description: "Set up product demo meeting" },
  { id: "4", subject: "Update pricing sheet", owner: "John Doe", dueDate: "2026-03-05", priority: "Low", status: "deferred", description: "Revise Q2 pricing" },
  { id: "5", subject: "Send invoice to White Medical", owner: "Sarah Miller", dueDate: "2026-02-20", priority: "Urgent", status: "completed", description: "Final invoice for DermaScan" },
];

const priorityColors: Record<string, string> = {
  Low: "bg-muted text-muted-foreground",
  Medium: "bg-warning/10 text-warning",
  High: "bg-destructive/10 text-destructive",
  Urgent: "bg-destructive text-destructive-foreground",
};

const statusColors: Record<string, string> = {
  "not started": "bg-muted text-muted-foreground",
  deferred: "bg-warning/10 text-warning",
  "in progress": "bg-primary/10 text-primary",
  completed: "bg-success/10 text-success",
};

export default function Tasks() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="Tasks">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage and track your tasks</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                + New Task
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label>Subject *</Label>
                  <Input placeholder="Task subject" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Owner ID *</Label>
                    <Input placeholder="Owner UUID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Due Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Priority</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Select priority</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="not started">Not Started</option>
                      <option value="deferred">Deferred</option>
                      <option value="in progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Task description" />
                </div>
                <div className="space-y-2">
                  <Label>Notes</Label>
                  <Textarea placeholder="Additional notes" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>RFQ ID</Label>
                    <Input placeholder="RFQ UUID (optional)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Currency</Label>
                    <Input placeholder="USD" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Links (comma-separated)</Label>
                  <Input placeholder="https://link1.com, https://link2.com" />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">Cancel</button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Create Task</button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="stat-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Task</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Owner</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Due Date</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Priority</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {demoTasks.map((t) => (
                  <tr key={t.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium text-card-foreground">{t.subject}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{t.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{t.owner}</td>
                    <td className="px-5 py-3 text-muted-foreground">{t.dueDate}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${priorityColors[t.priority]}`}>
                        {t.priority}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[t.status]}`}>
                        {t.status}
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
