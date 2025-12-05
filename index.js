let homePointsEl = document.getElementById("home-points")
let guestPointsEl = document.getElementById("guest-points")

let homePoints = 0
let guestPoints = 0;

function addPoints(team, points) {
    if (team === "home") {
        homePoints += points
        homePointsEl.textContent = homePoints
    } else if (team === "guest") {
        guestPoints += points
        guestPointsEl.textContent = guestPoints
    }
}

function resetScores() {
    homePoints = 0
    guestPoints = 0
    homePointsEl.textContent = homePoints
    guestPointsEl.textContent = guestPoints
}