import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const source=JSON.parse(await readFile(new URL('../data/매장운영데이터.json',import.meta.url),'utf8'));
assert.equal(source.menus.length,8,'샘플 메뉴 수');
assert.equal(source.materials.length,11,'샘플 재료 수');
assert.equal(source.recipes.length,22,'샘플 레시피 수');
const menus=new Set(source.menus.map(x=>x.menu_id)), materials=new Set(source.materials.map(x=>x.material_id));
assert.equal(menus.size,8,'메뉴 ID 중복 없음');assert.equal(materials.size,11,'재료 ID 중복 없음');
for(const recipe of source.recipes){assert(menus.has(recipe.menu_id),`없는 메뉴 참조: ${recipe.menu_id}`);assert(materials.has(recipe.material_id),`없는 재료 참조: ${recipe.material_id}`);assert(recipe.quantity>0,'레시피 사용량은 양수');assert.equal(source.materials.find(x=>x.material_id===recipe.material_id).unit,recipe.unit,'기준 단위 일치');}
const migration=await readFile(new URL('../supabase/migrations/202609280001_demo_reference_data.sql',import.meta.url),'utf8');
for(const table of ['demo_menus','demo_materials','demo_recipes'])assert(migration.includes(`alter table public.${table} enable row level security`),`${table} RLS 활성화`);
assert(migration.includes('owner_id = (select auth.uid())'),'행별 소유자 정책');
console.log('PASS: 8 menus, 11 materials, 22 recipes; unique IDs, valid references, positive quantities and matching units.');
console.log('PASS: all three demo tables enable RLS and constrain data to the authenticated owner.');
