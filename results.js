(() => {
 // Reported success rates from manuscript Tables 4–6; null means not reported.
 const benchmarks=[
  {name:'RoboTwin 2.0',label:['RoboTwin 2.0'],note:'Clean + Randomized training; average evaluation SR'},
  {name:'RoboCasa GR1',label:['RoboCasa GR1','TableTop'],note:'TableTop SR'},
  {name:'RMBench',label:['RMBench'],note:'Average SR'},
  {name:'DOMINO',label:['DOMINO','Level-1'],note:'Level-1 average SR'},
  {name:'SimplerEnv',label:['SimplerEnv','WidowX'],note:'WidowX four-task average SR'},
  {name:'RoboDojo',label:['RoboDojo'],note:'Reported average SR, not Score'}
 ];
 const methods=[
  {name:'Heres',color:'#e1251b',dash:'',values:[96.23,82.8,83,57.6,84.4,19.15]},
  {name:'π0.5',color:'#58758f',dash:'6 3',values:[79.75,37,10.4,9.6,57.1,6.91]},
  {name:'InternVLA-A1.5',color:'#568a7a',dash:'3 3',values:[93.2,null,null,29.3,80.8,7.14]},
  {name:'GalaxeaVLA (G0.5)',color:'#aa8b4b',dash:'9 3',values:[93.3,null,null,null,87.3,14.88]},
  {name:'LingBot-VA',color:'#8d75a3',dash:'6 3 1 3',values:[92.24,null,78.2,24.1,null,null]},
  {name:'X-VLA',color:'#9d746b',dash:'2 4',values:[72.82,null,9.8,null,95.8,6.52]}
 ];
 // Fix each axis to the best reported result among these methods, regardless of visibility.
 const axisMax=benchmarks.map((_,i)=>Math.max(...methods.map(method=>method.values[i]??0)));
 const mount=document.querySelector('#radar-chart'),legend=document.querySelector('#radar-methods'),table=document.querySelector('#radar-score-table'),section=document.querySelector('#benchmark-radar');
 const motion=matchMedia('(prefers-reduced-motion: reduce)'),key='heres-results-radar-seen-v1';let seen=false;try{seen=localStorage.getItem(key)==='1';}catch{}
 let frame=0,entered=false;const layers=[];const ns='http://www.w3.org/2000/svg',cx=300,cy=225,radius=146;
 const make=(tag,attrs={},text)=>{const el=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);if(text!==undefined)el.textContent=text;return el;};
 const point=(i,v)=>{const a=-Math.PI/2+2*Math.PI*i/benchmarks.length;return[cx+Math.cos(a)*radius*v/100,cy+Math.sin(a)*radius*v/100];};
 function draw(progress){
  for(const layer of layers){
   const values=layer.method.values;
   // Only connect adjacent axes with reported values. Never close across a missing result.
   let d='';values.forEach((value,i)=>{const next=(i+1)%values.length;if(value!==null&&values[next]!==null)d+='M'+point(i,value/axisMax[i]*100*progress).join(',')+'L'+point(next,values[next]/axisMax[next]*100*progress).join(',');});
   layer.path.setAttribute('d',d);
   if(layer.area)layer.area.setAttribute('points',values.map((v,i)=>point(i,v/axisMax[i]*100*progress).join(',')).join(' '));
   layer.dots.forEach(({dot,index})=>{const[x,y]=point(index,values[index]/axisMax[index]*100*progress);dot.setAttribute('cx',x);dot.setAttribute('cy',y);});
  }
 }
 function animate(){cancelAnimationFrame(frame);section.dataset.animationState='running';const start=performance.now();function tick(now){const t=motion.matches?1:Math.min(1,(now-start)/1700);draw(1-Math.pow(1-t,3));if(t<1)frame=requestAnimationFrame(tick);else{section.dataset.animationState='complete';seen=true;try{localStorage.setItem(key,'1');}catch{}}}frame=requestAnimationFrame(tick);}
 const svg=make('svg',{viewBox:'0 0 600 450',role:'img','aria-labelledby':'radar-svg-title radar-svg-description'});
 svg.append(make('title',{id:'radar-svg-title'},'All benchmarks — six methods compared'),make('desc',{id:'radar-svg-description'},'Per-axis relative performance: 100 is the highest reported success rate among the six compared methods. The same reference is used when a method is hidden. Raw success rates are preserved in point tooltips and the table. Source: Tables 4–6. Heres, π0.5, InternVLA-A1.5, GalaxeaVLA (G0.5), LingBot-VA and X-VLA. Missing results are omitted; open lines do not imply zero. Exact values appear in the comparison table.'));
 for(const level of[20,40,60,80,100])svg.append(make('polygon',{points:benchmarks.map((_,i)=>point(i,level).join(',')).join(' '),class:'radar-grid'}),make('text',{x:cx+6,y:cy-radius*level/100+4,class:'radar-tick'},String(level)));
 benchmarks.forEach((_,i)=>{const[x,y]=point(i,100);svg.append(make('line',{x1:cx,y1:cy,x2:x,y2:y,class:'radar-axis'}));});
 const tbody=document.createElement('tbody'),thead=document.createElement('thead'),head=document.createElement('tr'),methodHead=document.createElement('th');methodHead.textContent='Method';methodHead.scope='col';head.append(methodHead);
 for(const b of benchmarks){const th=document.createElement('th');th.textContent=b.name;th.title=b.note;th.scope='col';head.append(th);}thead.append(head);table.append(thead,tbody);
 for(const [index,method] of methods.entries()){
  const group=make('g',{class:'radar-method','data-method':method.name});let area=null;
  if(index===0){area=make('polygon',{class:'radar-comparison-area'});group.append(area);}
  const path=make('path',{fill:'none',stroke:method.color,'stroke-width':index===0?2.7:1.6,'stroke-dasharray':method.dash,'stroke-linejoin':'round','stroke-linecap':'round',class:'radar-comparison-line'});group.append(path);
  const dots=[];method.values.forEach((value,i)=>{if(value===null)return;const dot=make('circle',{r:index===0?4:3,fill:method.color,stroke:'white','stroke-width':1,class:'radar-comparison-point','data-benchmark':benchmarks[i].name,'data-relative-score':(value/axisMax[i]*100).toFixed(2)});dot.append(make('title',{},method.name+' · '+benchmarks[i].name+': '+value+'% success rate; '+(value/axisMax[i]*100).toFixed(2)+' relative to best = 100'));group.append(dot);dots.push({dot,index:i});});
  svg.append(group);layers.push({method,group,path,dots,area});
  const row=document.createElement('tr'),name=document.createElement('th');row.dataset.method=method.name;name.scope='row';name.textContent=method.name;name.style.color=method.color;row.append(name);
  for(const value of method.values){const td=document.createElement('td');td.textContent=value===null?'—':value+'%';if(value===null)td.setAttribute('aria-label','Not reported');row.append(td);}tbody.append(row);
  const button=document.createElement('button');button.type='button';button.className='radar-method-toggle';button.setAttribute('aria-pressed','true');button.setAttribute('aria-label','Show '+method.name);button.style.setProperty('--method-color',method.color);
  const swatch=make('svg',{viewBox:'0 0 30 12','aria-hidden':'true'});swatch.append(make('line',{x1:1,y1:6,x2:29,y2:6,stroke:method.color,'stroke-width':2,'stroke-dasharray':method.dash}));
  const label=document.createElement('span');label.textContent=method.name;const count=document.createElement('small');count.textContent=method.values.filter(v=>v!==null).length+'/6 reported';button.append(swatch,label,count);
  button.addEventListener('click',()=>{const visible=button.getAttribute('aria-pressed')!=='true';button.setAttribute('aria-pressed',String(visible));group.style.display=visible?'':'none';row.hidden=!visible;});legend.append(button);
 }
 // Draw Heres last so its red outline remains readable where methods overlap.
 svg.append(layers[0].group);
 benchmarks.forEach((b,i)=>{const angle=-Math.PI/2+2*Math.PI*i/benchmarks.length,cos=Math.cos(angle),x=cx+cos*181,y=cy+Math.sin(angle)*181;const lines=[...b.label,'100 = '+axisMax[i]+'% SR'];const label=make('text',{x,y:y-(lines.length-1)*10,'text-anchor':cos>.25?'start':cos<-.25?'end':'middle',class:'radar-label'});lines.forEach((line,j)=>label.append(make('tspan',{x,dy:j?21:0,class:j===lines.length-1?'radar-ceiling':''},line)));svg.append(label);});
 mount.replaceChildren(svg);draw(seen?1:0);section.dataset.animationState=seen?'complete':'pending';
 document.querySelector('#radar-replay').addEventListener('click',animate);const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)&&!entered){entered=true;if(!seen)animate();observer.disconnect();}},{threshold:.2});observer.observe(mount);motion.addEventListener('change',e=>{if(e.matches){cancelAnimationFrame(frame);draw(1);section.dataset.animationState='complete';}});
})();
