import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: '#fff',
                    contentStyle: { backgroundColor: '#3f2f25' },
                    animation: 'slide_from_right'
                }}>
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: 'Meal Categories',
                        }}
                    />
                    <Stack.Screen
                        name="MealOverview"
                        component={MealsOverViewScreen}
                        // options={({route, navigation})=>{
                        //     const categoryTitle = route.params.categoryTitle
                        //     return {
                        //         title: categoryTitle
                        //     }
                        // }}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                        options={{
                            headerRight: () => {
                                return <Button title='Tap Me!' />
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
