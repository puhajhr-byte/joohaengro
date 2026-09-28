'use client';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/browser';
export default function LoginForm({configured}:{configured:boolean}) {
  const [email,setEmail]=useState(''),[code,setCode]=useState(''),[sent,setSent]=useState(false),[message,setMessage]=useState(''),[busy,setBusy]=useState(false);
  async function sendCode(){if(!email.trim()){setMessage('이메일을 입력해 주세요.');return;}setBusy(true);setMessage('');try{const r=await fetch('/api/auth/send-code',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:email.trim()})});const data=await r.json();if(!r.ok)throw new Error(data.error||'코드를 보내지 못했습니다.');setSent(true);setMessage('이메일로 일회용 코드가 전송되었습니다.');}catch(e){setMessage(e instanceof Error?e.message:'코드를 보내지 못했습니다. 잠시 후 다시 시도해 주세요.');}finally{setBusy(false);}}
  async function verify(){if(!/^\d{6}$/.test(code)){setMessage('이메일로 받은 6자리 코드를 입력해 주세요.');return;}setBusy(true);try{const {error}=await createClient().auth.verifyOtp({email:email.trim(),token:code,type:'email'});if(error)throw error;window.location.assign('/dashboard');}catch(e){setMessage(e instanceof Error?e.message:'코드를 확인하지 못했습니다.');}finally{setBusy(false);}}
  return <main className="login-shell"><section className="login-card"><div className="brand-mark">P</div><p className="eyebrow">PREP CAFE · DAILY CLOSE</p><h1>마감 기록을<br/>차분하게 정리하세요</h1><p className="muted">점주 이메일로 안전하게 로그인합니다.</p>
    {!configured&&<div className="notice warn"><strong>설정 대기 중</strong><br/>이메일 OTP 인증은 Supabase 프로젝트와 점주 계정 설정이 필요합니다. 현재 실제 로그인을 할 수 없습니다.</div>}
    <label htmlFor="email">점주 이메일</label><input id="email" type="email" autoComplete="email" placeholder="owner@example.com" value={email} onChange={e=>setEmail(e.target.value)} disabled={!configured||busy}/>
    {sent&&<><label htmlFor="code">이메일 인증 코드</label><input id="code" inputMode="numeric" maxLength={6} placeholder="6자리 코드" value={code} onChange={e=>setCode(e.target.value)}/></>}
    {message&&<p className="form-message" role="status">{message}</p>}{!sent?<button className="primary" disabled={!configured||busy} onClick={sendCode}>{busy?'전송 중…':'일회용 코드 받기'}</button>:<button className="primary" disabled={busy} onClick={verify}>{busy?'확인 중…':'로그인'}</button>}
    <p className="footnote">로그인 후 제공 샘플은 가상 예시로 표시됩니다.</p></section></main>;
}
