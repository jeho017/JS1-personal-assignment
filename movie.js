const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2QyZDQ3Y2MzMzNkMmZmNTQ5MTIwNjI5YmVkNjk4NyIsIm5iZiI6MTcyMTkwNzAxMy45OTE3NTgsInN1YiI6IjY2YTIzNWZkOWE0MGU1ZjM5Y2UwZmVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_1TylKuTE_KpgVlq3AvMMGCgL4ktB28nLxppjKwM9g",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

document.addEventListener("DOMContentLoaded", function () {
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const movieId = card.getAttribute("id");
      alert(`영화 ID: ${movieId}`);
    });
  });
});
