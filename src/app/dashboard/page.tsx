import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { demoSeed } from '@/lib/seed';
import SeedPanel from './seed-panel';

export default async function Dashboard() {
  let user;
  try { const supabase = await createClient(); const result = await supabase.auth.getUser(); user = result.data.user; }
  catch { redirect('/login?setup=required'); }
  if (!user || user.email?.toLowerCase() !== process.env.OWNER_EMAIL?.toLowerCase()) redirect('/login');
  return <main className="app-shell"><header className="topbar"><div className="logo">P</div><div><strong>프렙 카페</strong><small>마감 관리</small></div><div className="top-actions"><span className="badge">가상 예시 데이터</span><form action="/auth/signout" method="post"><button className="secondary">로그아웃</button></form></div></header>
    <div className="content"><p className="eyebrow">DAILY CLOSE</p><h1>마감 홈</h1><p className="muted">메뉴와 재료 기준자료를 확인합니다. 아래 데이터는 제공 샘플의 가상 예시입니다.</p><div className="notice warn">이 화면은 EPIC 1의 기준자료 확인 화면입니다. 판매·손익·재고 기록 기능은 다음 EPIC에서 구현합니다.</div>
      <SeedPanel expected={{menus:demoSeed.menus.length,materials:demoSeed.materials.length,recipes:demoSeed.recipes.length}} />
    </div></main>;
}
