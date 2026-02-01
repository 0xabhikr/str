import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          SignUp with google to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          
            <FieldGroup>
              <Field>
                
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          
        </form>
      </CardContent>
    </Card>
  )
}
