import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const page=new URL('../index.html',import.meta.url);
createServer(async(_req,res)=>{try{const body=await readFile(page);res.writeHead(200,{'content-type':'text/html; charset=utf-8','cache-control':'no-store'});res.end(body);}catch{res.writeHead(500);res.end('Preview unavailable');}}).listen(3008,'127.0.0.1',()=>console.log('EPIC 1 interactive preview at http://127.0.0.1:3008'));
