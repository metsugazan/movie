import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Styles from '../style/Styles';
import Constants from '../Constants';

import { Searchbar } from 'react-native-paper';
import { GET } from '../API.js'

import TrendMoviesComponents from '../components/TrendMoviesComponents';
import DetailScreen from './DetailScreen'

export default function SearchScreen() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const setAllMoviesList = async () => {

    const allMovies = await GET({ query: searchQuery })
      .then(response => {
        setMovies(response.movies)
      })
      console.log("------" + allMovies + "------")
  }

  console.log("---1---" + movies + "------")
  return (
    <View style={Styles.sectionBg}>
      <Text style={Styles.title}>Recherche</Text>
      <Searchbar
        placeholder="Rechercher un film"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onBlur={() => setAllMoviesList()}
        color={Constants.baseColor}
        placeholderTextColor={Constants.fadedColor}
        iconColor={Constants.secondaryColor}
        style={Styles.searchbar}
      />

<TrendMoviesComponents
        title="Votre recherche : "
        url="/movie/top_rated"
        //navigation={props.navigation}
      />

      {/*<FlatList
        data={movies}
        renderItem={({ item }) => {
          return (
            <TrendMoviesComponents synopsis={item.overview} name={item.title} picture={item.poster_path} metascore={item.vote_average} />
          )
        }
        }
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />*/}


    </View>
  );
}