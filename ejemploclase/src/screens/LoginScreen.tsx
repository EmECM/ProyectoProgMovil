import { StyleSheet, Text, View, Alert} from 'react-native';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { i18n } from '../contexts/LanguageContext';

export default function LoginScreen({navigation}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, isAllowed} = useAuth();  

  const handleOnLogin = () => {

    try {
    //navegar a una pantalla dentro del mismo stack navigator
    // navigation.navigate("Home")
    
    //navegar a una pantalla que espera parametros por ruta dentro del mismo stack navigator 
    // navigation.navigate("Home", {email})

    const allowed = login(email,password)
    if(allowed){
    //navegar a una tab especifica
    navigation.navigate("Tabs", {screen:"Home"})
    }else{
      Alert.alert("Credenciales Incorrectas","Favor ingresar correo.edu")
    }
      
    } catch (error: any) {
      Alert.alert(error.message)
    }
  
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
      <Text>{i18n.t('signIn')}</Text>
      <View style={styles.buttonsWrapper}>
          <CustomInput
              placeholder={i18n.t('enterEmail')} 
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
            title={i18n.t('exit')}
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