create table if not exists public.demo_menus (
  id bigint generated always as identity primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  menu_id text not null,
  name text not null,
  price integer not null check (price > 0),
  category text not null,
  recipe_version text not null,
  unique(owner_id, menu_id)
);
create table if not exists public.demo_materials (
  id bigint generated always as identity primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  material_id text not null,
  name text not null,
  unit text not null check (unit in ('g','ml','개')),
  unique(owner_id, material_id)
);
create table if not exists public.demo_recipes (
  id bigint generated always as identity primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null,
  menu_id text not null,
  material_id text not null,
  quantity numeric not null check (quantity > 0),
  unit text not null check (unit in ('g','ml','개')),
  channel text,
  unique(owner_id, recipe_id),
  foreign key(owner_id, menu_id) references public.demo_menus(owner_id, menu_id) on delete cascade,
  foreign key(owner_id, material_id) references public.demo_materials(owner_id, material_id) on delete cascade
);
alter table public.demo_menus enable row level security;
alter table public.demo_materials enable row level security;
alter table public.demo_recipes enable row level security;
create policy "owner controls own demo menus" on public.demo_menus for all to authenticated using (owner_id = (select auth.uid())) with check (owner_id = (select auth.uid()));
create policy "owner controls own demo materials" on public.demo_materials for all to authenticated using (owner_id = (select auth.uid())) with check (owner_id = (select auth.uid()));
create policy "owner controls own demo recipes" on public.demo_recipes for all to authenticated using (owner_id = (select auth.uid())) with check (owner_id = (select auth.uid()));
