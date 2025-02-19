 async function convert() {
  
  const amount = document.getElementById('amount').value;
  const fromcurrency = document.getElementById('from').value;
  const tocurrency =document.getElementById('to').value;
  const resultelem =document.getElementById('result');
    if(!amount ) {
        resultelem.innerHTML = `<span class="bg-red-500 text-white px-3 py-2 rounded-md block">Please enter a valid amount.</span>`;
        return;
    }
  const apikey ='31cb746095562312e0a85148';
 const api =`https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromcurrency}`


 try{
    const response = await  fetch(api);
    const data = await response.json();
     
    if(data.result === "success"){
    const rate = data.conversion_rates[tocurrency];
    const convamount = (rate*amount).toFixed(2);

    resultelem.textContent = `${convamount}  ${tocurrency}`
    }
    else{
    resultelem.textContent ='Error fetching exchange rates.'
 }

 }catch(error){
     resultelem.textContent ='Error fetching exchange rates.'
 }

 }