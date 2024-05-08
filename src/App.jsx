import MovieCard from './Components/Movie.Card.jsx';
import moviesData from './Components/movieData.json';

const App = () => {
  return (
      <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1">
              {moviesData.map(movie => (
                  <div key={movie.id} className="mb-6">
                      <MovieCard
                          title={movie.title}
                          subtitle={movie.subtitle}
                          description={movie.description}
                          imageUrl={movie.imageUrl}
                          poster={movie.poster}
                          rating={movie.rating}
                          duration={movie.duration}
                          category={movie.category}
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};

export default App;
