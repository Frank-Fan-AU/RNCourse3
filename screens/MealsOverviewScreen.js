import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";
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

      
  return (
    <MealsList displayedMeals={displayedMeals} />
  );
}

export default MealsOverviewScreen;
