import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase 환경 설정이 없습니다.');
  return createServerClient(url, key, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (values: {
        name: string;
        value: string;
        options?: {
          path?: string;
          domain?: string;
          maxAge?: number;
          expires?: Date;
          httpOnly?: boolean;
          secure?: boolean;
          sameSite?: 'strict' | 'lax' | 'none';
        };
      }[]) => values.forEach(({ name, value, options }) => cookieStore.set(name, value, options)),
    },
  });
}
