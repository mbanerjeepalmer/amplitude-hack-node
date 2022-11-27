import fetch from "node-fetch";
import express from "express";
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type("html").send(html));

let stormData = [
  { date: "2022-02-02", label: "Storm Albert" },
  { date: "2022-04-11", label: "Storm Boycie" },
  { date: "2022-05-09", label: "Storm Cassandra" },
  { date: "2022-08-28", label: "Storm Denzil" },
  { date: "2022-10-20", label: "Storm Edward" },
  { date: "2022-11-15", label: "Storm Freddie" },
];

let dummyfetch = async function(date, label) {
	
	const data = await fetch(`https://amplitude.com/api/2/annotations?app_id=424045&date=${date}&label=${label}&chart_id=vw4igzs&details=`, {
    headers: {
      'Authorization': "Basic ODdjODUxZDM5YjhkZGE0ZjFlYWY0NzdiM2MyNDdhNDI6ZDU3OTY4MDljNTg2YmVlZDU3YWZhYzExZmE5NzA0Zjc=",
    },
    method: 'POST',
	  redirect: 'follow'
  })
	  .then(response => response.text())
	console.log(data)
} 

let postStorms = function () {
  for (const storm of stormData) {
    dummyfetch(storm.date, storm.label);
  }
};

app.post("/enrich", (req, res) => {
  postStorms();
  res.json({ annotations: "4" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`;
