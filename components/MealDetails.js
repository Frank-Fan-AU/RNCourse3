import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({displayedMeals,style,textStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={textStyle}>{displayedMeals.duration}m</Text>
            <Text style={textStyle}>{displayedMeals.complexity.toUpperCase()}</Text>
            <Text style={textStyle}>{displayedMeals.affordability.toUpperCase()}</Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        gap: 8,
      },
});