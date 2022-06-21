import {StyleSheet} from 'react-native';
import Constants from '../Constants';


const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    flex: 1
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: Constants.fadedColor,
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 170,
    borderRadius: 10,
  },
  movieTitle: {
    color: Constants.textColor,
    width: 170,
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  imageBg: {
    width: '100%',
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: Constants.textColor,
    textAlign: 'center',
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: Constants.textColor,
    fontSize: 16,
  },
});

export default Styles;
