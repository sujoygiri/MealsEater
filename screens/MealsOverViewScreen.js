import {useEffect} from "react";
import { StyleSheet, FlatList, View } from "react-native";

import MealItem from "../Components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverViewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title;
        // const categoryTitle = route.params.categoryTitle
        navigation.setOptions({
            title:categoryTitle
        })
    },[categoryId,navigation])

    function renderMealItem({ item }) {

        return (
            <MealItem
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
            />
        );
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={displayedMeals}
                keyExtractor={meal => meal.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16
    }
});