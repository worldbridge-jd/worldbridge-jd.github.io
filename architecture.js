(() => {
 const mount=document.querySelector('#architecture-mount');
 const modules=[
  ['instruction','Instruction',[76,138,134,159]],
  ['text','Condition encoder',[74,173,134,233]],
  ['memory','Visual memory and future frames',[76,287,282,320]],
  ['vae','Video VAE',[83,261,272,274]],
  ['conditions','Clean conditions and noisy future',[142,225,275,242]],
  ['videoqkv','Video QKV',[144,209,272,220]],
  ['actionqkv','Action QKV',[293,209,369,220]],
  ['attention','Shared attention with video and action',[144,187,369,204]],
  ['cross','Cross-attention',[144,170,272,183]],
  ['videoffn','Video FFN',[144,154,272,167]],
  ['actionffn','Action FFN',[293,154,369,183]],
  ['videodecoder','Video decoder',[144,131,272,144]],
  ['actiondecoder','Shared action decoder',[293,131,369,144]],
  ['actiontokens','State, action, and register tokens',[287,225,373,242]],
  ['actionencoder','Action encoder',[293,261,369,274]],
  ['actioninput','H × 46D action chunk',[293,293,369,306]],
  ['robots','Robot and egocentric data',[393,136,537,187]],
  ['slots','Canonical slot mapping and validity mask',[393,195,537,269]],
  ['normalization','Grouped normalization',[396,276,534,294]]
 ].map(([id,name,b])=>({id,name,x:b[0]-73,y:b[1]-100,w:b[2]-b[0],h:b[3]-b[1]}));
 const ns='http://www.w3.org/2000/svg';
 async function load(){
  try{
   const response=await fetch('assets/architecture.svg');if(!response.ok)throw new Error('Architecture unavailable');
   const doc=new DOMParser().parseFromString(await response.text(),'image/svg+xml');if(doc.querySelector('parsererror'))throw new Error('Invalid architecture');
   const svg=document.importNode(doc.documentElement,true);mount.replaceChildren(svg);
   const base=svg.getScreenCTM().inverse();
   const groups=new Map(modules.map(module=>[module.id,[]]));
   // Wrap each original vector element in place so fonts, clipping and colors remain intact.
   const leaves=[...svg.querySelectorAll('g path,g use,g image,g rect')].filter(el=>!el.closest('defs'));
   for(const el of leaves){
    const box=el.getBBox(),matrix=base.multiply(el.getScreenCTM());
    const center=new DOMPoint(box.x+box.width/2,box.y+box.height/2).matrixTransform(matrix);
    const module=modules.filter(m=>center.x>=m.x&&center.x<=m.x+m.w&&center.y>=m.y&&center.y<=m.y+m.h).sort((a,b)=>a.w*a.h-b.w*b.h)[0];
    if(!module)continue;
    // Enclosing frames and cross-module connectors stay fixed in the original layout.
    const corners=[[box.x,box.y],[box.x+box.width,box.y],[box.x,box.y+box.height],[box.x+box.width,box.y+box.height]].map(([x,y])=>new DOMPoint(x,y).matrixTransform(matrix));
    if(corners.some(p=>p.x<module.x-2||p.x>module.x+module.w+2||p.y<module.y-2||p.y>module.y+module.h+2)){
     el.dataset.scaleFixed='true';continue;
    }
    const parent=el.parentElement,parentMatrix=base.multiply(parent.getScreenCTM()).inverse();
    const origin=new DOMPoint(module.x+module.w/2,module.y+module.h/2).matrixTransform(parentMatrix);
    const wrapper=document.createElementNS(ns,'g');wrapper.dataset.scaleModule=module.id;
    parent.insertBefore(wrapper,el);wrapper.append(el);groups.get(module.id).push({wrapper,x:origin.x,y:origin.y});
   }
   const motion=matchMedia('(prefers-reduced-motion: reduce)'),states=new Map();
   function scaleModule(id,target){
    const state=states.get(id)||{scale:1,frame:0};cancelAnimationFrame(state.frame);states.set(id,state);
    const start=performance.now(),from=state.scale,duration=motion.matches?0:180;
    function tick(now){
     const t=duration?Math.min(1,(now-start)/duration):1,ease=t*t*(3-2*t);state.scale=from+(target-from)*ease;
     for(const {wrapper,x,y} of groups.get(id)){
      if(state.scale===1)wrapper.removeAttribute('transform');
      else wrapper.setAttribute('transform',`translate(${x} ${y}) scale(${state.scale}) translate(${-x} ${-y})`);
     }
     svg.dataset.hoverModule=target>1?id:'';svg.dataset.hoverScale=state.scale.toFixed(3);
     if(t<1)state.frame=requestAnimationFrame(tick);
    }
    state.frame=requestAnimationFrame(tick);
   }
   for(const module of modules){
    const target=document.createElementNS(ns,'rect');target.setAttribute('class','architecture-hover-target');target.setAttribute('aria-hidden','true');target.dataset.module=module.id;
    for(const [key,value] of Object.entries({x:module.x,y:module.y,width:module.w,height:module.h}))target.setAttribute(key,value);
    svg.append(target);
    target.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')scaleModule(module.id,1.025);});
    target.addEventListener('pointerleave',event=>{if(event.pointerType!=='touch')scaleModule(module.id,1);});
   }
  }catch(error){mount.textContent='The interactive architecture could not load. Please refresh the page.';console.error(error);}
 }
 load();
})();
