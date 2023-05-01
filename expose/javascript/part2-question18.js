"always strict";

function give_time(){
  let d = new Date();
  let time = d.toLocaleTimeString();

  console.log(time);
}

// no... what are you thinking
//let counter = 20; // will count down 20 seconds
//while( counter ){
//  second = d.toLocaleTimeString();
//  if(time != d.toLocaleTimeString()){
//    console.log(time);
//    time = d.toLocaleTimeString();
//    counter--;
//  }
//}
setInterval(give_time, 1000);
