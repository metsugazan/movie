import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { GET } from '../API';
import Styles from '../style/Styles';


import DisplayMoviesComponent from './DisplayMoviesComponent';

const TrendMoviesComponents = props => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(props.url);
      setMovies(data.results);
    };

    getMovies();
  }, []);

  return (
    <View>
      {console.log(movies)}
      <View>
        <Text style={Styles.title}>{props.title}</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={movies?.slice(0, 5)}
          numColumns={2}
          style={{ alignSelf: 'center', marginVertical: 10 }}
          renderItem={item => DisplayMoviesComponent(item, props)}
        />
      </View>
    </View>
  );
};


export default TrendMoviesComponents;
