import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
export async function POST(request:Request){try{const supabase=await createClient();await supabase.auth.signOut();}catch{}return NextResponse.redirect(new URL('/login',request.url),303);}
