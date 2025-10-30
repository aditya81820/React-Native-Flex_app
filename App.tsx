import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <FancyCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default App