import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const products = [
  {
    id: '1',
    name: 'iPad 8',
    category: 'Tablet',
    description:
      'Lorem Ipsum dolor sit amet, ut labore et dolore magna aliqua.',
    price: '$880',
    image: require('./assets/images.png'),
  },
  {
    id: '2',
    name: 'Iphone X',
    category: 'iPhone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.',
    price: '$750',
    image: require('./assets/iphoneX.png'),
  },
  {
    id: '3',
    name: 'Samsung S21',
    category: 'Samsung',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.',
    price: '$990',
    image: require('./assets/samsung.png'),
  },
];

const PopularProducts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most popular products</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.product}>
            <Image
              source={product.image}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.info}>
              <Text style={styles.name}>{product.name}</Text>

              <Text style={styles.category}>
                {product.category}
              </Text>

              <Text style={styles.description}>
                {product.description}
              </Text>

              <View style={styles.priceContainer}>
                <Text style={styles.price}>
                  {product.price}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 10,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 24,
  },

  product: {
    flexDirection: 'row',
    marginBottom: 32,
    alignItems: 'flex-start',
  },

  image: {
    width: 112,
    height: 132,
    borderRadius: 9,
    backgroundColor: '#eee',
  },

  info: {
    flex: 1,
    marginLeft: 11,
    paddingTop: 7,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 3,
  },

  category: {
    fontSize: 14,
    color: '#55c9df',
    marginBottom: 3,
  },

  description: {
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'italic',
    color: '#333',
  },

  priceContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#374151',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 5,
  },

  price: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PopularProducts;