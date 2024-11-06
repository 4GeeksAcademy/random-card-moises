/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["spade", "heart", "club", "diamond"];

function getRandomSuit() {
  const randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

window.onload = function() {
  const card = document.getElementById("randomCard");
  const randomSuit = getRandomSuit();
  card.classList.add(randomSuit);
  const randomNumber = getRandomNumber();
  const cardNumberElement = document.getElementById("cardNumber");
  cardNumberElement.textContent = randomNumber;
};
