/* Single samples: short clips you can drop onto any track at the cursor.
   Notation: "NOTE:beats" separated by spaces. Chords use +, rests use "-".
   Pitched: C4..C6 (auto-fits the track's octave). Drums: k=kick s=snare t=tom h=hat.
   Cymbals: c=crash r=ride p=splash x=china. Beats allowed: .25 .5 1 2 4 */
(()=>{
const R=(s,n)=>Array(n).fill(s).join(' ');
window.SINGLE_SAMPLES={
 piano:[
  {n:'C chord',p:'C4+E4+G4:4'},{n:'Am chord',p:'A4+C5+E5:4'},{n:'F chord',p:'F4+A4+C5:4'},{n:'G chord',p:'G4+B4+D5:4'},
  {n:'Rising run',p:'C4:.5 D4:.5 E4:.5 F4:.5 G4:.5 A4:.5 B4:.5 C5:.5'},
  {n:'Falling run',p:'C5:.5 B4:.5 A4:.5 G4:.5 F4:.5 E4:.5 D4:.5 C4:.5'},
  {n:'Pop riff',p:'E5:.5 E5:.5 G5:1 E5:.5 D5:.5 C5:1'},
  {n:'Soft melody',p:'E5:2 D5:1 C5:1 D5:2 -:2'},
  {n:'Octave bounce',p:'C4:1 C5:1 C4:1 C5:1'},
  {n:'Ballad arp',p:R('C4:.5 E4:.5 G4:.5 E4:.5',2)}],
 guitar:[
  {n:'Strum C',p:R('C4+E4+G4:1',4)},{n:'Strum Am',p:R('A4+C5+E5:1',4)},{n:'Strum F',p:R('F4+A4+C5:1',4)},{n:'Strum G',p:R('G4+B4+D5:1',4)},
  {n:'Arpeggio C',p:R('C4:.5 E4:.5 G4:.5 E4:.5',2)},
  {n:'Arpeggio Am',p:R('A4:.5 C5:.5 E5:.5 C5:.5',2)},
  {n:'Pluck melody',p:'E4:1 G4:1 A4:1 G4:1'},
  {n:'Bass walk',p:'C4:1 E4:1 G4:1 E4:1'},
  {n:'Slow chord',p:'C4+G4+E5:4'},
  {n:'Riff',p:'A4:.5 C5:.5 D5:1 C5:.5 A4:.5 G4:1'}],
 violin:[
  {n:'Long C',p:'C5:4'},{n:'Long E',p:'E5:4'},{n:'Long G',p:'G5:4'},
  {n:'Sigh down',p:'G5:2 E5:2'},{n:'Rise up',p:'C5:2 E5:2'},
  {n:'Wave',p:'E5:1 G5:1 E5:1 D5:1'},
  {n:'Harmony 3rds',p:'C5+E5:4'},{n:'Harmony 5ths',p:'C5+G5:4'},
  {n:'Phrase',p:'E5:2 D5:1 C5:1'},{n:'High call',p:'C6:2 -:2'}],
 digital:[
  {n:'Arp up',p:R('C5:.25 E5:.25 G5:.25 C6:.25',2)},{n:'Arp down',p:R('C6:.25 G5:.25 E5:.25 C5:.25',2)},
  {n:'Bass pulse',p:R('C4:.5',8)},{n:'Octave pulse',p:R('C4:.5 C5:.5',4)},
  {n:'Blip',p:'E5:.25 G5:.25 E5:.25 -:.25'},{n:'Power chord',p:'C4+G4:4'},
  {n:'Sweep up',p:'C4:.25 D4:.25 E4:.25 F4:.25 G4:.25 A4:.25 B4:.25 C5:.25'},
  {n:'Sweep down',p:'C5:.25 B4:.25 A4:.25 G4:.25 F4:.25 E4:.25 D4:.25 C4:.25'},
  {n:'Lead hook',p:'E5:.5 G5:.5 A5:1 G5:.5 E5:.5 D5:1'},{n:'Laser',p:'C6:.25 A5:.25 F5:.25 D5:.25'}],
 drums:[
  {n:'Hit 1 (kick)',p:'k:1'},{n:'Hit 2 (snare)',p:'s:1'},
  {n:'Basic beat',p:'k+h:1 s+h:1 k+h:1 s+h:1'},{n:'Four on floor',p:R('k+h:1',4)},
  {n:'Hat 8ths',p:R('h:.5',8)},{n:'Tom roll',p:'t:.5 t:.5 t:.5 t:.5'},
  {n:'Fill',p:'s:.5 s:.5 t:.5 t:.5 t:.5 t:.5 k+s:1'},
  {n:'Half time',p:'k+h:1 h:1 s+h:1 h:1'},{n:'Backbeat',p:'-:1 s:1 -:1 s:1'},
  {n:'Kick groove',p:'k:.5 -:.5 k:.5 -:.5 s:1 k:1'}],
 cymbals:[
  {n:'Crash',p:'c:4'},{n:'Ride quarters',p:R('r:1',4)},{n:'Ride 8ths',p:R('r:.5',8)},
  {n:'Splash',p:'p:2 -:2'},{n:'China',p:'x:2 -:2'},
  {n:'Crash + ride',p:'c:1 r:1 r:1 r:1'},{n:'Off-beat ride',p:R('-:.5 r:.5',4)},
  {n:'Splash pair',p:'p:.5 -:.5 p:.5 -:.5 -:2'},{n:'Crash roll',p:'c:.5 c:.5 c:.5 c:.5'},
  {n:'Ride accent',p:'r:1 r:.5 r:.5 r:1 r:1'}]};
})();
