import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({route,navigation}) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) =>
        mealItem.categoryIds.indexOf(catId) >= 0
      );

    const displayedTitle = CATEGORIES.find((category) => category.id === catId)?.title;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: displayedTitle,
        });
    }, [catId, displayedTitle, navigation]);

    const renderMealItem = (itemData) => {
        return <MealItem item={itemData.item} />;
    };
      
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});