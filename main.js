const number = document.getElementById("number");
const text = document.querySelector(".text");
const button = document.querySelector(".green-button");

button.addEventListener("click", function () {
  advice();
});

const advice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  // console.log(response);
  const data = await response.json();
  console.log(data);
  const id = data.slip.id;
  const advice = data.slip.advice;
  console.log(id,advice)
  number.textContent = id
  text.textContent = advice

};
