(()=>{
 const ablations=[[91.28,67.50,14.50],[93.31,69.17,16.52],[93.98,74.33,16.90],[95.20,78.58,21.07]],labels=['Base configuration','+ Action forcing','+ Short-term memory','+ Long-term memory'];
 function ablate(){const j=Number(document.querySelector('#ablation-benchmark').value),chart=document.querySelector('#ablation-chart');chart.replaceChildren();ablations.forEach((values,i)=>{const row=document.createElement('div');row.className='ablation-row';const title=document.createElement('div'),name=document.createElement('span'),value=document.createElement('strong'),track=document.createElement('div'),fill=document.createElement('i');name.textContent=labels[i];value.textContent=values[j].toFixed(2)+'%';title.append(name,value);track.className='ablation-track';fill.style.width=values[j]+'%';track.append(fill);row.append(title,track);chart.append(row);});}document.querySelector('#ablation-benchmark').addEventListener('change',ablate);ablate();
})();

(()=>{
 const button=document.querySelector('#copy-citation');
 button.addEventListener('click',async()=>{
  const citation=document.querySelector('#citation-bib'),status=document.querySelector('#citation-status');
  try{await navigator.clipboard.writeText(citation.textContent);status.textContent='BibTeX copied.';}
  catch{const range=document.createRange();range.selectNodeContents(citation);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='Citation selected. Press ⌘C or Ctrl+C to copy.';}
 });
})();
