var express = require("express");
var app = express();
var round = Math.floor(Math.random() * 3 + 1);

app
  .post("/post", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query["data"]));
    var z = JSON.parse(req.query["data"]);

    if (z["action"] == "evaluatesing") {
      var p1 = z["choice"];
      var win = false;
      var pc = Math.floor(Math.random() * 3 + 1);
      var diff = z["diff"];
      if (diff == 1 || diff == 4) {
        // 1 is rock, 2 is paper, 3 is scissors
        if (
          (p1 == 1 && pc == 2) ||
          (p1 == 2 && pc == 3) ||
          (p1 == 3 && pc == 1)
        ) {
          win = false;
        } else if (
          (pc == 1 && p1 == 2) ||
          (pc == 2 && p1 == 3) ||
          (pc == 3 && p1 == 1)
        ) {
          win = true;
        } else if (pc == p1) {
          win = "tie";
        }
      } else if (diff == 2) {
        if (round == Math.floor(Math.random() * 3 + 1)) {
          win = true;
        } else {
          win = false;
        }
      }
      var jsontext = JSON.stringify({
        name: z["name"],
        p1win: win,
        diff: diff,
        action: "evaluatesing",
      });
      console.log(jsontext);
      res.send(jsontext);
    } else if (z["action"] == "evaluate") {
      var p1 = z["choice"];
      var p2 = z["choice2"];
      var win = false;
      if (
        (p1 == 1 && p2 == 2) ||
        (p1 == 2 && p2 == 3) ||
        (p1 == 3 && p2 == 1)
      ) {
        win = false;
      } else if (
        (p2 == 1 && p1 == 2) ||
        (p2 == 2 && p1 == 3) ||
        (p2 == 3 && p1 == 1)
      ) {
        win = true;
      } else if (p2 == p1) {
        win = "tie";
      }
      var jsontext = JSON.stringify({
        name: z["name"],
        name2: z["name2"],
        p1win: win,
        diff: diff,
        action: "evaluate",
      });
      console.log(jsontext);
      res.send(jsontext);
    } else {
      res.send(JSON.stringify({ msg: "error!!!" }));
    }
  })
  .listen(3000);
console.log("Server is running!");
