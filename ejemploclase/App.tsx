import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  const handleOnLogin = () =>{
      console.log("Prueba login desde esta App");
      alert("Alerta login desde App")
  }

  const handleOnLogout = () =>{
      console.log("Prueba logout desde esta App");
      alert("Alerta logout desde App")
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenido!</Text>
      <StatusBar style="auto" />
      <CustomButton 
      title={'Login'} 
      onClick={handleOnLogin}/>
       <CustomButton 
      title={'Logout'} 
      onClick={handleOnLogout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04a9f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
