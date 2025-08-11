import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryDetail from "./screens/CategoryDetail";
import FavoritesScreens from "./screens/FavoritesScreens";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import store from "./store/redux/store";

const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#351401",
      },
      headerTintColor: "white",
      sceneStyle:{
        backgroundColor: "#3f2f25",
      },
      drawerContentStyle:{
        backgroundColor: "#3f2f25",
      },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#3F1C08",
      drawerActiveBackgroundColor: "#BE612B",
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({color,size})=>{
          return <Ionicons name="list" color={color} size={size} />
        }
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreens} options={{
        title: "Favorites",
        drawerIcon: ({color,size})=>{
          return <Ionicons name="star" color={color} size={size} />
        }
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <Provider store={store}>
       <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#3f2f25",
          },
        }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
        </Stack.Navigator>
      </NavigationContainer>
        </View>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
