import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

function useLatency() {
  const [latency, setLatency] = useState(42);
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(30 + Math.random() * 40));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return latency;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const latency = useLatency();
  const nodeId = "N-7F3A";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-atmosphere">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-4 border-b border-border/80 px-6 shrink-0 backdrop-blur-sm bg-background/80">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
            <div className="flex items-baseline gap-3 flex-1">
              <h1 className="text-sm font-semibold text-foreground tracking-tight">{title}</h1>
              {subtitle && (
                <span className="text-[11px] text-muted-foreground">{subtitle}</span>
              )}
            </div>
            {/* System status strip */}
            <div className="hidden md:flex items-center gap-4 text-[9px] font-mono text-muted-foreground/60 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                SYS.STATUS: ACTIVE
              </span>
              <span>LATENCY: {latency}ms</span>
              <span>NODE: {nodeId}</span>
            </div>
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-auto p-6">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
