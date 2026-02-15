import { AppLayout } from "@/components/AppLayout";
import { Mail, Phone, MoreHorizontal } from "lucide-react";

const contacts = [
  { name: "Dr. Sarah Miller", email: "sarah.miller@metrohospital.com", phone: "+1 555-0123", company: "Metro Hospital", role: "Chief of Surgery", status: "Active", avatar: "SM" },
  { name: "James Wilson", email: "j.wilson@wilsonhealth.com", phone: "+1 555-0456", company: "Wilson Health", role: "Practice Manager", status: "Active", avatar: "JW" },
  { name: "Dr. Emily Chen", email: "emily.chen@cityclinic.com", phone: "+1 555-0789", company: "City Health Clinic", role: "Director", status: "Inactive", avatar: "EC" },
  { name: "Robert Brown", email: "r.brown@brownassoc.com", phone: "+1 555-0321", company: "Brown & Associates", role: "CEO", status: "Active", avatar: "RB" },
  { name: "Dr. Karen White", email: "k.white@whitemedical.com", phone: "+1 555-0654", company: "White Medical Center", role: "Head Physician", status: "Active", avatar: "KW" },
  { name: "Tom Harris", email: "t.harris@harrishealth.com", phone: "+1 555-0987", company: "Harris Health Systems", role: "CTO", status: "Active", avatar: "TH" },
];

export default function Contacts() {
  return (
    <AppLayout title="Contacts">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Manage your contacts and relationships</p>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            + Add Contact
          </button>
        </div>

        <div className="stat-card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Contact</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Company</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Role</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Email</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Phone</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-left font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {contacts.map((c, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {c.avatar}
                        </div>
                        <span className="font-medium text-card-foreground">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{c.company}</td>
                    <td className="px-5 py-3 text-muted-foreground">{c.role}</td>
                    <td className="px-5 py-3">
                      <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-primary hover:underline">
                        <Mail className="h-3.5 w-3.5" /> {c.email}
                      </a>
                    </td>
                    <td className="px-5 py-3">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" /> {c.phone}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        c.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                      }`}>
                        {c.status}
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
