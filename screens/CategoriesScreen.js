import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import CategoryTitleGrid from "../Components/CategoryTitleGrid";


export default function CategoriesScreen({navigation}) {
    function renderCategoryItem({item}){
        function pressHandler() {
            navigation.navigate("MealOverview",{
                categoryId:item.id,
                categoryTitle:item.title
            });
        }
        return (
            <CategoryTitleGrid
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({});