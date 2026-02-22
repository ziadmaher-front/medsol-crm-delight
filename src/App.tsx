import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Activities from "./pages/Activities";
import Pipeline from "./pages/Pipeline";
import Performance from "./pages/Performance";
import Contacts from "./pages/Contacts";
import UserManagement from "./pages/UserManagement";
import Leads from "./pages/Leads";
import Accounts from "./pages/Accounts";
import Deals from "./pages/Deals";
import Tasks from "./pages/Tasks";
import RFQs from "./pages/RFQs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/rfqs" element={<RFQs />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
