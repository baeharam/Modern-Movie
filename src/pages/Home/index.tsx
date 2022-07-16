import { useTrendMovie } from "./queries"
import * as style from "./Home.css";

const Home = () => {
  const { data, isLoading } = useTrendMovie();

  if (!data || isLoading) {
    return <>"Loading..."</>;
  }


  return (
    <>
      <main className={style.container}>
        <div className={style.movieInfo}>
          <h2>Today's movie</h2>
          <p>{data.tagline}</p>
          <p>{data.title}</p>
        </div>
      </main>
      <div style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${data.backdropPath}")`,
      }} className={style.backgroundImage} />
    </>

  )
}

export default Home;