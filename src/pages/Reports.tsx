import { AppLayout } from "@/components/AppLayout";
import { StatCard } from "@/components/StatCard";
import { BarChart3, FileText, PieChart, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const trendData = [
  { month: "Jan", leads: 120, conversions: 42, revenue: 32 },
  { month: "Feb", leads: 145, conversions: 58, revenue: 38 },
  { month: "Mar", leads: 130, conversions: 48, revenue: 35 },
  { month: "Apr", leads: 165, conversions: 62, revenue: 45 },
  { month: "May", leads: 155, conversions: 55, revenue: 42 },
  { month: "Jun", leads: 190, conversions: 72, revenue: 52 },
  { month: "Jul", leads: 175, conversions: 65, revenue: 48 },
  { month: "Aug", leads: 210, conversions: 82, revenue: 58 },
];

const reports = [
  { title: "Monthly Sales Report", type: "Sales", date: "Feb 10, 2026", status: "Ready" },
  { title: "Q4 Pipeline Analysis", type: "Pipeline", date: "Feb 8, 2026", status: "Ready" },
  { title: "Lead Source Performance", type: "Marketing", date: "Feb 5, 2026", status: "Processing" },
  { title: "Team Performance Summary", type: "HR", date: "Feb 1, 2026", status: "Ready" },
  { title: "Customer Retention Report", type: "Customer", date: "Jan 28, 2026", status: "Ready" },
];

export default function Reports() {
  return (
    <AppLayout title="Reports & Analytics">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Reports Generated" value="24" change="6 this week" changeType="positive" icon={FileText} />
          <StatCard title="High Value Insights" value="12" change="3 new" changeType="positive" icon={TrendingUp} />
          <StatCard title="Data Sources" value="8" change="All connected" changeType="neutral" icon={PieChart} />
          <StatCard title="Avg Analysis Time" value="2.4s" change="0.3s faster" changeType="positive" icon={BarChart3} />
        </div>

        <div className="stat-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-card-foreground">Trends Overview</h3>
            <select className="rounded-lg border bg-card px-3 py-1.5 text-sm text-card-foreground">
              <option>Last 8 months</option>
              <option>Last 12 months</option>
              <option>This year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 92%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214, 20%, 92%)" }} />
              <Legend />
              <Line type="monotone" dataKey="leads" stroke="hsl(210, 80%, 52%)" strokeWidth={2} dot={{ r: 3 }} name="Leads" />
              <Line type="monotone" dataKey="conversions" stroke="hsl(168, 80%, 36%)" strokeWidth={2} dot={{ r: 3 }} name="Conversions" />
              <Line type="monotone" dataKey="revenue" stroke="hsl(38, 92%, 50%)" strokeWidth={2} dot={{ r: 3 }} name="Revenue ($k)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="stat-card">
          <h3 className="mb-4 text-base font-semibold text-card-foreground">Available Reports</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Report Name</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Type</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Generated</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reports.map((r, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3 font-medium text-card-foreground">{r.title}</td>
                    <td className="py-3 text-muted-foreground">{r.type}</td>
                    <td className="py-3 text-muted-foreground">{r.date}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        r.status === "Ready" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-sm font-medium text-primary hover:underline">Download</button>
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
