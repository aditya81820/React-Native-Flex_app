import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
  {
    uuid: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    name: "Aditya Sharma",
    whatTheyDo: "Software Engineer — builds mobile and web apps using React Native and Node.js.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    uuid: "b2c3d4e5-f6g7-8901-h2i3-j4k5l6m7n8o9",
    name: "Neha Kapoor",
    whatTheyDo: "UI/UX Designer — designs modern interfaces and user experiences.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    uuid: "c3d4e5f6-g7h8-9012-i3j4-k5l6m7n8o9p0",
    name: "Rohit Mehta",
    whatTheyDo: "DevOps Engineer — manages cloud infrastructure and CI/CD pipelines.",
    imageUrl: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    uuid: "d4e5f6g7-h8i9-0123-j4k5-l6m7n8o9p0q1",
    name: "Priya Verma",
    whatTheyDo: "Data Scientist — works on predictive models and AI-driven insights.",
    imageUrl: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    uuid: "e5f6g7h8-i9j0-1234-k5l6-m7n8o9p0q1r2",
    name: "Amit Tiwari",
    whatTheyDo: "Project Manager — oversees product delivery and team coordination.",
    imageUrl: "https://randomuser.me/api/portraits/men/17.jpg"
  }
];

  return (
    <View>
      <Text style = {styles.heading}>ContactList</Text>
      <View style = {styles.container}>
        {contacts.map(({uuid , name ,  whatTheyDo , imageUrl})  => (
            <View key = {uuid} style = {styles.rowItem}>
                <Image source = {{
                    uri : imageUrl
                }}
                style  = {styles.userImage}
                ></Image>
                <View style= {styles.userInfo}>
                    <Text style = {styles.userName}>{name}</Text>
                    <Text style= {styles.userStatus}>{whatTheyDo}</Text>
                </View>
            </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading : {
        padding: 8,
        fontSize:20,
        color:'#ffffff'
    },
    container :{
        padding:8

    },
    rowItem :{
        padding :16,
        margin:2,
        borderRadius:8,
        backgroundColor:'#114926ff',
        flex:1,
        flexDirection:'row'
    },
    userImage :{height:50, width:50,borderRadius: 60/2 },
    userInfo:{marginLeft:8,flexShrink: 1},
    userName : {
        fontSize: 15,
        fontWeight:'bold',
        color:'white'
    },
    userStatus:{
        fontSize:13,
        color: 'pink',
        flexWrap: 'wrap'
    }

})