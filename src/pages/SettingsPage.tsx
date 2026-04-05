import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <DashboardLayout title="Settings" subtitle="Account preferences">
      <div className="max-w-2xl space-y-8">
        {/* Profile section */}
        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Profile</h2>
          <div className="rounded-lg border border-border bg-card p-5 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">First Name</Label>
                <Input defaultValue="Alex" className="h-9 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Last Name</Label>
                <Input defaultValue="Chen" className="h-9 text-sm" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Email</Label>
              <Input defaultValue="alex.chen@company.com" className="h-9 text-sm" disabled />
            </div>
          </div>
        </section>

        {/* Training preferences */}
        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Training Preferences</h2>
          <div className="rounded-lg border border-border bg-card p-5 space-y-5">
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Default Mode</Label>
              <Select defaultValue="presentation">
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presentation">Presentation</SelectItem>
                  <SelectItem value="q&a">Q&A</SelectItem>
                  <SelectItem value="debate">Debate</SelectItem>
                  <SelectItem value="pitch">Pitch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Default Audience Aggressiveness</Label>
              <Select defaultValue="medium">
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Notifications</h2>
          <div className="rounded-lg border border-border bg-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Session summaries</p>
                <p className="text-xs text-muted-foreground">Receive email after each session</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Weekly reports</p>
                <p className="text-xs text-muted-foreground">Performance digest every Monday</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Product updates</p>
                <p className="text-xs text-muted-foreground">New features and improvements</p>
              </div>
              <Switch />
            </div>
          </div>
        </section>

        <Button variant="default" size="sm" className="text-xs">
          Save changes
        </Button>
      </div>
    </DashboardLayout>
  );
}
