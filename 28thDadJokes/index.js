const jokeEl = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");
generatejoke();
function generatejoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
btn.addEventListener("click", generatejoke);
