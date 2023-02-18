import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if(!loaded) return null;
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}
        initialRouteName = 'Home'
      >
        <Stack.Screen name = "Home" component = {Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
