const myImg = document.querySelector("img");
const mySearch = document.createElement("input");
const myError = document.createElement("p");

async function fetchImg(input) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=BUa8hCSs17AgWRqHqwEeATY11WnXwUUU&s=${input}`,
    { mode: "cors" }
  );
  const inputData = await response.json();
  myImg.src = inputData.data.images.original.url;
}

const myBtn = document.createElement("button");
myBtn.textContent = "Search Gif";
myBtn.addEventListener("click", () => {
  fetchImg(mySearch.value);
});

document.body.append(mySearch, myBtn);
