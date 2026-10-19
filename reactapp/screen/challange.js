import product from "../product.json";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import product from "../product.json";

export default function Challange() {
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]
  );

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.card}>
        {/* Logo */}
        <Text style={styles.logo}>✓</Text>

        {/* Product image */}
        <Image
          source={require("../assets/shoes.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Product name */}
        <Text style={styles.title}>{product.name}</Text>

        <Text style={styles.wave}>〰〰〰〰〰</Text>

        {/* Category */}
        <Text style={styles.category}>
          {product.category}
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          {product.description}
        </Text>

        {/* Color selection */}
        <View style={styles.colors}>
          {product.colors.map((color) => (
            <TouchableOpacity
              key={color}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.color,
                { backgroundColor: color },
                selectedColor === color && styles.selected,
              ]}
              accessibilityLabel={`Select color ${color}`}
              accessibilityRole="button"
            />
          ))}
        </View>

        {/* Price */}
        <Text style={styles.price}>
          {product.currency}{product.price}
        </Text>

        {/* Stock status */}
        <Text
          style={[
            styles.stock,
            {
              color:
                product.stock === "Yes"
                  ? "#319449"
                  : "#c0392b",
            },
          ]}
        >
          {product.stock === "Yes"
            ? "In Stock"
            : "Out of Stock"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 25,
    paddingHorizontal: 12,
  },

  card: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 25,
    borderRadius: 4,
  },

  logo: {
    fontSize: 36,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#111111",
    marginBottom: 15,
  },

  image: {
    width: "100%",
    height: 210,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#087e64",
    textAlign: "center",
    textTransform: "uppercase",
  },

  wave: {
    color: "#80b79b",
    fontSize: 20,
    marginVertical: 10,
  },

  category: {
    fontSize: 15,
    fontWeight: "700",
    color: "#555555",
    marginBottom: 14,
    textAlign: "center",
  },

  description: {
    fontSize: 12,
    lineHeight: 19,
    color: "#666666",
    textAlign: "center",
    marginBottom: 25,
  },

  colors: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    marginBottom: 35,
  },

  color: {
    width: 34,
    height: 34,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "transparent",
  },

  selected: {
    borderColor: "#aaaaaa",
    transform: [{ scale: 1.1 }],
  },

  price: {
    fontSize: 54,
    fontWeight: "900",
    color: "#626262",
  },

  stock: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: "600",
  },
});