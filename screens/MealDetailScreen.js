import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MEALS } from "../data/dummy-data";
import MealInfo from "../Components/MealInfo";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from '../Components/IconButton';

export default function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMealDetail = MEALS.find((meal) => meal.id === mealId);

    const headerButtonPressHandler = () => {
        console.log('Pressed');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon='star'
                    color='white'
                    onPress={headerButtonPressHandler} 
                />;
            }
        });
    }, [navigation, headerButtonPressHandler]);

    const mealInfoProps = {
        duration: selectedMealDetail.duration,
        complexity: selectedMealDetail.complexity,
        affordability: selectedMealDetail.affordability
    };

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMealDetail.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMealDetail.title}</Text>
            <MealInfo {...mealInfoProps} textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List listData={selectedMealDetail.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List listData={selectedMealDetail.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center',
        // marginBottom:10
    },
    listContainer: {
        width: '80%'
    }
});