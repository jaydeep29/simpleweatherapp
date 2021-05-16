const submitbtn= document.getElementById("btn");
const cityname=document.getElementById("first");
const show = document.getElementById("showdata");
const tempreal=document.getElementById("tempreal");



const getinfo=async(e)=>{
    e.preventDefault();
    let cityval=cityname.value;
    
    if(cityval===""){
        show.innerHTML="Please enter your city name";
        
    }
    else{
        try{
        let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ff036cb0ab03f4fcd7526cc03498355e`;
        const response= await fetch(url);
        const data =await response.json();
        const arrdata= [data];
        tempreal.innerHTML=arrdata[0].main.temp;
        console.log(data)
           
    }
        
        catch{
            show.innerHTML="Invalid city name";
           
        }
    }
     

}
submitbtn.addEventListener("click",getinfo);

