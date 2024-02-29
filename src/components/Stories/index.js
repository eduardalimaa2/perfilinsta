import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/Imagem.jpg";
import Story from "../Story";

export default function Stories() {
  return (
    <ScrollView
       contentContainerStyle={Styles.container}
       horizontal
       style={{flexDirection: "row"}}
       showsHorizontalScrollIndicator={false}
    >
       <Story image={imagem}/>
       <Story image={imagem}/>
       <Story image={imagem}/>
       <Story image={imagem}/>
       <Story image={imagem}/>
       <Story image={imagem}/>


    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
  story:{widht: 100, height: 100, borderRadius: 50},
})
    