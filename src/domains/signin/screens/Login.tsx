import { SigninLayout } from "domains/signin/containers/SigninLayout";
import { LoginForm } from "domains/signin/components/LoginForm";

export function Login(){
  return (
    <SigninLayout>
      <LoginForm  />
    </SigninLayout>
  );
}