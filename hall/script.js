const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const loadMoreButton = document.querySelector("#load-more");

const country = "in";
const options = [
  "General",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "Environment",
  "Economy",
  "Politics",
];

let requestURL;
let currentPage = 1;
const pageSize = 10;

const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </div>
    <div class="news-content">
      <div class="news-title">
        ${item.title}
      </div>
      <div class="news-description">
      ${item.description || item.content || ""}
      </div>
      <a href="${item.url}" target="_blank" class="view-button">Read More</a>
    </div>`;
    container.appendChild(card);
  }
};

const getNews = async (url) => {
  container.innerHTML = "";
  let response = await fetch(url);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};

const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category.toLowerCase()}&pageSize=${pageSize}&apiKey=dcecf3660a1341d9bd8c655efa0b944e`;
  e.target.classList.add("active");
  currentPage = 1;
  getNews(requestURL);
};

const loadMoreNews = () => {
  currentPage++;
  let nextPageURL = `${requestURL}&page=${currentPage}`;
  getNews(nextPageURL);
};

const searchNews = () => {
  const query = searchInput.value;
  if (query.trim() !== "") {
    requestURL = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=dcecf3660a1341d9bd8c655efa0b944e`;
    getNews(requestURL);
  }
};

const init = () => {
  optionsContainer.innerHTML = "";
  getNews(requestURL);
  createOptions();
};

const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${
      i == "General" ? "active" : ""
    }" onclick="selectCategory(event,'${i}')">${i}</button>`;
  }
};

window.onload = () => {
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&pageSize=${pageSize}&apiKey=dcecf3660a1341d9bd8c655efa0b944e`;
  init();
  searchButton.addEventListener("click", searchNews);
  loadMoreButton.addEventListener("click", loadMoreNews);
};
