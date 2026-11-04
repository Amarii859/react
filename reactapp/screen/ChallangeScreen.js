
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChallangeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("Home");

  const navigate = (screen) => {
    setPage(screen);
    setMenuOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#343E52" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setMenuOpen(true)}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{page}</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {page === "Home" ? (
          <Image
            source={require("../assets/images.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.about}>
            <Text style={styles.aboutTitle}>About</Text>
            <Text>Welcome to our application.</Text>
          </View>
        )}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigate("Home")}
        >
          <Ionicons
            name="home"
            size={27}
            color={page === "Home" ? "white" : "#BFC4CE"}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigate("About")}
        >
          <Ionicons
            name="albums-outline"
            size={27}
            color={page === "About" ? "white" : "#BFC4CE"}
          />
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
      </View>

      {/* Hamburger Drawer */}
      <Modal
        visible={menuOpen}
        transparent
        animationType="none"
        onRequestClose={() => setMenuOpen(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.overlay}
            onPress={() => setMenuOpen(false)}
          />

          <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Menu</Text>

              <TouchableOpacity onPress={() => setMenuOpen(false)}>
                <Ionicons name="close" size={27} color="white" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigate("Home")}
            >
              <Ionicons name="home-outline" size={23} color="white" />
              <Text style={styles.drawerText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => navigate("About")}
            >
              <Ionicons name="information-circle-outline" size={23} color="white" />
              <Text style={styles.drawerText}>About</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    height: 66,
    backgroundColor: "#343E52",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  menuButton: {
    marginRight: 15,
  },

  headerTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "600",
  },

  content: {
    flex: 1,
    paddingHorizontal: 21,
    paddingTop: 12,
  },

  image: {
    width: "100%",
    height: 236,
    borderRadius: 10,
  },

  about: {
    padding: 10,
  },

  aboutTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#343E52",
    marginBottom: 10,
  },

  bottomNav: {
    height: 58,
    backgroundColor: "#343E52",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    color: "#C4C7CE",
    fontSize: 14,
    marginTop: 2,
  },

  modalContainer: {
    flex: 1,
    flexDirection: "row",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  drawer: {
    width: 270,
    height: "100%",
    backgroundColor: "#343E52",
    paddingTop: 15,
  },

  drawerHeader: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#566075",
  },

  drawerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    gap: 15,
  },

  drawerText: {
    color: "white",
    fontSize: 17,
  },
});
