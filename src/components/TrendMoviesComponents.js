import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import { POSTER_IMAGE } from '../config';
import { GET } from '../API';
import Styles from '../style/Styles';

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
          renderItem={item => displayMovies(item, props)}
        />
      </View>
    </View>
  );
};

const displayMovies = ({ item }, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('Detail', { movieId: item.id });
      }}
      style={{ marginHorizontal: 10 }}>
      <Image
        source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
        style={Styles.posterImage}
      />
      {console.log('-----------' + item.original_title + '-----------')}
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};

export default TrendMoviesComponents;
