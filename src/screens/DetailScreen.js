import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../config';
import {GET} from '../API';
import Styles from '../style/Styles';
import Icon from 'react-native-vector-icons/Entypo';
import Constants from '../Constants';
import Loader from '../components/Loader';
import moment from 'moment-timezone';

const DetailScreen = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  console.log(details)

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={Styles.sectionBg}>
            {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
          <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          </View>
          <Text style={Styles.detailsMovieTitle}>{details.title}</Text>

          <Text style={Styles.title}>Synopsis</Text>
          <Text style={Styles.overview}>{details.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>Budget</Text>
              <Text style={Styles.details}> {details.budget} $</Text>
            </View>

            <View>
              <Text style={Styles.heading}>Durée</Text>
              <Text style={Styles.details}>{details.runtime} min</Text>
            </View>

            <View>
              <Text style={Styles.heading}>Date de sortie</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
            <View>
              <Text style={Styles.heading}>Popularité</Text>
              <Text style={Styles.details}>{details.popularity} / 100</Text>
            </View>
          </View>

          <Text style={Styles.heading}>Genre</Text>
          <View style={{ flexDirection: 'row', alignSelf:'center'}}>
            {getGenre()}
          </View>
        </View>
              )}
    </ScrollView>
  );
};
export default DetailScreen;
