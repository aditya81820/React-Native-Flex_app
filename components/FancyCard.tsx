import { StyleSheet, Text, View ,Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'

export default function FancyCard() {
    function ReadMore(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View style={styles.baseContainer}>
      <Text style={styles.text}>Trending Places</Text>
      <View style = {styles.card}>
        <Image source={{
            uri: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg'}}
        style={styles.image}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardHeading}>Dal Lake</Text>
            <Text style = {styles.cardSubHeading}>Srinagar JK</Text>
            <Text style = {styles.cardContent}>This is a very beautiful place to visit in jammu and kashmir, It is highlt recommended to visit and explore the adorable place.</Text>
            <Text style = {styles.cardDistance}>12Km Away</Text>
            <TouchableOpacity onPress={() => {ReadMore('https://en.wikipedia.org/wiki/Dal_Lake')}}>
                <Text>Read More....</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    baseContainer :{
        padding:8
    },
    text : {
        fontSize: 20,
        color:"#ffffff"
    },
    container :{
        flex : 1,
        flexDirection: 'row',
    },
    image : {
        height : 180,
    },
    card :{
        backgroundColor:'#ffffff',
        height:350,
        borderRadius:8,
    },
    cardBody :{
        padding:8
    },
    cardHeading :{
        fontSize : 20,
        fontWeight: 'bold'
    },
    cardSubHeading :{
        fontSize: 12
    },
    cardContent :{
        fontSize : 14,
        marginTop : 8,
        color : '#000000'
    },
    cardDistance : {
        marginTop : 8,

    }

})