async function getMovies(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  const data = await res.json();

  return data;
}

export default getMovies;
