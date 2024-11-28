

import { Movie, MovieResponse } from "@/types/movies";

async function fetchTrendingMovies(): Promise<MovieResponse> {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  if (!res.ok) throw new Error('Failed to fetch trending movies');
  return res.json();
}

export default async function HomePage() {
  const data = await fetchTrendingMovies();
  const movies: Movie[] = data.results;

  return (
    <div>
      <h2 className="font-bold mb-4">Trending Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {movies.map((movie) => (
          <div key={movie.id}  className="m-2">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : '/placeholder.png'
              }
              alt={movie.title}
              className="rounded-lg w-full"
            />
            <div className="text-left mt-2">
              <h3 className="font-semibold">{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
