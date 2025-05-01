// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function checkTriangleType() {
  const lengthA = parseFloat(document.getElementById('sideA').value)
  const lengthB = parseFloat(document.getElementById('sideB').value)
  const lengthC = parseFloat(document.getElementById('sideC').value)
  let typeOfTriangle

  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  const sumOfAngles = Number(angleA.toFixed(2)) + Number(angleB.toFixed(2)) + Number(angleC.toFixed(2))

  if (sumOfAngles !== 180) {
    typeOfTriangle = ('These sides do not form a triangle.')
  } else if (lengthA === lengthB && lengthB === lengthC) {
    typeOfTriangle = ('This is an equilateral triangle.')
  } else if (lengthA === lengthB || lengthB === lengthC || lengthA === lengthC) {
    typeOfTriangle = ('This is an isosceles triangle.')
  } else {
    typeOfTriangle = ('This is a scalene triangle.')
  }

  document.getElementById('result').innerHTML = `<p><strong>${typeOfTriangle}</strong></p>`
}
