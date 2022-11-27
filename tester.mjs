import fetch from 'node-fetch'

let fetcher = async function(){
    let response = await fetch("http://127.0.0.1:3001/enrich", {
        method: 'POST',
        mode: 'no-cors'
    })
    let responseJSON = await response.json()
    console.log(responseJSON)
}

console.log(fetcher())