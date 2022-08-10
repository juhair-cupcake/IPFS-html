const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: `ipfs.infura.io`,
  port: 5001,
  protocol: `https`,
});

const data = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Juhu NOOB</title>
  </head>
  <style>
    body {
      margin: 0;
    }
    nav {
      background-color: aquamarine;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: xx-large;
      padding: 10px 15px;
    }
    .logo-red {
      color: red;
      background-color: black;
    }
    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
    .nav-list > li {
      padding: 10px 15px;
    }
  </style>
  <body>
    <nav>
      <div class="logo">
        <span class="logo-red"> < </span> LOGO
        <span class="logo-red"> /> </span>
      </div>
      <ul class="nav-list">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
    <section>
      <h1>HELLO I'm JUHU</h1>
    </section>
    <script>console.log("lol");</script>
  </body>
</html>
`;

ipfs.add(data, (err, hash) => {
  if (err) return console.log(err);
  console.log(`https://ipfs.infura.io/ipfs/` + hash);
});
