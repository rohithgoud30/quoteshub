import { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Clipboard from 'expo-clipboard'
// import * as Sharing from 'expo-sharing'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('https://type.fit/api/quotes')
    const data = await res.json()
    setData(data)
  }

  const onShare = async (text) => {
    try {
      const result = await Share.share({
        message: `🌈 Quoteshub App 📜\n\n${text}\n\nFeeling the vibes? Spread the wisdom! Hit share and let the quotes do the talking. 🚀\n#Quoteshub #QuoteJourney`,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.firstHalfText}>Quotes</Text>
        <Text style={styles.secondHalfText}>hub</Text>
      </View>
      <View style={styles.quotesContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            const author = `-${
              item.author.split(',').length === 2
                ? item.author.split(',')[0]
                : 'Unknown'
            }`
            const copyToClipboard = async () => {
              await Clipboard.setStringAsync(
                `"${item.text}"\n${' '.repeat(item.text.length * 2)}${author}`
              )
            }

            return (
              <View style={styles.itemContainer}>
                <Image
                  source={require('../images/left.png')}
                  style={[
                    styles.quoteImage,
                    { marginLeft: 5, marginTop: 5, alignSelf: 'flex-start' },
                  ]}
                />
                <Text style={styles.quoteText}>{item.text}</Text>
                <Text style={styles.authorText}>{author}</Text>
                <Image
                  source={require('../images/right.png')}
                  style={[
                    styles.quoteImage,
                    { marginRight: 5, marginBottom: 5, alignSelf: 'flex-end' },
                  ]}
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={copyToClipboard}
                  >
                    <Image
                      source={require('../images/copy.png')}
                      style={styles.buttonImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                      onShare(
                        `"${item.text}"\n${' '.repeat(
                          item.text.length * 2
                        )}${author}`
                      )
                    }
                  >
                    <Image
                      source={require('../images/share.png')}
                      style={styles.buttonImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
          ListFooterComponent={() => <View style={{ height: 100 }}></View>}
        />
      </View>
    </SafeAreaView>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  firstHalfText: {
    fontSize: 20,
    fontWeight: '800',
  },
  secondHalfText: {
    fontSize: 20,
    color: 'red',
  },
  quotesContainer: {
    marginTop: 20,
  },
  itemContainer: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  quoteImage: {
    width: 30,
    height: 30,
  },
  quoteText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  authorText: {
    fontSize: 12,
    color: 'red',
    fontStyle: 'italic',
    margin: 10,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonStyle: {
    width: '40%',
    backgroundColor: '#e8e8e8',
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
})
