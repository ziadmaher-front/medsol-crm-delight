import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Calendar, Clock, Phone, Mail, Video, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const stats = [
  { label: "Total Activities", value: "34", sub: "This week" },
  { label: "Calls Made", value: "18", sub: "+5 today" },
  { label: "Emails Sent", value: "42", sub: "This week" },
  { label: "Meetings", value: "8", sub: "Scheduled" },
];

const activities = [
  { id: 1, type: "call", icon: Phone, title: "Call with Dr. Sarah Miller", time: "10:00 AM", date: "Today", duration: "30 min", status: "Completed" },
  { id: 2, type: "email", icon: Mail, title: "Send proposal to Metro Hospital", time: "11:30 AM", date: "Today", duration: "-", status: "Pending" },
  { id: 3, type: "meeting", icon: Video, title: "Product demo - City Health Clinic", time: "2:00 PM", date: "Today", duration: "1 hour", status: "Upcoming" },
  { id: 4, type: "visit", icon: MapPin, title: "Site visit - Regional Medical Center", time: "9:00 AM", date: "Tomorrow", duration: "2 hours", status: "Scheduled" },
  { id: 5, type: "call", icon: Phone, title: "Follow-up call with Dr. James Wilson", time: "3:00 PM", date: "Tomorrow", duration: "15 min", status: "Scheduled" },
  { id: 6, type: "meeting", icon: Video, title: "Quarterly review meeting", time: "10:00 AM", date: "Feb 18", duration: "1.5 hours", status: "Scheduled" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Upcoming: "bg-info/10 text-info",
  Scheduled: "bg-primary/10 text-primary",
};

const typeColors: Record<string, string> = {
  call: "bg-info/10 text-info",
  email: "bg-warning/10 text-warning",
  meeting: "bg-primary/10 text-primary",
  visit: "bg-success/10 text-success",
};

export default function Activities() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="Activities">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Manage your activities and schedule</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                + New Activity
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Activity</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Activity Type *</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Select type</option>
                      <option value="Call">Call</option>
                      <option value="Email">Email</option>
                      <option value="Meeting">Meeting</option>
                      <option value="Visit">Visit</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Status *</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Select status</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Subject *</Label>
                  <Input placeholder="Activity subject" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Meeting Date & Time *</Label>
                    <Input type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration *</Label>
                    <Input type="datetime-local" placeholder="End time" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Outcome</Label>
                  <Input placeholder="Outcome (optional)" />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Description" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Lead ID</Label>
                    <Input placeholder="Lead UUID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Contact ID</Label>
                    <Input placeholder="Contact UUID" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Deal ID</Label>
                    <Input placeholder="Deal UUID" />
                  </div>
                  <div className="space-y-2">
                    <Label>Account ID</Label>
                    <Input placeholder="Account UUID" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button onClick={() => setOpen(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">Cancel</button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Create Activity</button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-bold text-card-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="stat-card">
          <h3 className="mb-4 text-base font-semibold text-card-foreground">Schedule</h3>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/30"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${typeColors[activity.type]}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground">{activity.title}</p>
                  <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {activity.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {activity.time}
                    </span>
                    <span>{activity.duration}</span>
                  </div>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[activity.status]}`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
