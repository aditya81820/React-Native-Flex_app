import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View style= {styles.baseContainer}>
            <Text style = {styles.text}>ElevatedCards Cards</Text>
            <ScrollView horizontal style = {styles.container}>
                <View style = {[styles.cards , styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style = {[styles.cards , styles.card2]}>
                    <Text>Green</Text>
                </View>
                <View style = {[styles.cards , styles.card3]}>
                    <Text>Yellow</Text>
                </View>
                <View style = {[styles.cards , styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style = {[styles.cards , styles.card2]}>
                    <Text>Green</Text>
                </View>
                <View style = {[styles.cards , styles.card3]}>
                    <Text>Yellow</Text>
                </View>
            </ScrollView>
          
        </View>
  )
}

const styles = StyleSheet.create({
    baseContainer :{
        padding: 8
    },
    text : {
        fontSize: 20,
        color:"#ffffff"
    },
    container :{
        flex : 1,
        flexDirection: 'row',
    },
    cards:{
        width:100,
        height:100,
        margin:8,
        borderRadius:8
        
    },
    card1 :{
        backgroundColor:'#FF0000',
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    card2 :{
        backgroundColor:'#35d25fff',
        alignItems:'center',
        justifyContent:'center'
    },
    card3 :{
        backgroundColor: '#e8f31fff',
        alignItems:'center',
        justifyContent:'center'
    }
})