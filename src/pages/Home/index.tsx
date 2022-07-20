import { useTrendMovie } from "./queries"
import * as style from "./Home.css";
import Navigator from "../../components/Navigator";
import { Link } from "react-router-dom";
import { makeOriginalMovieImageUrl } from "../../utils";

const Home = () => {
  const { data, isLoading } = useTrendMovie();

  if (!data || isLoading) {
    return <>"Loading..."</>;
  }


  return (
    <>
      <Navigator />
      <main className={style.container}>
        <div className={style.movieInfo}>
          <h2>Today's movie</h2>
          <p>{data.tagline}</p>
          <p>{data.title}</p>
          <Link to={`/detail/${data.id}`} className={style.moreButton}>MORE</Link>
        </div>
      </main>
      <div style={{
        backgroundImage: `url(${makeOriginalMovieImageUrl(data.backdropPath)})`,
      }} className={style.backgroundImage} />
    </>

  )
}

export default Home;