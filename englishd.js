const eli= document.querySelector('.inputEnglish');
async function displayFun (word){
    try {
        const mean= document.querySelector('.down-para');
        const meaningContain=document.querySelector('.meaning-container');
        mean.style.display='block'    
        mean.innerHTML=`Searching the meaning of ${word}....`
        meaningContain.style.display='none' 

        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const re=  await fetch(url);
        const repe = await re.json()
        console.log(repe[0]['meanings'][0]['definitions'][0]['definition'])
        mean.style.display='none'  
        meaningContain.style.display='block' 
        const tit= document.querySelector('.titlee')   
        tit.innerHTML=`${word}`
        const tit1= document.querySelector('.meani')   
        tit1.innerHTML=`${repe[0]['meanings'][0]['definitions'][0]['definition']}`
        const audiel= document.querySelector('.audi');
        audiel.src=repe[0]['phonetics'][0]['audio'];
    } catch (error) {
        console.log('error')
        
    }


}


eli.addEventListener('keydown',(event)=>{
    // console.log(event.target.value)
    if (event.target.value && event.key==="Enter"){
        displayFun(event.target.value);

    }

})

// const apikey="v8zMGvMlvgtwsnPPN+Jo8g==WpEeWBwvVoXEIzv1"

// const options={
//     method:'GET',
//     headers :{
//         'X-Api-Key': apikey,
//     }
// };

// const apiurl="https://api.api-ninjas.com/v1/dictionary?word="




