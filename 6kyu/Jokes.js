async function sayJoke(apiUrl, jokeId) {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        if (!Array.isArray(data.jokes)) {
            throw new Error(`No jokes at url: ${apiUrl}`)
        }
        const joke = data.jokes.find(i => i.id === jokeId)
        if (!joke) {
            throw new Error(`No jokes at: ${apiUrl}`)
        }
        return {
            saySetup: () => joke.setup,
            sayPunchLine: () => joke.punchline
        };
    } catch (error) {
        console.log(error)
    }

}
sayJoke('http://great.jokes/christmas', 101).then(joke=>console.log(joke)).catch(error=>console.log(error))