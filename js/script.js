// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 22 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-JS/sw.js", {
    scope: "/ICS2O-Unit5-03-JS/",
  })
}

/**
 * This function displays the user's movie age rating.
 */
function ageRating() {
  // input
  const age = parseInt(document.getElementById("age").value)

  // process
  if (age >= 17) {
    document.getElementById("watchable").innerHTML =
      "My watchable movies: You're old enough to watch any R movie alone. Congrats!"
  } else if (age >= 13) {
    document.getElementById("watchable").innerHTML =
      "My watchable movies: You can watch PG-13 movies alone."
  } else if (age >= 5) {
    document.getElementById("watchable").innerHTML =
      "My watchable movies: You're pretty young... let's stick to G or PG for now."
  } else {
    document.getElementById("watchable").innerHTML =
      "I'm surprised you even found this site... go watch some cocomelon kid."
  }
}
