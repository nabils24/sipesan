
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <Input type="email" label="Email" placeholder="
                Enter your email address" />
              <Input type="password" label="Password" placeholder="Enter your password" />
              <Button type="submit">Login</Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button variant="link">Forgot password?</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
