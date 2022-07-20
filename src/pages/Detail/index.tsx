import { useParams } from "react-router-dom";
import Navigator from "../../components/Navigator";
import { makeOriginalMovieImageUrl } from "../../utils";
import * as style from "./Detail.css";
import { useMovieDetail } from "./queries";

const Detail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isLoading } = useMovieDetail(Number(id ?? 0));

  if (!data || isLoading) {
    return null;
  }

  console.log(data);

  return (
    <>
      <Navigator isMain />
      <main className={style.container}>
        <div className={style.backgroundMovieImage} style={{ backgroundImage: `url(${makeOriginalMovieImageUrl(data.backdropPath)})` }} />
        <div className={style.contents}>
          <img className={style.contents__poster} src={makeOriginalMovieImageUrl(data.posterPath)} alt="poster image" />
          <div className={style.contents__description}>
            <h2>{data.title}</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default Detail;