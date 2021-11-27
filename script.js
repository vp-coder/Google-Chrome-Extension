const url='https://icanhazdadjoke.com/slack';
fetch(url)
.then(data=>data.json())
.then(jokeData=>{
    const jokeText=jokeData.attachments[0].text;
    const jokeElement=document.getElementById('jokeElement');
    jokeElement.innerHTML=jokeText;
})
