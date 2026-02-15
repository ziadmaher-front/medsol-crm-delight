import { AppLayout } from "@/components/AppLayout";
import { Shield, MoreHorizontal } from "lucide-react";

const users = [
  { name: "John Doe", email: "john.doe@medsol.com", role: "Admin", status: "Active", lastLogin: "2 hours ago", avatar: "JD" },
  { name: "Sarah Miller", email: "sarah.m@medsol.com", role: "Sales Rep", status: "Active", lastLogin: "5 min ago", avatar: "SM" },
  { name: "James Wilson", email: "james.w@medsol.com", role: "Sales Rep", status: "Active", lastLogin: "1 hour ago", avatar: "JW" },
  { name: "Emily Rodriguez", email: "emily.r@medsol.com", role: "Manager", status: "Active", lastLogin: "30 min ago", avatar: "ER" },
  { name: "Lisa Park", email: "lisa.p@medsol.com", role: "Sales Rep", status: "Inactive", lastLogin: "3 days ago", avatar: "LP" },
];

const roleColors: Record<string, string> = {
  Admin: "bg-destructive/10 text-destructive",
  Manager: "bg-info/10 text-info",
  "Sales Rep": "bg-primary/10 text-primary",
};

const quickRoles = [
  { role: "Create & Edit Leads", admin: true, manager: true, rep: true },
  { role: "Export All Reports", admin: true, manager: true, rep: false },
  { role: "Delete Records", admin: true, manager: false, rep: false },
  { role: "View Account History", admin: true, manager: true, rep: true },
  { role: "Manage Reminders", admin: true, manager: true, rep: true },
];

export default function UserManagement() {
  return (
    <AppLayout title="User Management">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage users, roles and permissions</p>
          <div className="flex gap-2">
            <button className="rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Roles
            </button>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              + New User
            </button>
          </div>
        </div>

        <div className="stat-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">User</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Email</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Role</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Last Login</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((u, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {u.avatar}
                        </div>
                        <span className="font-medium text-card-foreground">{u.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{u.email}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${roleColors[u.role] || "bg-muted text-muted-foreground"}`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        u.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                      }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{u.lastLogin}</td>
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

        {/* Quick Roles Overview */}
        <div className="stat-card">
          <div className="mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="text-base font-semibold text-card-foreground">Quick Roles Overview</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Permission</th>
                  <th className="pb-3 text-center font-medium text-muted-foreground">Admin</th>
                  <th className="pb-3 text-center font-medium text-muted-foreground">Manager</th>
                  <th className="pb-3 text-center font-medium text-muted-foreground">Sales Rep</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {quickRoles.map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 text-card-foreground">{r.role}</td>
                    <td className="py-3 text-center">{r.admin ? <span className="text-success">✓</span> : <span className="text-muted-foreground">✗</span>}</td>
                    <td className="py-3 text-center">{r.manager ? <span className="text-success">✓</span> : <span className="text-muted-foreground">✗</span>}</td>
                    <td className="py-3 text-center">{r.rep ? <span className="text-success">✓</span> : <span className="text-muted-foreground">✗</span>}</td>
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
