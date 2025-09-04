import {SafeAreaView, Text, View} from 'react-native';
import laranja1 from './css/estilo';

export default function App() {
  return (
    <SafeAreaView style={laranja1.container}>
      <Text style={laranja1.paragraph}>
      aula 4
      </Text>
      <View style={laranja1.cx1}>
      <Text style={laranja1.titulo}>
      test
      </Text>      
      </View> 
      <View style={laranja1.cx2}>
      </View>
    </SafeAreaView>
  );
}

