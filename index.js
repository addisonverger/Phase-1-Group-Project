




var apiCall = 'https://tastedive.com/api/similar?q=pearl%20jam&type=music&info=1&k=323666-showGo-XUMS94RP';



let h = new Headers();
h.append('Accept', 'application/json');
let req = new Request(apiCall,{
    method: 'GET',
    headers: h,
    mode: 'cors'
});



fetch(req)
    .then( (response)=>{
      if(response.ok){
          return response.json();
      }else{
          throw new Error('Fetch Error');
      }
      
    })
    .then( (jsonData)=>{
        console.log(jsonData);
    })
    .catch( (err)=>{
        console.log('ERROR:', err.message);
    });