::: mermaid
    sequenceDiagram
        participant browser
        participant server
        browser -->> server: HTTP POST request to https://studies.cs.helsinki.fi/exampleapp/new_note
        server ->> browser: reponse: HTTP status code 302 (do a new HTTP GET request to the same address)
        browser --> server:  HTTP GET request to https://studies.cs.helsinki.fi/exampleapp/main.css
        server ->> browser: the css file
        browser -->> server:  HTTP GET request to https://studies.cs.helsinki.fi/exampleapp/main.js
        server ->> browser: the javascript file
        browser -->> server:  HTTP GET request to https://studies.cs.helsinki.fi/exampleapp/data.json
        server ->> browser: [{content: "heee",date: "2023-02-22T12:39:26.525Z"},...]
:::