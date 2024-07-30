export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

  async function fetchMovieData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2QyZDQ3Y2MzMzNkMmZmNTQ5MTIwNjI5YmVkNjk4NyIsIm5iZiI6MTcyMTkwNzAxMy45OTE3NTgsInN1YiI6IjY2YTIzNWZkOWE0MGU1ZjM5Y2UwZmVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_1TylKuTE_KpgVlq3AvMMGCgL4ktB28nLxppjKwM9g",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await response.json();
    return data.results;
  }
};
export const handleSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector("movie-title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const movieId = card.getAttribute("id");
      alert(`영화 ID: ${movieId}`);
    });
  });
});
