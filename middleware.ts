import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) return NextResponse.redirect(new URL('/login?setup=required', request.url));
    return NextResponse.next();
  }
  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookies: {
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
      }[]) => {
        cookies.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookies.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  const { data: { user } } = await supabase.auth.getUser();
  const owner = process.env.OWNER_EMAIL?.toLowerCase();
  if (request.nextUrl.pathname.startsWith('/dashboard') && (!user || !owner || user.email?.toLowerCase() !== owner)) {
    const destination = new URL('/login', request.url);
    if (user) await supabase.auth.signOut();
    response = NextResponse.redirect(destination);
  }
  return response;
}

export const config = { matcher: ['/dashboard/:path*'] };
