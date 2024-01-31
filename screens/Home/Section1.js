import React from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import logo from "../../assets/logo.png";
import Loader from "../../components/Loader";
import { useAuth } from "../../AuthContext";
import CustomAlert from "../../components/CustomAlert";

const Section1 = () => {
  const {
    isLoading,
    success,
    error,
    setIsLoading,
    setSuccess,
    setError,
    show,
    setShow,
  } = useAuth();

  if (isLoading) {
    <Loader />;
  }

  return (
    <>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        {success ? <CustomAlert visible={success} /> : null}

        {/* Navbar */}
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name="bars" size={24} color="#2c3e50" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={logo} />
          </View>
          <TouchableOpacity style={styles.profileContainer}>
            <FontAwesome name="user-circle" size={24} color="#2c3e50" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Slider */}
        <View style={styles.sliderWrapper}>
          <Swiper
            // style={styles.sliderContainer}
            autoplay={true}
            autoplayTimeout={5}
          >
            <View style={styles.slide}>
              <Text>Slide 1</Text>
            </View>
            <View style={styles.slide}>
              <Text>Slide 2</Text>
            </View>
            <View style={styles.slide}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View>

        {/* Random Services Cards */}
        <ScrollView style={styles.servicesContainer}>
          <View style={styles.row}>
            <ServiceCard icon="file-code-o" title="Template/UI" />
            <ServiceCard icon="pencil" title="Web Designing" />
            <ServiceCard icon="mobile" title="Mobile Application" />
            <ServiceCard icon="certificate" title="SSL Certificate" />
          </View>
          <View style={styles.row}>
            <ServiceCard icon="server" title="Server and Domain" />
            <ServiceCard icon="cogs" title="Maintenance and Plan" />
            <ServiceCard icon="support" title="Support" />
            <ServiceCard icon="ellipsis-h" title="More Services" />
          </View>
          {/* ... more rows of service cards */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ServiceCard = ({ icon, title }) => (
  <View style={styles.serviceCardData}>
    <View style={styles.serviceCardLogo}>
      <FontAwesome name={icon} size={30} color="#fff" />
    </View>

    <View style={styles.serviceCardContent}>
      <Text style={styles.serviceTitle}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 70,
    padding: 10,
    paddingTop: Platform.OS === "android" ? 25 : 0, // Adjust for Android status bar
  },
  iconContainer: {
    padding: 5,
  },
  logoContainer: {
    flex: 1,
    width: 100, // Set your desired width
    alignItems: "center",
    justifyContent: "center",
    // padding:7
  },

  profileContainer: {
    padding: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    // backgroundColor: "#2c3e50",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 2, // Add this line for border
    borderColor: "#ccc",
  },
  searchButton: {
    backgroundColor: "#1e188f",
    padding: 13,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  servicesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
  },

  sliderWrapper: {
    height: 200,
    marginTop: 10,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    borderRadius: 10,
    marginHorizontal: 16,
  },
  row: {
    flex: 1,
    height: 120, // Set your desired height for each service card
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around", // Adjust spacing as needed
    backgroundColor: "#cfc5de",
    marginTop: 10,
    paddingHorizontal: 5,
  },

  serviceCardElement: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop:10
  },
  serviceCardLogo: {
    height: 57,
    width: 57,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e188f",
  },

  serviceCardData: {
    flex: 1,
    height: 90,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    // justifyContent:"center"
  },

  serviceCardContent: {
    height: 40,
    maxWidth: 70, // Set your desired maximum width
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },

  serviceTitle: {
    fontSize: 11,
    textAlign: "center",
    color: "#2c3e50",
  },
});

export default Section1;
