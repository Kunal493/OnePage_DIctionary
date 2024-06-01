document.getElementById("search-button").
addEventListener("click", function() 
{
    let word = document.getElementById("inputbox").value;
    if(word)
    {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("[data]", data);
            const definition = data[0].meanings[0]
            .definitions[0].definition;
            document.getElementById("answer")
            .innerText = definition;
        })
        .catch((error) => {
            document.getElementById("answer")
            .innerText = "word not found";
            console.error("error fetching the definition:",error);
        });

    }
    else
    {
        document.getElementById("answer").
        innerText = "please enter a word";
    }
});
