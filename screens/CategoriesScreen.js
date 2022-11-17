import { StyleSheet } from 'react-native';
import {FlatList} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryTitleGrid from "../Components/CategoryTitleGrid";

function renderCategoryItem(itemData){
    return <CategoryTitleGrid title={itemData.item.title} color={itemData.item.color}/>
}

export default function CategoriesScreen() {
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