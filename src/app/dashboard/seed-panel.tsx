'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/browser';
import { demoSeed } from '@/lib/seed';

type Counts={menus:number;materials:number;recipes:number};
export default function SeedPanel({expected}:{expected:Counts}) {
  const [counts,setCounts]=useState<Counts|null>(null); const [status,setStatus]=useState('기준자료를 확인하고 있습니다.');
  useEffect(()=>{void load();},[]);
  async function load(){
    try {
      const supabase=createClient(); const {data:{user}}=await supabase.auth.getUser();
      if(!user) throw new Error('로그인이 필요합니다.');
      const tables=['demo_menus','demo_materials','demo_recipes'] as const;
      const checks=await Promise.all(tables.map(table=>supabase.from(table).select('id',{count:'exact',head:true})));
      if(checks.some(x=>x.error)) throw new Error('데이터베이스 표가 준비되지 않았습니다. 마이그레이션 적용이 필요합니다.');
      const existing={menus:checks[0].count||0,materials:checks[1].count||0,recipes:checks[2].count||0};
      if(existing.menus===0&&existing.materials===0&&existing.recipes===0){
        const owner_id=user.id;
        const [m,ing,r]=await Promise.all([
          supabase.from('demo_menus').upsert(demoSeed.menus.map(x=>({owner_id,menu_id:x.menu_id,name:x.name,price:x.price,category:x.category,recipe_version:x.recipe_version})),{onConflict:'owner_id,menu_id'}),
          supabase.from('demo_materials').upsert(demoSeed.materials.map(x=>({owner_id,material_id:x.material_id,name:x.name,unit:x.unit})),{onConflict:'owner_id,material_id'}),
          supabase.from('demo_recipes').upsert(demoSeed.recipes.map((x,i)=>({owner_id,recipe_id:`${x.menu_id}-${x.material_id}-${i}`,menu_id:x.menu_id,material_id:x.material_id,quantity:x.quantity,unit:x.unit,channel:null})),{onConflict:'owner_id,recipe_id'})
        ]);
        if(m.error||ing.error||r.error) throw new Error('가상 기준자료를 저장하지 못했습니다. DB 정책과 테이블을 확인해 주세요.');
        setStatus('가상 예시 기준자료를 데이터베이스에 준비했습니다. 새로고침해도 같은 자료를 불러옵니다.');
      } else if(existing.menus!==expected.menus||existing.materials!==expected.materials||existing.recipes!==expected.recipes) {
        throw new Error('저장된 가상 자료 수가 샘플과 다릅니다. 자동으로 덮어쓰지 않았습니다. 관리자 확인이 필요합니다.');
      } else setStatus('저장된 가상 예시 기준자료를 불러왔습니다.');
      const [a,b,c]=await Promise.all(tables.map(table=>supabase.from(table).select('id',{count:'exact',head:true})));
      if(a.error||b.error||c.error) throw new Error('기준자료를 다시 읽지 못했습니다.');
      setCounts({menus:a.count||0,materials:b.count||0,recipes:c.count||0});
    } catch(e){setStatus(e instanceof Error?e.message:'기준자료 조회에 실패했습니다.');}
  }
  return <><section className="count-grid"><article className="stat"><span>메뉴</span><strong>{counts?.menus??'—'}<small>종</small></strong></article><article className="stat"><span>재료</span><strong>{counts?.materials??'—'}<small>종</small></strong></article><article className="stat"><span>레시피 연결</span><strong>{counts?.recipes??'—'}<small>건</small></strong></article></section><section className="panel"><div className="panel-head"><div><h2>준비된 기준자료</h2><p>메뉴와 재료는 단위 기준으로 저장됩니다.</p></div><button className="secondary" onClick={()=>{setCounts(null);void load();}}>다시 불러오기</button></div><p role="status" className="status-line">{status}</p>{counts&&<div className="tables"><div><h3>메뉴</h3><ul>{demoSeed.menus.map(x=><li key={x.menu_id}><span>{x.name}</span><span>{x.category} · ₩{x.price.toLocaleString()}</span></li>)}</ul></div><div><h3>재료</h3><ul>{demoSeed.materials.map(x=><li key={x.material_id}><span>{x.name}</span><span>{x.unit}</span></li>)}</ul></div></div>}</section></>;
}
