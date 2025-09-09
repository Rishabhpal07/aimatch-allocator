import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Shield, Bell, Database, Users } from "lucide-react";

const Settings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">System Settings</h1>
        <p className="text-muted-foreground">
          Configure system parameters, algorithm weights, and administrative settings
        </p>
      </div>

      <div className="grid gap-6">
        {/* Algorithm Configuration */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SettingsIcon className="h-5 w-5 mr-2 text-primary" />
              Algorithm Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="skills-weight">Skills Matching Weight (%)</Label>
                <Input id="skills-weight" type="number" defaultValue="35" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location-weight">Location Preference Weight (%)</Label>
                <Input id="location-weight" type="number" defaultValue="20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry-weight">Industry Interest Weight (%)</Label>
                <Input id="industry-weight" type="number" defaultValue="25" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="affirmative-weight">Affirmative Action Weight (%)</Label>
                <Input id="affirmative-weight" type="number" defaultValue="20" />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Bias Detection</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically detect and mitigate algorithmic bias
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Learning</Label>
                  <p className="text-sm text-muted-foreground">
                    Continuously improve from successful placements
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <Button className="w-full md:w-auto">Save Algorithm Settings</Button>
          </CardContent>
        </Card>

        {/* Security & Privacy */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Encryption</Label>
                  <p className="text-sm text-muted-foreground">
                    Encrypt all student and company data
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">
                    Log all system activities for compliance
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require 2FA for admin access
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <Button className="w-full md:w-auto">Update Security Settings</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-primary" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Algorithm Completion Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Notify when matching algorithms complete
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Student Registrations</Label>
                  <p className="text-sm text-muted-foreground">
                    Alert when new students register
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Company Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Notify about company profile changes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <Button className="w-full md:w-auto">Save Notification Settings</Button>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              System Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">System Version</Label>
                <p className="text-sm text-muted-foreground">v2.1.3</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Last Algorithm Update</Label>
                <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Database Status</Label>
                <p className="text-sm text-secondary font-medium">Healthy</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Total Students</Label>
                <p className="text-sm text-muted-foreground">2,847</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Active Companies</Label>
                <p className="text-sm text-muted-foreground">189</p>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Uptime</Label>
                <p className="text-sm text-muted-foreground">99.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;