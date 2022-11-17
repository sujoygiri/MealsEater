import { StyleSheet, Text, View } from 'react-native';
import {FlatList} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(item){
    return
}

export default function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({});