
        const word=document.querySelector("#input");
        const submit=document.getElementById("submit")
        const meaning=document.querySelector("#meaning");
       
            function searchWord(){
            const word1=document.querySelector("#act-word").innerHTML=word.value.trim();
            if(word1){
                fetchWord(word1);
                word.value="";
              }
            };
             submit.addEventListener("click",searchWord);
             word.addEventListener("keydown",(event)=>{
             if(event.key=="Enter"){
                event.preventDefault();
                searchWord();
            }
        })
        
        async function  fetchWord(word) {
            const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
            try{
                const response =await fetch(url);
                if(!response.ok){
                    throw new Error(`Request failed ${response.status}`);
                }
                const data=await response.json();
                meaning.textContent=data[0].meanings[0].definitions[0].definition;
            }catch(error){
                meaning.textContent="Could not fetch this word";
                console.error("Could not fetch the wrod",error);
            }
        }
