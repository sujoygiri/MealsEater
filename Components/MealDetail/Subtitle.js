import { StyleSheet, Text, View } from 'react-native'

export default function Subtitle({children}) {
  return (
      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{children}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    subtitleContainer:{
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#ffc6ad',
        borderBottomWidth: 2
    },
    subtitle:{
        color: '#ffc6ad',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    }
})