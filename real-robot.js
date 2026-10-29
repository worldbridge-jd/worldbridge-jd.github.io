(() => {
  const mount = document.querySelector('#real-robot-chart');
  if (!mount) return;
  // Figure 4, manuscript page 16. Averages use the paper's displayed rounding.
  const tasks = [['Arranging','Flowers'],['Hanging','Cups'],['Scanning','Drinks'],['Packing','books'],['Sorting','screws'],['Separating','LEGO bricks'],['Average']];
  const methods = [
    {name:'π₀.₅', color:'#cfc5ff', values:[65,75,5,75,45,80,57.5]},
    {name:'Motus', color:'#d2d3de', values:[20,35,10,0,0,0,10.8]},
    {name:'FastWAM', color:'#ffd2b4', values:[25,45,5,30,15,55,29.2]},
    {name:'LingBot-VA', color:'#c8eed8', values:[40,55,35,40,0,65,39.2]},
    {name:'Ours w/o pretrain', color:'#b4a998', values:[55,65,50,50,10,50,46.7]},
    {name:'Ours', color:'#bd3b30', values:[70,85,65,80,55,80,72.5]}
  ];
  const ns = 'http://www.w3.org/2000/svg';
  const make = (tag, attrs = {}, text) => {
    const element = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([key,value]) => element.setAttribute(key,value));
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const svg = make('svg',{viewBox:'0 0 1340 410',role:'group','aria-label':'Figure 7. Real-robot success rates for six tasks and the average, comparing six model variants.'});
  mount.append(svg);
  const top = 58, baseline = 318, plotHeight = 260, start = 88, step = 174, barWidth = 14, barGap = 10;
  const bars = [], status = document.querySelector('#real-robot-status');
  const legendPositions = [368,439,525,635,758,949];
  const idleStatus='';
  function highlightMethod(name){
    svg.querySelectorAll('.robot-bar,.robot-legend-item').forEach(item=>{
      item.classList.toggle('is-muted',name!==null&&item.dataset.method!==name);
      item.classList.toggle('is-highlighted',item.dataset.method===name);
    });
    status.textContent=idleStatus;
  }
  methods.forEach((method,i) => {
    const x=legendPositions[i];
    const legend=make('g',{class:'robot-legend-item',tabindex:0,role:'group','aria-label':method.name+' — highlight across tasks','data-method':method.name});
    legend.append(make('rect',{x:x-5,y:9,width:(legendPositions[i+1]??1025)-x-3,height:30,rx:5,fill:'transparent',class:'robot-legend-hit'}));
    legend.append(make('rect',{x,y:19,width:17,height:10,rx:4,fill:method.color}));
    legend.append(make('text',{x:x+24,y:28,class:'robot-legend','font-weight':i>=4?650:400},method.name));
    legend.addEventListener('pointerenter',()=>highlightMethod(method.name));
    legend.addEventListener('pointerleave',()=>highlightMethod(null));
    legend.addEventListener('focus',()=>highlightMethod(method.name));
    legend.addEventListener('blur',()=>highlightMethod(null));
    legend.addEventListener('keydown',event=>{if(event.key==='Escape')legend.blur();});
    svg.append(legend);
  });
  status.textContent=idleStatus;
  for(let value=0;value<=100;value+=20){
    const y=baseline-value/100*plotHeight;
    svg.append(make('line',{x1:76,x2:1324,y1:y,y2:y,stroke:value===0?'#cfd0d5':'#e9e9ee','stroke-width':1}));
    svg.append(make('text',{x:66,y:y+4,'text-anchor':'end',class:'robot-axis'},value));
  }
  svg.append(make('text',{transform:'translate(24 188) rotate(-90)','text-anchor':'middle',class:'robot-y-label'},'Success rate (%)'));
  svg.append(make('line',{x1:1118,x2:1118,y1:top,y2:baseline,stroke:'#d9d9df','stroke-dasharray':'2 3'}));
  function shape(x,height){
    if(height<=0)return `M ${x} ${baseline} h ${barWidth}`;
    const y=baseline-height,r=Math.min(6,height/2);
    return `M ${x} ${baseline} V ${y+r} Q ${x} ${y} ${x+r} ${y} H ${x+barWidth-r} Q ${x+barWidth} ${y} ${x+barWidth} ${y+r} V ${baseline} Z`;
  }
  tasks.forEach((task,taskIndex)=>{
    const groupX=start+taskIndex*step+(taskIndex===6?17:0);
    task.forEach((line,lineIndex)=>svg.append(make('text',{x:groupX+67,y:343+lineIndex*18,'text-anchor':'middle',class:'robot-task','font-weight':taskIndex===6?700:400},line)));
    methods.forEach((method,methodIndex)=>{
      const value=method.values[taskIndex],x=groupX+methodIndex*(barWidth+barGap);
      const description=`${task.join(' ')} · ${method.name}: ${value}%`;
      const group=make('g',{class:'robot-bar',tabindex:0,role:'img','aria-label':description,'data-value':value,'data-task':task.join(' '),'data-method':method.name});
      group.append(make('title',{},description));
      const bar=make('path',{d:shape(x,value/100*plotHeight),fill:method.color,class:'robot-bar-fill'});
      const label=make('text',{x:x+barWidth/2,y:baseline-value/100*plotHeight-9,'text-anchor':'middle',class:'robot-value','font-weight':methodIndex===5?700:400},value);
      group.append(bar,label,make('rect',{x:x-2,y:top,width:barWidth+4,height:plotHeight+2,fill:'transparent',class:'robot-bar-hit'}));
      const show=()=>{status.textContent=description;};
      const clear=()=>{status.textContent=idleStatus;};
      group.addEventListener('pointerenter',show);group.addEventListener('pointerleave',clear);
      group.addEventListener('focus',show);group.addEventListener('blur',clear);
      svg.append(group);bars.push({bar,label,x,value});
    });
  });
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,entered=false;
  function draw(progress){
    bars.forEach(({bar,label,x,value})=>{
      const currentValue=Math.min(value,100*progress);
      const height=currentValue/100*plotHeight;
      bar.setAttribute('d',shape(x,height));
      label.setAttribute('y',baseline-height-9);
      label.setAttribute('opacity',currentValue>=value?'1':'0');
    });
  }
  function animate(){
    cancelAnimationFrame(frame);
    if(motion.matches){draw(1);return;}
    const started=performance.now();draw(0);
    // A shared linear ceiling rises at 50 percentage points per second.
    // Each bar stops independently when it reaches its reported success rate.
    const peak=Math.max(...bars.map(({value})=>value));
    function tick(now){
      const ceiling=Math.min((now-started)*.05,peak);
      draw(ceiling/100);
      if(ceiling<peak)frame=requestAnimationFrame(tick);
    }
    frame=requestAnimationFrame(tick);
  }
  let seen=false;
  try{seen=localStorage.getItem('heres-real-robot-seen-v1')==='1';}catch{}
  draw(seen||motion.matches?1:0);
  const observer=new IntersectionObserver(entries=>{
    if(!entries[0].isIntersecting||entered)return;
    entered=true;
    if(!seen)animate();
    try{localStorage.setItem('heres-real-robot-seen-v1','1');}catch{}
    observer.disconnect();
  },{threshold:.3});observer.observe(mount);
  document.querySelector('#real-robot-replay').addEventListener('click',animate);
  motion.addEventListener('change',()=>{if(motion.matches){cancelAnimationFrame(frame);draw(1);}});
})();
