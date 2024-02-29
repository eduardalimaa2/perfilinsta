import { View } from "react-native";
import fotoinsta from "./src/assets/fotoinsta.jpg";
import InfoProfile from './src/components/InfoProfile'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile
        image={fotoinsta}
        publi={3}
        followers={982}
        following={645}
      />
    </View>
  );
}
