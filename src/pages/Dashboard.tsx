import { AppLayout } from "@/components/AppLayout";
import { StatCard } from "@/components/StatCard";
import { Users, DollarSign, Target, TrendingUp, ArrowUpRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", revenue: 32000, leads: 120 },
  { month: "Feb", revenue: 38000, leads: 145 },
  { month: "Mar", revenue: 35000, leads: 130 },
  { month: "Apr", revenue: 45000, leads: 165 },
  { month: "May", revenue: 42000, leads: 155 },
  { month: "Jun", revenue: 52000, leads: 190 },
  { month: "Jul", revenue: 48000, leads: 175 },
  { month: "Aug", revenue: 58000, leads: 210 },
];

const recentActivities = [
  { id: 1, name: "Dr. Sarah Miller", action: "New deal created", amount: "$12,500", time: "2 min ago", status: "new" },
  { id: 2, name: "Metro Hospital", action: "Contract signed", amount: "$45,000", time: "15 min ago", status: "completed" },
  { id: 3, name: "Dr. James Wilson", action: "Follow-up scheduled", amount: "$8,200", time: "1 hour ago", status: "pending" },
  { id: 4, name: "City Health Clinic", action: "Proposal sent", amount: "$23,000", time: "2 hours ago", status: "in-progress" },
  { id: 5, name: "Dr. Emily Chen", action: "Meeting completed", amount: "$15,800", time: "3 hours ago", status: "completed" },
];

const statusStyles: Record<string, string> = {
  new: "bg-info/10 text-info",
  completed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  "in-progress": "bg-primary/10 text-primary",
};

export default function Dashboard() {
  return (
    <AppLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$584,382"
            change="12.5% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatCard
            title="Active Leads"
            value="2,845"
            change="8.2% from last month"
            changeType="positive"
            icon={Target}
          />
          <StatCard
            title="Total Contacts"
            value="12,462"
            change="3.1% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatCard
            title="Conversion Rate"
            value="16.8%"
            change="2.4% from last month"
            changeType="negative"
            icon={TrendingUp}
          />
        </div>

        {/* Chart + Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Revenue Chart */}
          <div className="stat-card lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-card-foreground">Revenue Overview</h3>
                <p className="text-sm text-muted-foreground">Monthly revenue trends</p>
              </div>
              <div className="flex gap-1.5">
                {["6M", "1Y", "All"].map((period) => (
                  <button
                    key={period}
                    className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                      period === "1Y"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(168, 80%, 36%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(168, 80%, 36%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 92%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(214, 20%, 92%)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(168, 80%, 36%)"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="stat-card">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-card-foreground">Recent Activity</h3>
              <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                View All <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-card-foreground">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p className="text-sm font-semibold text-card-foreground">{activity.amount}</p>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[activity.status]}`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="stat-card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-card-foreground">Upcoming Tasks</h3>
            <button className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              + Add Task
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Task</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Assigned To</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Due Date</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Priority</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { task: "Follow up with Metro Hospital", assignee: "Sarah M.", due: "Feb 18, 2026", priority: "High", status: "In Progress" },
                  { task: "Prepare proposal for City Clinic", assignee: "James W.", due: "Feb 20, 2026", priority: "Medium", status: "Pending" },
                  { task: "Schedule demo for Dr. Chen", assignee: "Emily R.", due: "Feb 22, 2026", priority: "High", status: "Not Started" },
                  { task: "Review contract terms", assignee: "John D.", due: "Feb 25, 2026", priority: "Low", status: "In Progress" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3 font-medium text-card-foreground">{row.task}</td>
                    <td className="py-3 text-muted-foreground">{row.assignee}</td>
                    <td className="py-3 text-muted-foreground">{row.due}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        row.priority === "High" ? "bg-destructive/10 text-destructive" :
                        row.priority === "Medium" ? "bg-warning/10 text-warning" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        row.status === "In Progress" ? "bg-primary/10 text-primary" :
                        row.status === "Pending" ? "bg-warning/10 text-warning" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {row.status}
                      </span>
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
