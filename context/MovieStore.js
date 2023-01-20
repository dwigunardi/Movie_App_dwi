import {View, Text} from 'react-native';
import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const MovieContext = createContext({
  empty: true,
});

export const MovieList = ({children}) => {
  const [createBy, setCreatedBy] = useState('');
  const [description, setDescription] = useState('');
  const [listIdApi, setListIdApi] = useState('');
  const [favoriteCount, setFavoriteCount] = useState('');
  const [user, setUser] = useState('');
  const [movieItem, setMovieItem] = useState([]);

  const apiKey = '55ae8efc4a97b7f0af0cfa1de1ba2a45';
  const url = 'https://api.themoviedb.org/3/list/1?api_key=';
  const accesss_token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWFlOGVmYzRhOTdiN2YwYWYwY2ZhMWRlMWJhMmE0NSIsInN1YiI6IjYzOTMwOGQxNmUwZDcyMDBkMzRkZmFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlvWk0NINMcxlGwYAyBJxndMX9w2U0gcAmQBnFD8hPs';

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url + apiKey, {
        signal: controller.signal,
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(res => {
        // console.log(res.data.created_by)
        setCreatedBy(res.data.created_by);
        setDescription(res.data.description);
        setListIdApi(res.data.id);
        setFavoriteCount(res.data.favorite_count);
        setMovieItem(res.data.items);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const InjectData = {
    item: movieItem,
    user: () => console.log('hy'),
  };

  return (
    <MovieContext.Provider value={InjectData}>{children}</MovieContext.Provider>
  );
};
