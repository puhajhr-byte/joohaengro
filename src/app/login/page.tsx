import LoginForm from './login-form';
export default function LoginPage() {
  const configured=Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL&&process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY&&process.env.OWNER_EMAIL);
  return <LoginForm configured={configured}/>;
}
