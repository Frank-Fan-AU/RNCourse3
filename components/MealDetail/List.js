import { StyleSheet, Text, View } from "react-native";

const List = ({data}) => {
    return (
       data.map((dataPoint) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
       ))
    );
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#e2b497",
    },
    itemText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#351401",
    },
});