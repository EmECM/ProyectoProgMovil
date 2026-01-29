import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps{
    title: string;
    onClick: () => void;
}

export default function CustomButton({
    title,
    onClick
}: CustomButtonProps){

    return(
    <TouchableOpacity
    onPress={onClick}
    style={styles.container}
    >
        <Text
            style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1ebc43",
        width :"80%",
        borderWidth: 2,
        borderRadius: 8,
    },

    text:{
        color: "white",
    }

});