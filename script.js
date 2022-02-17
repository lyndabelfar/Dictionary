const input= document.querySelector('.input');
const subbtn= document.querySelector('#sub');
const wordDiv = document.querySelector('.word');
const definitionDiv = document.querySelector('.definition');
const exampleDiv = document.querySelector('.example');
const partOfSpeechDiv = document.querySelector('.part-of-speech');
const originDiv = document.querySelector('.origin');
const phoneticDiv = document.querySelector('.text');

const audioDiv = document.querySelector('.audio');

const select = document.querySelector('#languages-selected');

let language = select.options[select.selectedIndex].value;



subbtn.addEventListener('click', mainfunc);    


function mainfunc(){
    let word = input.value;

    let language = select.options[select.selectedIndex].value;
    

    async function get(){
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
        let data = await response.json();
        console.log(data);
        
        document.querySelector('.main-content').classList.add('active');

        if(language =="en"){
            wordDiv.innerHTML = "Word: " + data[0].word;
        
            
            definitionDiv.innerHTML = "Main definition: " + data[0].meanings[0].definitions[0].definition;
            exampleDiv.innerHTML = "Example: " + data[0].meanings[0].definitions[0].example;

            partOfSpeechDiv.innerHTML = "Part of Speech: " + data[0].meanings[0].partOfSpeech

            originDiv.innerHTML = "Origin: " + data[0].origin;         

            phoneticDiv.innerHTML= "Phonetic: " + data[0].phonetic;

        }else if(language =="fr"){
            //pour changer les mots en français
            wordDiv.innerHTML = "Mot: " + data[0].word;
        
            
            definitionDiv.innerHTML = "Définition Principale: " + data[0].meanings[0].definitions[0].definition;
            exampleDiv.innerHTML = "Example: " + data[0].meanings[0].definitions[0].example;

            partOfSpeechDiv.innerHTML = "Partie du Dialogue: " + data[0].meanings[0].partOfSpeech

            originDiv.innerHTML = "Origine: " + data[0].origin;         

            phoneticDiv.innerHTML= "Phonetique: " + data[0].phonetic;
        }else if(language =="de"){
            wordDiv.innerHTML = "Wort: " + data[0].word;
        
            
            definitionDiv.innerHTML = "Hauptdefinition: " + data[0].meanings[0].definitions[0].definition;
            exampleDiv.innerHTML = "Beispiel: " + data[0].meanings[0].definitions[0].example;

            partOfSpeechDiv.innerHTML = "Teil der Rede: " + data[0].meanings[0].partOfSpeech

            originDiv.innerHTML = "Ursprung: " + data[0].origin;         

            phoneticDiv.innerHTML= "Phonetik: " + data[0].phonetic;
        }else if(language =="es"){
            wordDiv.innerHTML = "Palabra: " + data[0].word;
        
            
            definitionDiv.innerHTML = "Definición principal: " + data[0].meanings[0].definitions[0].definition;
            exampleDiv.innerHTML = "Ejemplo: " + data[0].meanings[0].definitions[0].example;

            partOfSpeechDiv.innerHTML = "Parte del discurso: " + data[0].meanings[0].partOfSpeech

            originDiv.innerHTML = "Origen: " + data[0].origin;         

            phoneticDiv.innerHTML= "Fonética: " + data[0].phonetic;
        }else if(language =="it"){
            wordDiv.innerHTML = "Parola: " + data[0].word;
        
            
            definitionDiv.innerHTML = "Definizione principale: " + data[0].meanings[0].definitions[0].definition;
            exampleDiv.innerHTML = "Esempio: " + data[0].meanings[0].definitions[0].example;

            partOfSpeechDiv.innerHTML = "Parte del discorso: " + data[0].meanings[0].partOfSpeech

            originDiv.innerHTML = "Origine: " + data[0].origin;         

            phoneticDiv.innerHTML= "Fonetica: " + data[0].phonetic;
        }else if(language =="ru"){
            wordDiv.innerHTML = "слово: " + data[0].word;
        
            
            definitionDiv.innerHTML = "основное определение: " + data[0].meanings[0].definitions[0].definition;
            exampleDiv.innerHTML = "пример: " + data[0].meanings[0].definitions[0].example;

            partOfSpeechDiv.innerHTML = "часть речи: " + data[0].meanings[0].partOfSpeech

            originDiv.innerHTML = "источник: " + data[0].origin;         

            phoneticDiv.innerHTML= "фонетика: " + data[0].phonetic;
        }


        

        
        document.querySelector('.audio-btn').addEventListener('click', playAudio);
        
        function playAudio(){
            audioDiv.src = data[0].phonetics[0].audio;
            audioDiv.play();
        }

    }



    get();
}