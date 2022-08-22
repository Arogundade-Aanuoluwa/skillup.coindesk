const hTag = document.querySelector("h1")
const hTag2 = document.querySelector("h2")
const hTag3 = document.querySelector("h3")
//instantiate App
const http = new App
//set time iverval to 5 sec
setInterval(() => {
  //make a get request
    http.get("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(data => {
    hTag.innerHTML = data.chartName
    hTag2.innerHTML = data.disclaimer
    hTag3.innerHTML = this.formatBpi(data.bpi)
    console.log(data)})
.catch(err => console.log(err));
}, 5000);
//create a function that iterate through bpi
function formatBpi(bpiPayload){
    let result = ""
    Object.keys(bpiPayload).forEach(function(bpi){
      console.log(bpi, bpiPayload[bpi])
        if(
          bpiPayload[bpi].hasOwnProperty('code') && 
          bpiPayload[bpi].hasOwnProperty('symbol') && 
          bpiPayload[bpi].hasOwnProperty('rate') && 
          bpiPayload[bpi].hasOwnProperty('description') && 
          bpiPayload[bpi].hasOwnProperty('rate_float')
        ) {
        result += `Code : ${bpiPayload[bpi]['code']} , Symbol : ${bpiPayload[bpi]['symbol']}, Rate : ${bpiPayload[bpi]['rate']}, Description : ${bpiPayload[bpi]['description']}, Rate(float) : ${bpiPayload[bpi]['rate_float']}<br/>`
        }
    })
    return result;
  }