import { AppLayout } from "@/components/AppLayout";
import { Calendar, Clock, Phone, Mail, Video, MapPin } from "lucide-react";

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
  return (
    <AppLayout title="Activities">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Manage your activities and schedule</p>
          </div>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            + New Activity
          </button>
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
