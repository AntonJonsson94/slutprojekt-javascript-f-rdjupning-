const loginBtn = document.querySelector("#submit") as HTMLInputElement;
const loginCard = document.querySelector("#container") as HTMLDivElement;

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
});

const apiUrl = "https://api.themoviedb.org/3/search/movie";
const apiKey = "?api_key=aa5ee409d52ded21ba46b85a22480907";
const Url =
    "https://api.themoviedb.org/3/search/movie?api_key=aa5ee409d52ded21ba46b85a22480907";
const search = "?query=";
const movie = "heat";

console.log(apiUrl + search + movie + apiKey);

async function getMovie() {
    const response = await fetch(Url);

    const data = await response.json();
    console.log(data);
}
getMovie();
