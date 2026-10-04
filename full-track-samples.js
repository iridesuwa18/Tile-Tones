/* Full track samples: complete 8-bar songs, each mixing several instruments.
   Same notation as single-samples.js. o = octave shift of the track. */
(()=>{
const R=(s,n)=>Array(n).fill(s).join(' ');
const A=(a,b,c)=>R(`${a}:.5 ${b}:.5 ${c}:.5 ${b}:.5`,2);
const L=(a,b,c,d)=>`${a}:.5 ${b}:.5 ${a}:.5 ${c}:.5 ${a}:.5 ${b}:.5 ${d}:.5 ${b}:.5`;
const S=c=>`${c}:1 -:1 ${c}:1 -:1`;
window.FULL_TRACKS=[
 {name:'Sunset Drive',bpm:100,tracks:[
  {k:'piano',o:-1,p:R('C4+E4+G4:4 A3+C4+E4:4 F3+A3+C4:4 G3+B3+D4:4',2)},
  {k:'guitar',o:-1,v:.6,p:R(A('C3','G3','E3')+' '+A('A3','E4','C4')+' '+A('F3','C4','A3')+' '+A('G3','D4','B3'),2)},
  {k:'violin',p:'E5:2 G5:1 E5:1 C5:2 E5:2 A4:2 C5:1 A4:1 B4:2 D5:2 G5:2 E5:1 G5:1 E5:2 C5:2 C5:2 A4:1 C5:1 D5:1 B4:1 G4:2'},
  {k:'drums',p:R('k+h:1 h:1 s+h:1 h:1',8)}]},
 {name:'Dreamy Lofi',bpm:80,tracks:[
  {k:'piano',o:-1,p:R('A3+C4+E4:4 F3+A3+C4:4 C4+E4+G4:4 G3+B3+D4:4',2)},
  {k:'digital',v:.4,p:R(A('A4','C5','E5')+' '+A('F4','A4','C5')+' '+A('C5','E5','G5')+' '+A('G4','B4','D5'),2)},
  {k:'guitar',o:-1,v:.7,p:R('A3:2 E4:2 F3:2 C4:2 C4:2 G4:2 G3:2 D4:2',2)},
  {k:'drums',v:.7,p:R('k+h:1 h:.5 h:.5 s+h:1 h:.5 k+h:.5',8)}]},
 {name:'Neon Arcade',bpm:128,tracks:[
  {k:'digital',v:.5,p:R(L('A5','E5','C6','C5')+' '+L('G5','D5','B5','B4')+' '+L('F5','C5','A5','A4')+' '+L('G5','D5','B5','B4'),2)},
  {k:'digital',o:-1,v:.6,p:R(R('A3:.5',8)+' '+R('G3:.5',8)+' '+R('F3:.5',8)+' '+R('G3:.5',8),2)},
  {k:'piano',o:-1,v:.6,p:R(S('A3+C4+E4')+' '+S('G3+B3+D4')+' '+S('F3+A3+C4')+' '+S('G3+B3+D4'),2)},
  {k:'drums',p:R('k+h:.5 h:.5 s+h:.5 h:.5 k+h:.5 h:.5 s+h:.5 h:.5',8)},
  {k:'cymbals',v:.5,p:R('c:4 -:4 -:4 -:4',2)}]},
 {name:'Rainy Window',bpm:70,tracks:[
  {k:'piano',o:-1,p:R('A3+C4+E4:4 F3+A3+C4:4 C4+E4+G4:4 E3+G3+B3:4',2)},
  {k:'guitar',o:-1,v:.6,p:R(A('A3','E4','C4')+' '+A('F3','C4','A3')+' '+A('C4','G4','E4')+' '+A('E3','B3','G3'),2)},
  {k:'violin',p:'A4:2 C5:2 E5:4 G5:2 E5:2 D5:4 C5:2 E5:2 F5:2 A4:2 E5:2 G5:2 B4:4'}]},
 {name:'Pixel Party',bpm:110,tracks:[
  {k:'piano',p:R('E5:1 G5:.5 E5:.5 C5:1 E5:1 D5:1 G5:.5 D5:.5 B4:1 D5:1 C5:1 E5:.5 C5:.5 A4:1 C5:1 A4:1 C5:.5 A4:.5 F4:1 A4:1',2)},
  {k:'guitar',o:-1,v:.6,p:R(R('C4+E4+G4:1',4)+' '+R('G3+B3+D4:1',4)+' '+R('A3+C4+E4:1',4)+' '+R('F3+A3+C4:1',4),2)},
  {k:'digital',o:-1,v:.6,p:R(R('C3:1',4)+' '+R('G3:1',4)+' '+R('A3:1',4)+' '+R('F3:1',4),2)},
  {k:'violin',v:.5,p:R('G4:4 D5:4 E5:4 C5:4',2)},
  {k:'drums',p:R('k+h:1 s+h:1 k+h:.5 k+h:.5 s+h:1',8)},
  {k:'cymbals',v:.5,p:R('r:1 -:1 r:1 -:1',8)}]}];
})();
