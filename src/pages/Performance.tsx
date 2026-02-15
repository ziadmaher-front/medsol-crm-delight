import { AppLayout } from "@/components/AppLayout";
import { StatCard } from "@/components/StatCard";
import { DollarSign, Target, Users, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barData = [
  { rep: "Sarah M.", deals: 12, revenue: 145000 },
  { rep: "James W.", deals: 9, revenue: 98000 },
  { rep: "Emily R.", deals: 15, revenue: 178000 },
  { rep: "John D.", deals: 7, revenue: 67000 },
  { rep: "Lisa P.", deals: 11, revenue: 132000 },
];

const pieData = [
  { name: "Prospecting", value: 20, color: "hsl(210, 80%, 52%)" },
  { name: "Qualification", value: 30, color: "hsl(38, 92%, 50%)" },
  { name: "Proposal", value: 25, color: "hsl(210, 80%, 52%)" },
  { name: "Negotiation", value: 15, color: "hsl(280, 60%, 55%)" },
  { name: "Closed", value: 10, color: "hsl(152, 60%, 45%)" },
];

const topPerformers = [
  { name: "Emily Rodriguez", role: "Senior Sales Rep", deals: 15, revenue: "$178,000", conversion: "34%" },
  { name: "Sarah Miller", role: "Sales Rep", deals: 12, revenue: "$145,000", conversion: "28%" },
  { name: "Lisa Park", role: "Sales Rep", deals: 11, revenue: "$132,000", conversion: "25%" },
  { name: "James Wilson", role: "Junior Sales Rep", deals: 9, revenue: "$98,000", conversion: "22%" },
];

export default function Performance() {
  return (
    <AppLayout title="Performance Overview">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Deals" value="2,845" change="12% vs last quarter" changeType="positive" icon={Target} />
          <StatCard title="Total Revenue" value="$158,430" change="8% vs last quarter" changeType="positive" icon={DollarSign} />
          <StatCard title="Active Reps" value="42" change="3 new this month" changeType="neutral" icon={Users} />
          <StatCard title="Avg Conversion" value="16.8%" change="1.2% improvement" changeType="positive" icon={TrendingUp} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Sales Pipeline */}
          <div className="stat-card">
            <h3 className="mb-4 text-base font-semibold text-card-foreground">Sales Pipeline Visualization</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214, 20%, 92%)" }}
                  formatter={(value: number) => [`${value}%`, "Share"]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              {pieData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-xs text-muted-foreground">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue by Rep */}
          <div className="stat-card">
            <h3 className="mb-4 text-base font-semibold text-card-foreground">Revenue by Representative</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 92%)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" tickFormatter={(v) => `$${v / 1000}k`} />
                <YAxis type="category" dataKey="rep" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" width={60} />
                <Tooltip
                  contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214, 20%, 92%)" }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Bar dataKey="revenue" fill="hsl(210, 80%, 52%)" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performers Table */}
        <div className="stat-card">
          <h3 className="mb-4 text-base font-semibold text-card-foreground">Top Performers</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Name</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Role</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Deals Closed</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Revenue</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Conversion</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {topPerformers.map((p, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {p.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="font-medium text-card-foreground">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-muted-foreground">{p.role}</td>
                    <td className="py-3 font-medium text-card-foreground">{p.deals}</td>
                    <td className="py-3 font-semibold text-card-foreground">{p.revenue}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">{p.conversion}</span>
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
