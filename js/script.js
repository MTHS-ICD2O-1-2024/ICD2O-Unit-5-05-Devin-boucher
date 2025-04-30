// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function checkNumber () {
  let age = parseFloat(document.getElementById('age').value)
  const day = document.getElementById('day').value

  if (((age > 12) && (age < 21)) || (day === 'Tuesday') || (day === 'Thursday')) {
    age = ('You get a discount at the museum!')
  } else {
    age = ('You must pay full price at the museum.')
  }

  document.getElementById('result').innerHTML = `<p><strong>${age}</strong></p>`
}
