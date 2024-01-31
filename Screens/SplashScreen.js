import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Intro')
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Text style={styles.firstHalfText}>Quotes</Text>
        <Text style={styles.secondHalfText}>hub</Text>
      </View>
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>all types of quotes you want to post</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    flexDirection: 'row',
  },
  firstHalfText: {
    fontSize: 30,
    fontWeight: '800',
  },
  secondHalfText: {
    fontSize: 30,
    color: 'red',
  },
  taglineContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 20,
    color: 'red',
    fontStyle: 'italic',
    fontWeight: '500',
  },
})
