import { LayoutDashboard, List, User, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Sessions", url: "/sessions", icon: List },
];

const accountItems = [
  { title: "Settings", url: "/settings", icon: User },
];

function LogoMark() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center">
      {/* Ambient glow ring */}
      <div className="absolute inset-0 rounded-xl bg-primary/20 animate-[logo-breathe_4s_ease-in-out_infinite]" />
      {/* Core mark */}
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
        <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const isActive = (url: string) =>
    url === "/" ? location.pathname === "/" : location.pathname.startsWith(url);

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      {/* Sidebar inner background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sidebar-accent/40 via-transparent to-sidebar-accent/20 pointer-events-none" />

      <SidebarHeader className="relative px-4 py-6">
        <div className="flex items-center gap-3">
          <LogoMark />
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-tight text-foreground">
                SpeakXR
              </span>
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground/60">
                AI Training
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="relative">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 px-4">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className="group/nav relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-150 hover:text-foreground hover:bg-sidebar-accent/60"
                        activeClassName="text-sidebar-accent-foreground bg-sidebar-accent/80"
                      >
                        {/* Active indicator bar */}
                        <span
                          className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-primary transition-all duration-200 ${
                            active ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                          }`}
                        />

                        <item.icon
                          className={`h-4 w-4 transition-all duration-150 group-hover/nav:scale-110 ${
                            active ? "text-primary" : "text-muted-foreground group-hover/nav:text-foreground"
                          }`}
                        />
                        {!collapsed && (
                          <span className={`transition-transform duration-150 ${active ? "translate-x-0.5 font-medium" : "group-hover/nav:translate-x-0.5"}`}>
                            {item.title}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 px-4">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className="group/nav relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-150 hover:text-foreground hover:bg-sidebar-accent/60"
                        activeClassName="text-sidebar-accent-foreground bg-sidebar-accent/80"
                      >
                        <span
                          className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-primary transition-all duration-200 ${
                            active ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                          }`}
                        />
                        <item.icon
                          className={`h-4 w-4 transition-all duration-150 group-hover/nav:scale-110 ${
                            active ? "text-primary" : "text-muted-foreground group-hover/nav:text-foreground"
                          }`}
                        />
                        {!collapsed && (
                          <span className={`transition-transform duration-150 ${active ? "translate-x-0.5 font-medium" : "group-hover/nav:translate-x-0.5"}`}>
                            {item.title}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
