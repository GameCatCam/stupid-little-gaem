window.alert("Hi there! Is this thing on???")
window.confirm("Do youwu want to ply a gaem???")
window.alert("Ill take dat as a yes! ok one sec, I gotta find my fings...")
var x = window.prompt("Okay!! I fownd dem! Pick one of these pleas R, S, or P...")

var playerChoice = x
var computerOpponent = Math.random()
var playerCount = 0
var opponentCount = 0

if (computerOpponent <= 0.34) {
    computerOpponent = "R"
} else if (computerOpponent <= 0.67) {
    computerOpponent = "P"
} else {
    computerOpponent = "S"
}

function startGaem() {
    var x = window.prompt("Okay!! I fownd dem! Pick one of these pleas R, S, or P...")

    console.log(computerOpponent)
    console.log(playerChoice)

    var verdict = function(x, y) {
        if (x === y) {
            window.alert("wut da heck! We tied???\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
        } else {
            if (x === "R") {
                if (y === "S") {
                    window.alert("wut! you beet my S with your R!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                } else {
                    window.alert("HA! I beat your R with my P!!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                } 
            }
            if (x === "P") {
                if (y === "R") {
                    window.alert("hhuh!?! were'd you get that P from???\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                } else {
                    window.alert("HAHA, you didnt expect my S!!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                }
            }
            if (x === "S") {
                if (y === "P") {
                    window.alert("????... i didnt kno you had S... :(\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                } else {
                    window.alert("YES!!! i had a R da whole time!!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                }
            }
        }
    }
}

var verdict = function(x, y) {
    if (x === y) {
        window.alert("wut da heck! We tied???\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
    } else {
        if (x === "R") {
            if (y === "S") {
                window.alert("wut! you beet my S with your R!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                playerCount++
            } else {
                window.alert("HA! I beat your R with my P!!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                opponentCount++
            } 
        }
        if (x === "P") {
            if (y === "R") {
                window.alert("hhuh!?! were'd you get that P from???\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                playerCount++
            } else {
                window.alert("HAHA, you didnt expect my S!!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                opponentCount++
            }
        }
        if (x === "S") {
            if (y === "P") {
                window.alert("????... i didnt kno you had S... :(\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                playerCount++
            } else {
                window.alert("YES!!! i had a R da whole time!!!!\n\n Player Choice: " + playerChoice + "\n Opponent Choice: " + computerOpponent)
                opponentCount++
            }
        }
    }
}
verdict(playerChoice, computerOpponent)
window.alert("Okie... it loks lyke dis is da count!\n" + "Wins: " + playerCount + "\nLosses: " + opponentCount)
var replay = window.confirm("... do you wana play agaen?")

if (replay === true) {
    window.alert("YAYYYY!!! Ok! one sec...")
    startGaem();
}

