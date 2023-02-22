::: mermaid
    sequenceDiagram
        participant browser
        participant server
        browser ->> server: HTTP POST: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        server -->> browser:  HTTP status code 302
        browser ->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/main.css
        server -->> browser: the css file
        browser ->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/spa.js
        server -->> browser: the javascript file (spa.js)
        browser ->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/data.json
        server -->> browser: [{content: "ew",date: "2023-02-22T13:02:41.817Z"},...]
:::