import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/);
if(!script)throw new Error('inline script not found');
new vm.Script(script[1],{filename:'index.html inline script'});
for(const label of ['인터랙티브 미리보기','인증 없이 화면 미리보기','메뉴','재료','레시피','가상 예시 데이터'])if(!html.includes(label))throw new Error(`UI label missing: ${label}`);
console.log('PASS: index.html inline JavaScript syntax and expected preview labels.');
