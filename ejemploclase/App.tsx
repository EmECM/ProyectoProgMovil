import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleOnLogin = () => {
    console.log("prueba login desde app");
    alert("Alerta login desde app");
  }

  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

    const handleOnForgetPassword = () => {
    alert("Cargando...");
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenido</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonsWrapper}>
        <View style={styles.card}>
        <CustomButton 
            title={'Login'} 
            onClick={handleOnLogin} 
            />
        <CustomButton 
            title={'Salir'}
            onClick={handleOnLogout}
            variant={'secondary'} 
            />
        <CustomButton 
            title={'¿Olvidaste tu contraseña?'}
            onClick={handleOnForgetPassword}
            variant={'text'} 
            />
          <CustomInput
              placeholder={'Ingrese su correo'} 
              onChange={setEmail}
              value={email} 
              typeInput={'email'}  
         />   
         <CustomInput
              placeholder={'Password'} 
              onChange={setPassword} 
              value={password} 
              typeInput={'password'}  
         />          
          </View>  
        </View>
      </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: "80%",
    height: "80%",
    borderRadius: 15,
    backgroundColor:'#f3f4f6',
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsWrapper:{
//    marginTop: 15,
    width: "70%",
   height: "30%",
    alignItems: "center",

  },

});