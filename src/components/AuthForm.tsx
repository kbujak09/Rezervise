import {useState} from "react";
import { useNavigate, useRouter } from "@tanstack/react-router";

import Input from "./Input.tsx";
import { useAuth } from "../hooks/useAuth.ts";

export default function AuthForm() {
  const navigate = useNavigate();
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email || !password) return;

    const result = await login(email, password);

    if (result.success) {
      console.log('Sukces!');
      await router.invalidate();
      await navigate({ to: '/panel/kalendarz' });
    }
  }

  return (
    <div className='w-full max-w-120 bg-white sm:p-15 sm:shadow-[0_0_16px_rgba(0,0,0,0.15)] sm:border sm:border-[#eaeaea] sm:rounded-sm'>
      <h2 className='text-center mb-14 text-xl sm:text-l text-slate-900'>
        Zaloguj się do panelu zarządzania
      </h2>
      <form className='grid gap-10' onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label='Hasło'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-slate-900 text-white! mt-4 py-3 px-10 rounded-[5px] mx-5 text-[1.125rem] cursor-pointer'>
          Zaloguj
        </button>
      </form>
    </div>
  )
}