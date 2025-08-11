import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";



const FavoritesScreens = () => {
    const favoritesMeals = useSelector((state) => state.favoritesMeals.ids);
    let meals = MEALS.filter((mealItem) => favoritesMeals.includes(mealItem.id));
    if(meals.length === 0){
        return <View style={styles.container}>
            <Text style={styles.text}>No favorites found. Start adding some!</Text>
        </View>
    }
    return <MealsList displayedMeals={meals} />;
};

export default FavoritesScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});