import {
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  Target,
  Settings,
  HelpCircle,
  LayoutDashboard,
  UserCog,
  LogOut,
  Building2,
  DollarSign,
  CheckCircle2,
  FileText,
  Contact,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const mainNav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Leads", url: "/leads", icon: Target },
  { title: "Accounts", url: "/accounts", icon: Building2 },
  { title: "Contacts", url: "/contacts", icon: Contact },
  { title: "Deals", url: "/deals", icon: DollarSign },
  { title: "Activities", url: "/activities", icon: Calendar },
  { title: "Tasks", url: "/tasks", icon: CheckCircle2 },
  { title: "RFQs", url: "/rfqs", icon: FileText },
  { title: "Workflow Rules", url: "/workflow", icon: TrendingUp },
  { title: "Blueprint", url: "/blueprint", icon: Target },
  { title: "Reports & Analytics", url: "/reports", icon: BarChart3 },
  { title: "Performance", url: "/performance", icon: TrendingUp },
  { title: "User Management", url: "/users", icon: UserCog },
];

const bottomNav = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help Center", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-60 border-r-0">
      <div className="flex h-14 items-center gap-2 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
          <span className="text-sm font-bold text-sidebar-primary-foreground">M</span>
        </div>
        <span className="text-base font-semibold text-sidebar-accent-foreground">
          Medsol CRM
        </span>
      </div>

      <SidebarContent className="px-3 overflow-hidden">
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-muted text-[11px] uppercase tracking-widest mb-1">
              Main Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="h-9">
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="px-3 pb-4">
        <SidebarMenu>
          {bottomNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="h-9">
                <NavLink
                  to={item.url}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="h-9 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer">
              <LogOut className="h-4 w-4 shrink-0" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="mt-3 flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-xs font-semibold text-sidebar-primary-foreground">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-accent-foreground">
              John Doe
            </span>
            <span className="text-xs text-sidebar-muted">Admin</span>
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] italic text-sidebar-muted">
          We deliver value
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
