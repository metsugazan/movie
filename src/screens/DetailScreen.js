import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../config';
import {GET} from '../API';
import Styles from '../style/Styles';
import Loader from '../components/Loader';
import Icon from 'react-native-vector-icons/AntDesign';
import Constants from '../Constants';


const DetailScreen = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const [movies, setMovies] = useState();
  const [like,setLike] = useState(typeof(like_) == "undefined" ? 0 : like_)
  const [liked,setLiked] = useState(false)

  useEffect(() => {
      if (like <= 0){
          setLike(like)
      } 

  },[])

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
          <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10, borderRadius: 20, padding: 8, backgroundColor: Constants.baseColor,  elevation: 1, zIndex: 1 }}
        onPress={() => {
            
            setLike(Number(like)+(liked ? -1 : 1))
            setLiked(!liked)
        }}>
        <Icon name={liked ? "like2" : "like1"} size={24} color={Constants.secondaryColor} />
    </TouchableOpacity>
    {(details.backdrop_path == null) &&
          <Image
          source={require('../images/travolta.gif')}
              style={Styles.imageBgNull}
            />
          }

{(details.backdrop_path != null) &&
          <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          }
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
              <Text style={Styles.heading}>Note</Text>
              <Text style={Styles.details}>{details.vote_average} / 10</Text>
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
