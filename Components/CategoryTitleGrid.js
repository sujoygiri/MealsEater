import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

export default function CategoryTitleGrid({ title, color }) {

    return (
        <View style={[styles.gridItem,{backgroundColor:color}]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({pressed})=>[styles.pressableGrid,pressed && styles.pressedGrid]}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        // properties for ios shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        //
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    pressableGrid: {
        flex: 1
    },
    pressedGrid:{
        opacity:0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});