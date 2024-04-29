function timeToWalk(steps, footprint, speed){
     let distans= steps * footprint;
     let speedMeterInSec = speed / 3.6;
     let time = distans / speedMeterInSec;
     let rest = Math.floor(distans / 500);
     time += rest * 60;

     let sec = Math.round(time % 60);
     let min = Math.floor(time / 60);
     let hours = Math.floor(min / 60);
     min -= hours * 60;
     let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
     let minToPrint = min < 10 ? `0${min}` : `${min}`;
     let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

     console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);
}    
timeToWalk(4000, 0.60, 5);//00:32:48
timeToWalk(2564, 0.70, 5.5);//00:22:35//na vseki 500m po4iva 1 min