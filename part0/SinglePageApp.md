::: mermaid
    sequenceDiagram
        participant browser
        participant server
        browser -->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/spa
        server ->> browser: the HTML document is return from the server
        browser -->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/main.css
        server ->> browser: the css file(main.css is return by the server)
        browser -->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/spa.js
        server ->> browser: the javascript file is return by the server (spa.js)
        browser -->> server: HTTP GET: https://studies.cs.helsinki.fi/exampleapp/data.json
        server ->> browser: [{content: "ew",date: "2023-02-22T13:02:41.817Z"},...]
:::