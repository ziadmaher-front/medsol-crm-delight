import { AppLayout } from "@/components/AppLayout";
import { MoreHorizontal, Plus } from "lucide-react";

interface Lead {
  id: number;
  name: string;
  company: string;
  value: string;
  probability: number;
  avatar: string;
}

const stages: { title: string; color: string; leads: Lead[] }[] = [
  {
    title: "Prospecting",
    color: "bg-info",
    leads: [
      { id: 1, name: "Dr. Mark Thompson", company: "Thompson Clinic", value: "$8,500", probability: 20, avatar: "MT" },
      { id: 2, name: "Lisa Park", company: "Park Medical Group", value: "$12,000", probability: 15, avatar: "LP" },
    ],
  },
  {
    title: "Qualification",
    color: "bg-warning",
    leads: [
      { id: 3, name: "Dr. Sarah Miller", company: "Metro Hospital", value: "$45,000", probability: 40, avatar: "SM" },
      { id: 4, name: "Robert Chen", company: "City Health Clinic", value: "$23,000", probability: 35, avatar: "RC" },
      { id: 5, name: "Dr. Anna Lee", company: "Lee Dermatology", value: "$6,800", probability: 45, avatar: "AL" },
    ],
  },
  {
    title: "Proposal",
    color: "bg-primary",
    leads: [
      { id: 6, name: "James Wilson", company: "Wilson Health", value: "$15,800", probability: 60, avatar: "JW" },
      { id: 7, name: "Dr. Emily Davis", company: "Regional Medical", value: "$38,000", probability: 70, avatar: "ED" },
    ],
  },
  {
    title: "Negotiation",
    color: "bg-chart-quaternary",
    leads: [
      { id: 8, name: "Michael Brown", company: "Brown & Associates", value: "$28,500", probability: 80, avatar: "MB" },
    ],
  },
  {
    title: "Closed Won",
    color: "bg-success",
    leads: [
      { id: 9, name: "Dr. Karen White", company: "White Medical Center", value: "$52,000", probability: 100, avatar: "KW" },
      { id: 10, name: "Tom Harris", company: "Harris Health Systems", value: "$34,000", probability: 100, avatar: "TH" },
    ],
  },
];

export default function Pipeline() {
  return (
    <AppLayout title="Lead Pipeline">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Visualize and manage your sales pipeline</p>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            + New Lead
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => (
            <div key={stage.title} className="flex w-72 shrink-0 flex-col rounded-xl border bg-card">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${stage.color}`} />
                  <h3 className="text-sm font-semibold text-card-foreground">{stage.title}</h3>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {stage.leads.length}
                  </span>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col gap-3 p-3">
                {stage.leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-lg border bg-card p-3 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {lead.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-card-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.company}</p>
                        </div>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-card-foreground">{lead.value}</span>
                      <span className="text-xs text-muted-foreground">{lead.probability}%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                      <div
                        className={`h-1.5 rounded-full ${stage.color}`}
                        style={{ width: `${lead.probability}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
