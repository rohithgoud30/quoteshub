import {
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useWindowDimensions } from 'react-native'
const data = [
  {
    image: require('../images/image1.png'),
    message: 'Share. Reflect. Inspire.',
  },
  {
    image: require('../images/image2.png'),
    message: 'Illuminate. Captivate. Share.',
  },
  {
    image: require('../images/image3.png'),
    message: 'Connect. Discuss. Inspire.',
  },
]
const Intro = ({ navigation }) => {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.itemContianer, { width }]}>
            <Image style={styles.itemImage} source={item.image} />
            <Text style={styles.itemText}>{item.message}</Text>
          </View>
        )}
      />
      <View style={[styles.buttonContainer, { width }]}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Continue To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Intro
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignContent: 'center',
  },
  itemImage: {
    width: 200,
    height: 200,
  },
  itemContianer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'purple',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
})
