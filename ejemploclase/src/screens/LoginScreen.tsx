import { StyleSheet, Text, View} from 'react-native';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";

export default function LoginScreen() {
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
      <View style={styles.card}>
      <Text>Bienvenido</Text>
      <View style={styles.buttonsWrapper}>
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

         <CustomInput
              placeholder={'Name'} 
              onChange={()=>{}} 
              value={""} 
         /> 
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
    marginTop: 15,
    width: "70%",
    height: "50%",
    alignItems: "center",

  },

});