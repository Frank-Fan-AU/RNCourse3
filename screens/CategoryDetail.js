import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/MealDetail/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const CategoryDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.find((mealItem) => mealItem.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon="star" color="white" onPress={() => {
            console.log("Pressed")
          }} />
        )
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootScreen}>
      <Image source={{ uri: displayedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{displayedMeals.title}</Text>
      <MealDetails
        displayedMeals={displayedMeals}
        style={styles.details}
        textStyle={styles.text}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={displayedMeals.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={displayedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  rootScreen: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  details: {
    color: "white",
  },
  text: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
