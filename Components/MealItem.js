import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import MealInfo from "./MealInfo";

export default function MealItem({id,title,imageUrl,duration,complexity,affordability }) {

    const navigation = useNavigation();

    function selectMealHandler() {
        navigation.navigate("MealDetail",{
            mealId:id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color:'#ccc'}}
                style={({pressed})=>(pressed && Platform.OS === 'ios') && styles.pressedItem}
                onPress={selectMealHandler}
            >
                <View style={styles.itemInnerContainer}>
                    <View>
                        <Image source={{uri:imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealInfo duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    mealItem:{
        margin:16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation:4,
        // properties for ios shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    },
    pressedItem:{
        opacity:0.5
    },
    itemInnerContainer:{
        flex:1,
        borderRadius: 8
    },
    image:{
        height:200,
        width:'100%'
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    }
});