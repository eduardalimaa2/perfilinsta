import {TouchableOpacity, Image,StyleSheet} from "react-native";
export default function Story ({Image}) {
  return(
<TouchableOpacity>
    <Image
    style={StyleSheet.story}
    source={Image}/>
</TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
    story: {width: 100, height: 100, borderRadius: 50 },
});
