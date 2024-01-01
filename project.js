var P1SCORE = 0;
var PCSCORE = 0;
var name;
var name2;
var P1CHOICE = 0;
var P2CHOICE = 0;
var url = "http://localhost:3000/post";

window.onload = function () {
  $(".music").html(
    '<audio controls autoplay loop> <source src="images/op1.mp3"  type="audio/mpeg"> </audio>'
  );
  mainScreen();
};
function tutorial() {
  $("#menu").html("");
  alert(
    "Play the vid below to learn how to play the game! (pause music if not done already!)"
  );
  $(".music").css("visibility", "visible");
  $("#menu").html(
    '<video controls> <source src="images/tutorial.mp4"  type="video/mp4"> </video>'
  );
  var no = document.createElement("img");
  $(no).attr("id", "no");
  $(no).attr("src", "images/menu.png");
  $(no).click(function () {
    $(".music").css("visibility", "hidden");
    $("#menu").html("");
    mainScreen();
  });
  $("#menu").append(no);
  console.log("tutorial");
}

function mainScreen() {
  $(".music").css("visibility", "visible");
  var newImg = document.createElement("img");
  $(newImg).attr("id", "Title");
  $(newImg).attr("src", "images/Title.png");
  $("#title").append(newImg);
  var newImg = document.createElement("img");
  $(newImg).attr("id", "cont");
  $(newImg).attr("src", "images/continue.jpg");
  $(newImg).click(function () {
    createMenu();
    $(".music").css("visibility", "hidden");
  });
  $("#title").append(newImg);
}

/*
 * Creating the menu
 */
function createMenu() {
  $("#title").html("");

  //for(var i=1; i<=4; i++){
  var s = document.createElement("img");
  $(s).attr("id", "option1");
  $(s).attr("src", "images/option1.jpg");
  $(s).click(function () {
    game_mode(1);
  });
  $("#menu").append(s);

  var m = document.createElement("img");
  $(m).attr("id", "option2");
  $(m).attr("src", "images/option2.jpg");
  $(m).click(function () {
    game_mode(2);
  });
  $("#menu").append(m);

  var t = document.createElement("img");
  $(t).attr("id", "option3");
  $(t).attr("src", "images/option3.jpg");
  $(t).click(function () {
    game_mode(3);
  });
  $("#menu").append(t);

  var v = document.createElement("img");
  $(v).attr("id", "option4");
  $(v).attr("src", "images/option4.jpg");
  $(v).click(function () {
    game_mode(4);
  });
  $("#menu").append(v);
}
function easyorhard() {
  $("#menu").html("");
  var norm = document.createElement("img");
  $(norm).attr("id", "norm");
  $(norm).attr("src", "images/normal.png");
  $(norm).click(function () {
    character_select(1, true, 1);
  });
  $("#menu").append(norm);
  var hard = document.createElement("img");
  $(hard).attr("id", "hard");
  $(hard).attr("src", "images/impossible.png");
  $(hard).click(function () {
    character_select(1, true, 2);
  });
  $("#menu").append(hard);
}
function game_mode(op) {
  if (op == 1) {
    easyorhard();
  } else if (op == 2) {
    character_select(2, false, 3);
  } else if (op == 3) {
    training();
  } else if (op == 4) {
    tutorial();
  }
}
function character_select(n, sing, diff) {
  $("#menu").html("");

  if (sing == true) {
    alert(
      "Good Choice!, Now pick a character(Luffy, Zoro, Sanji or Law) and fight Doflamingo!"
    );
  }

  var char = document.createElement("img");
  $(char).attr("id", "char");
  $(char).attr("src", "images/charselect.jpg");
  $("#menu").append(char);
  var luffy = document.createElement("img");
  $(luffy).attr("id", "luffy");
  $(luffy).attr("src", "images/luffyhead.png");
  $(luffy).click(function () {
    var luff = document.createElement("img");
    $(luff).attr("id", "luff");
    $(luff).attr("src", "images/luffy.jpg");
    $("#menu").html("");
    $("#menu").append(luff);

    setTimeout(function () {
      $(luff).hide();

      if (n == 1 && sing == true) {
        name = "LUFFY";
        name2 = "DOFLAMINGO";
        rps(1, true, diff);
      }
      if (n == 1 && sing == false) {
        name2 = "LUFFY";
        rps(2, false, diff);
      }
      if (n == 2) {
        name = "LUFFY";
        character_select(n - 1, false, diff);
      }
    }, 2000);
  });
  $("#menu").append(luffy);

  var zoro = document.createElement("img");
  $(zoro).attr("id", "zoro");
  $(zoro).attr("src", "images/zorohead.png");
  $(zoro).click(function () {
    var zor = document.createElement("img");
    $(zor).attr("id", "zor");
    $(zor).attr("src", "images/zoro.png");
    $("#menu").html("");
    $("#menu").append(zor);

    setTimeout(function () {
      $(zor).hide();

      if (n == 1 && sing == true) {
        name = "ZORO";
        name2 = "DOFLAMINGO";
        rps(1, true, diff);
      }
      if (n == 1 && sing == false) {
        name2 = "ZORO";
        rps(2, false, diff);
      }
      if (n == 2) {
        name = "ZORO";
        character_select(n - 1, false, diff);
      }
    }, 2000);
  });
  $("#menu").append(zoro);

  var sanji = document.createElement("img");
  $(sanji).attr("id", "sanji");
  $(sanji).attr("src", "images/sanjihead.png");
  $(sanji).click(function () {
    var sanj = document.createElement("img");
    $(sanj).attr("id", "sanj");
    $(sanj).attr("src", "images/sanji.jpg");
    $("#menu").html("");
    $("#menu").append(sanj);

    setTimeout(function () {
      $(sanj).hide();

      if (n == 1 && sing == true) {
        name = "SANJI";
        name2 = "DOFLAMINGO";
        rps(1, true, diff);
      }
      if (n == 1 && sing == false) {
        name2 = "SANJI";
        rps(2, false, diff);
      }
      if (n == 2) {
        name = "SANJI";
        character_select(n - 1, false, diff);
      }
    }, 2000);
  });
  $("#menu").append(sanji);

  var law = document.createElement("img");
  $(law).attr("id", "law");
  $(law).attr("src", "images/lawhead.png");
  $(law).click(function () {
    var la = document.createElement("img");
    $(la).attr("id", "la");
    $(la).attr("src", "images/law.jpg");
    $("#menu").html("");
    $("#menu").append(la);

    setTimeout(function () {
      $(la).hide();

      if (n == 1 && sing == true) {
        name = "LAW";
        name2 = "DOFLAMINGO";
        rps(1, true, diff);
      }
      if (n == 1 && sing == false) {
        name2 = "LAW";
        rps(2, false, diff);
      }
      if (n == 2) {
        name = "LAW";
        character_select(n - 1, false, diff);
      }
    }, 2000);
  });
  $("#menu").append(law);
}
function rps(n, sing, diff) {
  $("#menu").html("");
  $("#score").html("");
  $("#score2").html("");
  game_score();
  if (P1SCORE >= 3 || PCSCORE >= 3) {
    game_result(P1SCORE, PCSCORE, sing, diff);
  } else {
    if (sing == true || n == 2) {
      P1CHOICE = 0;
      P2CHOICE = 0;
    }
    if (sing == false && n == 2) {
      alert(name + "'S TURN! " + name2 + " NO PEEKING!");
    } else if (sing == false && n == 1) {
      alert(name2 + "'S TURN! " + name + " NO PEEKING!");
    }
    var choose = document.createElement("img");
    $(choose).attr("id", "choose");
    $(choose).attr("src", "images/choose.jpg");
    $("#menu").append(choose);
    var rock = document.createElement("img");
    $(rock).attr("id", "rock");
    $(rock).attr("src", "images/rock.png");
    $(rock).click(function () {
      if (sing == true) {
        var dec = confirm("Are You Sure " + name + "?");
        if (dec == true) {
          console.log(diff);
          P1CHOICE = 1;
          $.post(
            url +
              "?data=" +
              JSON.stringify({
                name: name,
                choice: P1CHOICE,
                diff: diff,
                action: "evaluatesing",
              }),
            response
          );
        }
      } else if (sing == false) {
        if (n == 1) {
          var dec = confirm("Are You Sure " + name2 + "?");
          if (dec == true) {
            P2CHOICE = 1;
            //result(P1CHOICE,P2CHOICE);
            $.post(
              url +
                "?data=" +
                JSON.stringify({
                  name: name,
                  name2: name2,
                  choice: P1CHOICE,
                  choice2: P2CHOICE,
                  action: "evaluate",
                }),
              response
            );
          }
        } else if (n == 2) {
          var dec = confirm("Are You Sure " + name + "?");
          if (dec == true) {
            P1CHOICE = 1;
            rps(n - 1, false);
          }
        }
      }
    });
    $("#menu").append(rock);
    var paper = document.createElement("img");
    $(paper).attr("id", "paper");
    $(paper).attr("src", "images/paper.png");
    $(paper).click(function () {
      if (sing == true) {
        var dec = confirm("Are You Sure " + name + "?");
        if (dec == true) {
          console.log(diff);
          P1CHOICE = 2;
          //result(P1CHOICE,0);
          $.post(
            url +
              "?data=" +
              JSON.stringify({
                name: name,
                choice: P1CHOICE,
                diff: diff,
                action: "evaluatesing",
              }),
            response
          );
        }
      } else if (sing == false) {
        if (n == 1) {
          var dec = confirm("Are You Sure " + name2 + "?");
          if (dec == true) {
            P2CHOICE = 2;
            //result(P1CHOICE,P2CHOICE);
            $.post(
              url +
                "?data=" +
                JSON.stringify({
                  name: name,
                  name2: name2,
                  choice: P1CHOICE,
                  choice2: P2CHOICE,
                  action: "evaluate",
                }),
              response
            );
          }
        } else if (n == 2) {
          var dec = confirm("Are You Sure " + name + "?");
          if (dec == true) {
            P1CHOICE = 2;
            rps(n - 1, false);
          }
        }
      }
    });
    $("#menu").append(paper);
    var sciss = document.createElement("img");
    $(sciss).attr("id", "sciss");
    $(sciss).attr("src", "images/scissors.png");
    $(sciss).click(function () {
      if (sing == true) {
        var dec = confirm("Are You Sure " + name + "?");
        if (dec == true) {
          P1CHOICE = 3;
          console.log(diff);
          // result(P1CHOICE,0);
          $.post(
            url +
              "?data=" +
              JSON.stringify({
                name: name,
                choice: P1CHOICE,
                diff: diff,
                action: "evaluatesing",
              }),
            response
          );
        }
      } else if (sing == false) {
        if (n == 1) {
          var dec = confirm("Are You Sure " + name2 + "?");
          if (dec == true) {
            P2CHOICE = 3;
            //result(P1CHOICE,P2CHOICE);
            $.post(
              url +
                "?data=" +
                JSON.stringify({
                  name: name,
                  name2: name2,
                  choice: P1CHOICE,
                  choice2: P2CHOICE,
                  action: "evaluate",
                }),
              response
            );
          }
        } else if (n == 2) {
          var dec = confirm("Are You Sure " + name + "?");
          if (dec == true) {
            P1CHOICE = 3;
            rps(n - 1, false);
          }
        }
      }
    });
    $("#menu").append(sciss);
  }
}

function game_result(score1, score2, sing, diff) {
  if (score1 >= 3) {
    var p1win = document.createElement("img");
    $(p1win).attr("id", "p1win");
    $(p1win).attr("src", "images/p1dub.png");
    var op = document.createElement("img");
    $(op).attr("id", "op");
    $(op).attr("src", "images/onepiece.png");
    $("#menu").html("");
    $("#menu").append(p1win);
    $("#menu").append(op);
    $("#score").html("");
    $("#score2").html("");
    game_score();

    setTimeout(function () {
      $(op).hide();
      $(p1win).hide();
      PCSCORE = 0;
      P1SCORE = 0;
      $("#score").html("");
      $("#score2").html("");
      play_again(sing, diff);
    }, 5000);
  } else if (score2 >= 3) {
    var pcwin = document.createElement("img");
    $(pcwin).attr("id", "pcwin");
    if (sing == true) {
      $(pcwin).attr("src", "images/opdub.png");
    } else if (sing == false) {
      $(pcwin).attr("src", "images/p2dub.png");
    }
    var op = document.createElement("img");
    $(op).attr("id", "op");
    $(op).attr("src", "images/onepiece.png");
    $("#menu").html("");
    $("#menu").append(pcwin);
    $("#menu").append(op);
    $("#score").html("");
    $("#score2").html("");
    game_score();

    setTimeout(function () {
      $(op).hide();
      $(pcwin).hide();
      PCSCORE = 0;
      P1SCORE = 0;
      $("#score").html("");
      $("#score2").html("");

      play_again(sing, diff);
    }, 5000);
  }
}
function play_again(sing, diff) {
  var replay = document.createElement("img");
  $(replay).attr("id", "replay");
  $(replay).attr("src", "images/again.png");
  $("#menu").append(replay);
  var yes = document.createElement("img");
  $(yes).attr("id", "yes");
  $(yes).attr("src", "images/yes.png");
  $(yes).click(function () {
    if (sing == true) {
      rps(1, true, diff);
    } else if (sing == false) {
      rps(2, false, diff);
    }
  });
  $("#menu").append(yes);
  var no = document.createElement("img");
  $(no).attr("id", "no");
  $(no).attr("src", "images/menu.png");
  $(no).click(function () {
    $("#menu").html("");
    mainScreen();
  });
  $("#menu").append(no);
}
function game_score() {
  $("#score").append(name + ":" + P1SCORE);
  if (name2 != undefined) {
    $("#score2").append(name2 + ":" + PCSCORE);
  } else {
    $("#score2").append("DOFLAMINGO:" + PCSCORE);
  }
}
function training() {
  $("#menu").html("");
  name = "P1";
  name2 = "BOT";
  alert(
    "Welcome to training! Hone your skills for later when you take on Dofalamingo or a friend!"
  );
  rps(1, true, 4);
  console.log("training");
}

function response(data) {
  var response = JSON.parse(data);
  console.log(data);
  if (response["action"] == "evaluatesing") {
    var p1win = response["p1win"];
    var diff = response["diff"];
    if (p1win == true) {
      var chop = document.createElement("img");
      $(chop).attr("id", "chop");
      if (name == "LUFFY") {
        $(chop).attr("src", "images/lufbod.png");
      } else if (name == "ZORO") {
        $(chop).attr("src", "images/zorbod.png");
      } else if (name == "SANJI") {
        $(chop).attr("src", "images/sanbod.png");
      } else if (name == "LAW") {
        $(chop).attr("src", "images/lawbod.png");
      }
      var p1w = document.createElement("img");
      $(p1w).attr("id", "p1w");
      $(p1w).attr("src", "images/p1win.png");
      $("#menu").html("");
      $("#menu").append(p1w);
      $("#menu").append(chop);

      setTimeout(function () {
        $(chop).hide();
        $(p1w).hide();
        P1SCORE++;
        $("#score").html("");
        $("#score2").html("");

        rps(1, true, diff);
      }, 2000);
    } else if (p1win == false) {
      var doffy = document.createElement("img");
      $(doffy).attr("id", "doffy");
      if (diff != 4) {
        $(doffy).attr("src", "images/doffy.png");
      }
      var pcw = document.createElement("img");
      $(pcw).attr("id", "pcw");
      $(pcw).attr("src", "images/opwin.png");
      $("#menu").html("");
      $("#menu").append(pcw);
      $("#menu").append(doffy);

      setTimeout(function () {
        $(doffy).hide();
        $(pcw).hide();
        PCSCORE++;
        $("#score").html("");
        $("#score2").html("");

        rps(1, true, diff);
      }, 2000);
    } else if (p1win == "tie") {
      var chop = document.createElement("img");
      $(chop).attr("id", "chop");
      $(chop).attr("src", "images/chopper.png");
      var tie = document.createElement("img");
      $(tie).attr("id", "tie");
      $(tie).attr("src", "images/tie.jpg");
      $("#menu").html("");
      $("#menu").append(tie);
      $("#menu").append(chop);

      setTimeout(function () {
        $(chop).hide();
        $(tie).hide();
        $("#score").html("");
        $("#score2").html("");
        rps(1, true, diff);
      }, 2000);
    }
  } else if (response["action"] == "evaluate") {
    var p1win = response["p1win"];
    if (p1win == true) {
      var chop = document.createElement("img");
      $(chop).attr("id", "chop");
      if (name == "LUFFY") {
        $(chop).attr("src", "images/lufbod.png");
      } else if (name == "ZORO") {
        $(chop).attr("src", "images/zorbod.png");
      } else if (name == "SANJI") {
        $(chop).attr("src", "images/sanbod.png");
      } else if (name == "LAW") {
        $(chop).attr("src", "images/lawbod.png");
      }
      var p1w = document.createElement("img");
      $(p1w).attr("id", "p1w");
      $(p1w).attr("src", "images/p1win.png");
      $("#menu").html("");
      $("#menu").append(p1w);
      $("#menu").append(chop);

      setTimeout(function () {
        $(chop).hide();
        $(p1w).hide();
        P1SCORE++;
        $("#score").html("");
        $("#score2").html("");

        rps(2, false);
      }, 2000);
    } else if (p1win == false) {
      var doffy = document.createElement("img");
      $(doffy).attr("id", "doffy");
      if (name2 == "LUFFY") {
        $(doffy).attr("src", "images/lufbod.png");
      } else if (name2 == "ZORO") {
        $(doffy).attr("src", "images/zorbod.png");
      } else if (name2 == "SANJI") {
        $(doffy).attr("src", "images/sanbod.png");
      } else if (name2 == "LAW") {
        $(doffy).attr("src", "images/lawbod.png");
      }
      var pcw = document.createElement("img");
      $(pcw).attr("id", "pcw");
      $(pcw).attr("src", "images/p2win.png");
      $("#menu").html("");
      $("#menu").append(pcw);
      $("#menu").append(doffy);

      setTimeout(function () {
        $(doffy).hide();
        $(pcw).hide();
        PCSCORE++;
        $("#score").html("");
        $("#score2").html("");

        rps(2, false);
      }, 2000);
    } else if (p1win == "tie") {
      var chop = document.createElement("img");
      $(chop).attr("id", "chop");
      $(chop).attr("src", "images/chopper.png");
      var tie = document.createElement("img");
      $(tie).attr("id", "tie");
      $(tie).attr("src", "images/tie.jpg");
      $("#menu").html("");
      $("#menu").append(tie);
      $("#menu").append(chop);

      setTimeout(function () {
        $(chop).hide();
        $(tie).hide();
        $("#score").html("");
        $("#score2").html("");
        rps(2, false);
      }, 2000);
    }
  }
}
