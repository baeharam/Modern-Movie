import { useQuery } from "react-query"
import { QueryKeys } from "../../constants"
import { makeMovieDetailGetter } from "../Home/queries";


export const useMovieDetail = (id: number) => {
  const queryResult = useQuery([QueryKeys.MOVIE_DETAIL, id], makeMovieDetailGetter(id));

  return queryResult;
}