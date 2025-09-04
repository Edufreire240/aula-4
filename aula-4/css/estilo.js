import{StyleSheet} from 'react-native';

const laranja1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cx1: {
    height: 200,
    width: 230,
    borderWidth: 2,
    borderColor: '#c00',
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'center',
  },
  cx2: {
    width:230,
    height:200,
    backgroundColor:'#00f',
    marginLeft:20,
    paddingLeft:50,
  }
});
export default laranja1;
