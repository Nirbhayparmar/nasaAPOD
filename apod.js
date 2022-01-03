let APIKEY = "u1RzRKQ1ka0MHSidfTReW8VDW1WXdJdwcdaFwMOB";
let url =  "https://api.nasa.gov/planetary/apod?api_key=";
let date = document.getElementById("date"); 
let Heading = document.getElementById("title");
let img = document.getElementById("image");
let description = document.getElementById("detail");
let copyright = document.getElementById("copyright");
let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
function fetchData(){
  let dateValue = date.value;
  fetch(`${url}${APIKEY}&date=${dateValue}`)
  .then(response => response.json())
  .then(data => useData(data));
}
function fetchTodaysData(){
  fetch(`${url}${APIKEY}`)
  .then(response => response.json())
  .then(data => useData(data));
}

function useData(data){
    console.log(data);
    let title = data.title;
    let source = data.url;
    Heading.innerHTML=title;
    img.src=source;
    description.innerHTML=data.explanation;
    if(data.copyright)
    {
      copyright.innerHTML=`Copyright: ${data.copyright}`;
    }
    else
    {
      copyright.innerHTML='';
    }
    
}
// window.addEventListener('load', fetchData);
btn.addEventListener('click',fetchData);
btn1.addEventListener('click',fetchTodaysData);