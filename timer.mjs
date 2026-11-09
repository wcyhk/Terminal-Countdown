export function durationFromMinutes(value){const text=String(value).trim();if(!/^\d+(\.\d{1,2})?$/.test(text))throw Error('請輸入 0.05 至 180 分鐘。');const n=Number(text);if(!Number.isFinite(n)||n<.05||n>180)throw Error('請輸入 0.05 至 180 分鐘。');return Math.round(n*60000);}
export const createTimer=(duration=300000)=>({duration,remaining:duration,deadline:null,phase:'ready'});
export const remaining=(t,now)=>t.phase==='running'?Math.max(0,t.deadline-now):t.remaining;
export function start(t,now){return ['running','finished'].includes(t.phase)?t:{...t,phase:'running',deadline:now+t.remaining};}
export function pause(t,now){if(t.phase!=='running')return t;const left=remaining(t,now);return {...t,remaining:left,deadline:null,phase:left===0?'finished':'paused'};}
export function tick(t,now){return t.phase==='running'&&remaining(t,now)===0?{...t,remaining:0,deadline:null,phase:'finished'}:t;}
export function subtract(t,now,amount=30000){if(t.phase==='finished')return t;const left=Math.max(0,remaining(t,now)-Math.max(0,amount));return {...t,remaining:left,deadline:t.phase==='running'&&left>0?now+left:null,phase:left===0?'finished':t.phase};}
export const reset=t=>createTimer(t.duration);
export function formatTime(ms){const s=Math.ceil(Math.max(0,ms)/1000);return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;}
