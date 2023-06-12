import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "../ReduxSlice/store";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import Cars from "../Screens/Cars";
import App from "../Screens/App";

export default function Page() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </Provider>
  );
}
