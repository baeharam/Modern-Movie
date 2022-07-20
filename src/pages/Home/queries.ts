import { useMemo } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance, QueryKeys } from "../../constants"

interface TrendingMovieWeekResult {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  popularity: number;
}

interface TrendingMovieWeek {
  page: number;
  results: TrendingMovieWeekResult[];
  totalPages: number;
  totalResults: number;
}

interface MovieDetail {
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  id: number;
  tagline: string;
}

const getTrendMovie = () => axiosInstance.get<TrendingMovieWeek>("/trending/movie/week").then(({ data }) => data);
export const makeMovieDetailGetter = (id: number) => () => axiosInstance.get<MovieDetail>(`/movie/${id}`).then(({ data }) => data);

export const useTrendMovie = () => {
  const { data } = useQuery([QueryKeys.MOVIE_TREND], getTrendMovie);

  const randomIndex = useMemo(() => Math.floor(Math.random() * (data?.results?.length ?? 0)), [data]);
  const randomMovie = data?.results[randomIndex];

  const queryResult = useQuery([QueryKeys.MOVIE_DETAIL, randomMovie?.id], makeMovieDetailGetter(randomMovie?.id ?? 0), {
    enabled: !!randomMovie?.id,
  })

  return queryResult;
};