import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, Globe, Palette } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [profile, setProfile] = useState({ firstName: "John", lastName: "Doe", email: "john.doe@medsol.com", phone: "+1 555-0123" });
  const [notifications, setNotifications] = useState({ email: true, push: true, deals: true, leads: true, tasks: false, weekly: true });
  const [preferences, setPreferences] = useState({ language: "en", timezone: "UTC", dateFormat: "MM/DD/YYYY", currency: "USD" });

  const handleSaveProfile = () => toast({ title: "Profile updated", description: "Your profile has been saved." });
  const handleSaveNotifications = () => toast({ title: "Notification preferences saved" });
  const handleSavePreferences = () => toast({ title: "Preferences saved" });

  return (
    <AppLayout title="Settings">
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4" /> Profile</TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2"><Bell className="h-4 w-4" /> Notifications</TabsTrigger>
          <TabsTrigger value="preferences" className="gap-2"><Globe className="h-4 w-4" /> Preferences</TabsTrigger>
          <TabsTrigger value="security" className="gap-2"><Shield className="h-4 w-4" /> Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader><CardTitle>Profile Information</CardTitle><CardDescription>Update your personal details</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>First Name</Label><Input value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} /></div>
                <div className="space-y-2"><Label>Last Name</Label><Input value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} /></div>
              </div>
              <div className="space-y-2"><Label>Email</Label><Input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} /></div>
              <div className="space-y-2"><Label>Phone</Label><Input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} /></div>
              <Separator />
              <Button onClick={handleSaveProfile}>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader><CardTitle>Notification Preferences</CardTitle><CardDescription>Choose how you want to be notified</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              {[
                { key: "email" as const, label: "Email Notifications", desc: "Receive updates via email" },
                { key: "push" as const, label: "Push Notifications", desc: "Browser push notifications" },
                { key: "deals" as const, label: "Deal Updates", desc: "Notify on deal stage changes" },
                { key: "leads" as const, label: "New Lead Alerts", desc: "Alert when new leads arrive" },
                { key: "tasks" as const, label: "Task Reminders", desc: "Remind before task deadlines" },
                { key: "weekly" as const, label: "Weekly Summary", desc: "Weekly performance digest" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between rounded-lg border p-4">
                  <div><p className="font-medium text-card-foreground">{item.label}</p><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  <Switch checked={notifications[item.key]} onCheckedChange={(v) => setNotifications({ ...notifications, [item.key]: v })} />
                </div>
              ))}
              <Separator />
              <Button onClick={handleSaveNotifications}>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader><CardTitle>General Preferences</CardTitle><CardDescription>Customize your experience</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Language</Label>
                  <Select value={preferences.language} onValueChange={(v) => setPreferences({ ...preferences, language: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="en">English</SelectItem><SelectItem value="ar">Arabic</SelectItem><SelectItem value="fr">French</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Timezone</Label>
                  <Select value={preferences.timezone} onValueChange={(v) => setPreferences({ ...preferences, timezone: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="UTC">UTC</SelectItem><SelectItem value="EST">EST</SelectItem><SelectItem value="PST">PST</SelectItem><SelectItem value="GST">GST (Dubai)</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Date Format</Label>
                  <Select value={preferences.dateFormat} onValueChange={(v) => setPreferences({ ...preferences, dateFormat: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem><SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem><SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Currency</Label>
                  <Select value={preferences.currency} onValueChange={(v) => setPreferences({ ...preferences, currency: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="USD">USD ($)</SelectItem><SelectItem value="AED">AED (د.إ)</SelectItem><SelectItem value="EGP">EGP (E£)</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <Separator />
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader><CardTitle>Security</CardTitle><CardDescription>Manage your password and security settings</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Current Password</Label><Input type="password" placeholder="Enter current password" /></div>
              <div className="space-y-2"><Label>New Password</Label><Input type="password" placeholder="Enter new password" /></div>
              <div className="space-y-2"><Label>Confirm Password</Label><Input type="password" placeholder="Confirm new password" /></div>
              <Separator />
              <Button onClick={() => toast({ title: "Password updated" })}>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
