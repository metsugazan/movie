import {StyleSheet} from 'react-native';
import Constants from '../Constants';


const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    flex: 1,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight:'bold',
    color: Constants.secondaryColor,
    margin: 10,
  },
  heading: {
    fontSize: 16,
    color: Constants.fadedColor,
    margin: 10,
    fontWeight:'bold',
    alignSelf:'center',
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
    fontWeight: 'bold',
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
    marginLeft: 5,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Constants.secondaryColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginBottom: 20
  },
  genre: {
    color: Constants.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchbar: {
    height: 45,
    flexDirection: 'row-reverse',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: 'lightgray',
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5
}
});

export default Styles;
