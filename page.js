'use client';
import {useMemo,useState} from 'react';
import {teams,fixtures} from '../data/league';

function magicNumber(ts, target='수원 삼성'){
 const t=ts.find(x=>x.name===target);
 let highest=-Infinity;
 for(const r of ts.filter(x=>x.name!==target)){
  let max=r.pts+(32-r.played)*3;
  // target-rival remaining H2H: safe ceiling assumes target wins that game.
  const h2h=fixtures.find(f=>f.result===null && ((f.home===t.short&&f.away===r.short)||(f.away===t.short&&f.home===r.short)));
  if(h2h) max-=3;
  highest=Math.max(highest,max);
 }
 return Math.max(0,highest+1-t.pts);
}
function winImpact(teamShort){
 const target=teams[0];
 const rival=teams.find(t=>t.short===teamShort);
 if(!rival)return null;
 const before=magicNumber(teams);
 const next=teams.map(t=>({...t}));
 const x=next.find(t=>t.short===teamShort); x.pts+=3; x.w+=1; x.played+=1;
 // Team's win is applied, and if the game is directly against target it would also add 3 to target.
 const direct=fixtures.some(f=>f.result===null && ((f.home==='수원'&&f.away===teamShort)||(f.away==='수원'&&f.home===teamShort)));
 if(direct){next[0].pts+=3;next[0].w+=1;next[0].played+=1;}
 return {before,after:magicNumber(next),delta:magicNumber(next)-before};
}
export default function Home(){
 const [selected,setSelected]=useState('all');
 const sorted=useMemo(()=>[...teams].sort((a,b)=>b.pts-a.pts||b.gd-a.gd),[]);
 const magic=magicNumber(teams);
 const rivals=sorted.slice(0,6).filter(t=>t.name!=='수원 삼성');
 const shown=fixtures.filter(f=>selected==='all'||f.home===selected||f.away===selected);
 return <main>
  <header><div className="eyebrow">2026 HANA BANK K LEAGUE 2</div><h1>🏆 매직넘버</h1><p>승격 경쟁을 숫자로 보는 팬메이드 계산기</p></header>
  <section className="hero"><div><span>수원 삼성 현재 승점</span><strong>53</strong></div><div className="magic"><span>현재 우승 매직넘버</span><b>{magic}</b><small>다른 경쟁팀의 잔여경기를 최대치로 잡은 안전한 상한선</small></div><div><span>정규리그 잔여</span><strong>7</strong></div></section>
  <section className="grid">
   <div className="card"><h2>승격 경쟁 순위</h2><table><thead><tr><th>#</th><th>구단</th><th>승점</th><th>경기</th><th>득실</th></tr></thead><tbody>{sorted.map((t,i)=><tr key={t.name} className={i<2?'promote':''}><td>{i+1}</td><td>{t.name}</td><td><b>{t.pts}</b></td><td>{t.played}</td><td>{t.gd>0?'+':''}{t.gd}</td></tr>)}</tbody></table></div>
   <div className="card"><h2>경쟁팀 승리 시 변화</h2><p className="muted">현재 승격권·추격권 팀의 다음 승리 결과를 가정합니다.</p>{rivals.map(t=>{const x=winImpact(t.short);return <div className="impact" key={t.name}><div><b>{t.name}</b><span>{t.pts}점 → {t.pts+3}점</span></div><strong>{x.delta===0?'유지':x.delta>0?`+${x.delta}`:x.delta}</strong></div>})}</div>
  </section>
  <section className="card"><div className="sectionHead"><div><h2>📅 17개 팀 잔여 일정</h2><p className="muted">공식 K리그 일정 데이터를 기준으로 계속 업데이트하는 구조입니다.</p></div><select value={selected} onChange={e=>setSelected(e.target.value)}><option value="all">전체 팀</option>{teams.map(t=><option key={t.short} value={t.short}>{t.name}</option>)}</select></div><div className="fixtures">{shown.map((f,i)=><div className="fixture" key={i}><span>{f.round}R<br/><small>{f.date}</small></span><b>{f.home}</b><em>vs</em><b>{f.away}</b><i>{f.result?`${f.result[0]} - ${f.result[1]}`:'예정'}</i></div>)}</div><div className="warning">현재 데이터셋에는 26R 전체 대진과 수원의 28~34R 일정이 연결되어 있습니다. 27~34R의 17팀 전체 대진은 공식 일정 원본을 추가 연결한 뒤 공개용 계산에 사용하도록 설계했습니다.</div></section>
  <footer>팬메이드 · 공식 일정/결과 확인: K LEAGUE</footer>
 </main>
}
