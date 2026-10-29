(() => {
 const views=[
  {id:'mix',title:'Robot + human egocentric data',subtitle:'Collected data',approx:true,page:7,note:'Approximate collected durations from Figure 3. The robot portion is measured before filtering; this is not a post-curation total.',source:'Figure 3',rows:[['Robot data',13976,'#e1251b'],['Human egocentric data',14128,'#b5b5bd']]},
  {id:'curated',title:'Robot data sources',subtitle:'After curation',page:9,note:'9,729.58 hours after curation across ten robot sources. RoboCasa, RoboTwin, and human egocentric data are excluded from this breakdown.',source:'Table 1',rows:[
   ['InternData-A1',3559.02,'#e1251b'],['AgiBotWorld-Beta',2286.54,'#ef7970'],['ABC-130K',1642.30,'#9e2620'],['RoboCOIN',653.23,'#cf9994'],['Galaxea',423.37,'#72504d'],['AgiBotWorld2026',390.66,'#62636b'],['DROID',263.80,'#91929a'],['RoboMIND 2.0',262.37,'#b3b3bb'],['GenieSim 3.0',211.38,'#d3d3d9'],['RoboMIND',36.91,'#eac2be']
  ]}
 ];
 const chartControllers=[];
 const ns='http://www.w3.org/2000/svg',motion=matchMedia('(prefers-reduced-motion: reduce)'),key='heres-data-composition-seen-v1';let seen=false;try{seen=localStorage.getItem(key)==='1';}catch{}
 const initiallySeen=seen;
 function createChart(view){
 const panel=document.querySelector('#corpus-'+view.id),mount=panel.querySelector('.corpus-chart'),legend=panel.querySelector('.corpus-legend');
 let locked=null,parts=[],number,label,unit,total=0,frame=0,entered=false;
 const format=(v,digits=2)=>v.toLocaleString('en-US',{maximumFractionDigits:digits});
 const make=(tag,attrs={},text)=>{const el=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);if(text!==undefined)el.textContent=text;return el;};
 const angleOffset=view.id==='mix'?0:-Math.PI/2;
 const point=(angle,r)=>[220+Math.cos(angle)*r,195+Math.sin(angle)*r];
 function arc(start,end){if(end-start<.00001)return '';const a=start*Math.PI*2+angleOffset,b=Math.min(end,start+.999999)*Math.PI*2+angleOffset,large=b-a>Math.PI?1:0;return `M${point(a,144)} A144,144 0 ${large} 1 ${point(b,144)} L${point(b,106)} A106,106 0 ${large} 0 ${point(a,106)} Z`;}
 function describe(index){
  parts.forEach((part,i)=>{part.path.classList.toggle('is-active',i===index);part.button.classList.toggle('is-active',i===index);part.path.setAttribute('aria-pressed',String(i===locked));part.button.setAttribute('aria-pressed',String(i===locked));});
  if(index===null){number.textContent=(view.approx?'≈':'')+format(total);label.textContent='Total duration';unit.textContent='hours';}
  else{const row=view.rows[index];number.textContent=format(row[1]/total*100)+'%';label.textContent=row[0];unit.textContent=(view.approx?'≈':'')+format(row[1])+' hours';}
 }
 function draw(progress){parts.forEach(part=>part.path.setAttribute('d',arc(part.start*progress,part.end*progress)));number.textContent=(view.approx?'≈':'')+format(total*progress,progress===1?2:0);}
 function finish(){cancelAnimationFrame(frame);draw(1);panel.dataset.animationState='complete';seen=true;try{localStorage.setItem(key,'1');}catch{}}
 function animate(){cancelAnimationFrame(frame);locked=null;describe(null);if(motion.matches){finish();return;}panel.dataset.animationState='running';const start=performance.now();function tick(now){const t=Math.min(1,(now-start)/1400);draw(1-Math.pow(1-t,3));if(t<1)frame=requestAnimationFrame(tick);else finish();}frame=requestAnimationFrame(tick);}
 function render(){
  cancelAnimationFrame(frame);locked=null;parts=[];legend.replaceChildren();total=view.rows.reduce((sum,row)=>sum+row[1],0);
  panel.querySelector('h3').textContent=view.title;panel.querySelector('.corpus-subtitle').textContent=view.subtitle;
  const svg=make('svg',{viewBox:'0 0 440 390',role:'group','aria-label':view.title+' by hours'});let cumulative=0;
  view.rows.forEach(([name,hours,color],i)=>{
   const start=cumulative/total; cumulative+=hours;const end=cumulative/total,mid=(start+end)*Math.PI+angleOffset;
   const path=make('path',{class:'corpus-slice',fill:color,tabindex:0,role:'button','aria-label':name+': '+format(hours)+' hours, '+format(hours/total*100)+'%','aria-pressed':'false'});
   path.style.setProperty('--slice-x',Math.cos(mid)*3+'px');path.style.setProperty('--slice-y',Math.sin(mid)*3+'px');svg.append(path);
   const button=document.createElement('button');button.type='button';button.className='corpus-source-row';button.setAttribute('aria-label',name);button.setAttribute('aria-pressed','false');
   const dot=document.createElement('i'),text=document.createElement('span'),amount=document.createElement('strong'),share=document.createElement('small');dot.style.background=color;text.textContent=name;amount.textContent=(view.approx?'≈':'')+format(hours)+' h';share.textContent=format(hours/total*100)+'%';button.append(dot,text,amount,share);legend.append(button);
   parts.push({path,button,start,end});
   const enter=()=>{if(panel.dataset.animationState==='running')finish();describe(i);};const leave=()=>describe(locked);const select=()=>{if(panel.dataset.animationState==='running')finish();locked=locked===i?null:i;describe(locked);};
   for(const el of[path,button]){el.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')enter();});el.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')leave();});el.addEventListener('focus',enter);el.addEventListener('blur',leave);el.addEventListener('click',select);el.addEventListener('keydown',e=>{if(e.key==='Escape'){locked=null;describe(null);el.blur();}if(el===path&&(e.key==='Enter'||e.key===' ')){e.preventDefault();select();}});}
  });
  number=make('text',{x:220,y:188,'text-anchor':'middle',class:'corpus-number'});label=make('text',{x:220,y:216,'text-anchor':'middle',class:'corpus-center-label'});unit=make('text',{x:220,y:240,'text-anchor':'middle',class:'corpus-unit'});svg.append(number,label,unit);mount.replaceChildren(svg);describe(null);draw(!initiallySeen&&!entered?0:1);panel.dataset.animationState=!initiallySeen&&!entered?'pending':'complete';
 }
 render();const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)&&!entered){entered=true;if(!initiallySeen)animate();observer.disconnect();}},{threshold:.25});observer.observe(mount);
 motion.addEventListener('change',e=>{if(e.matches){finish();describe(locked);}});
 return {animate};
 }
 for(const view of views)chartControllers.push(createChart(view));
 document.querySelector('#corpus-replay').addEventListener('click',()=>chartControllers.forEach(chart=>chart.animate()));
})();
