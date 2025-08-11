 document.addEventListener("DOMContentLoaded", async ()  => {
    const partials = document.querySelectorAll('[data-get]')

    await Promise.all([...partials].map(async (part) => {
       let data =  part.getAttribute("data-get")
      try{
           let con = await fetch(data,{cache : "no-cache"})
         if(!con.ok){
         throw new Error(` ${data} => ${con.status}`)
       } 

       let context = await con.text()
       part.innerHTML = context


      }catch(error){
         console.log("amcık")
       }
       
   
    }))

    
        
 })