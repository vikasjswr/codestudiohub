import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import useGetProfile from "../../utils/useGetProfile";
import useEditProfile from "../../utils/useEditProfile";
import { AntDesign } from "@expo/vector-icons";

const Section4 = () => {
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isAddFundModalVisible, setAddFundModalVisible] = useState(false);
  const [selectedDefaultAmount, setSelectedDefaultAmount] = useState(null); // State to track the selected default amount
  const [customAmount, setCustomAmount] = useState(""); // State to track the custom amount entered in TextInput

  const { data, getData } = useGetProfile();

  useEffect(() => {
    getData();
  }, []);

  const {
    editedUsername,
    setEditedUsername,
    editedDesignation,
    setEditedDesignation,
    handleEditProfileData,
  } = useEditProfile();

  const user = {
    bannerImage:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Add your banner image URL

    profileImage:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",

    username: "John Doe",
    designation: "Software Engineer",
    validBalance: "₹500",
  };

  const handleEditProfile = () => {
    // Open the edit profile modal
    setEditModalVisible(true);
  };

  const handleSaveProfile = () => {
    // Close the edit profile modal
    handleEditProfileData();
    setEditModalVisible(false);
  };

  const handleCloseModal = () => {
    // Close the edit profile modal without saving
    setEditModalVisible(false);
  };

  const handleAddFund = () => {
    // Open the add fund modal
    setAddFundModalVisible(true);
  };

  const handleSaveFund = () => {
    // Implement logic to save fund
    setAddFundModalVisible(false);
    setSelectedDefaultAmount(null);
    setCustomAmount("");
  };

  const handleCloseFundModal = () => {
    // Close the add fund modal without saving
    setAddFundModalVisible(false);
    setCustomAmount("");
    setSelectedDefaultAmount(null);
  };

  const handleSelectDefaultAmount = (amount) => {
    // Set the selected default amount and clear the custom amount
    setSelectedDefaultAmount(amount);
    setCustomAmount(amount);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Image style={styles.bannerImage} source={{ uri: user.bannerImage }} />
        <View style={styles.profilePicContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: user.profileImage }}
          />
        </View>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.username}>{data.name}</Text>
        <Text style={styles.designation}>{user.designation}</Text>
        <Text style={styles.validBalance}>{user.validBalance}</Text>
        <Text>Wallet Balance</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleAddFund}>
          <Text style={styles.buttonText}>Add Fund</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isEditModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.overlay} />
        <View style={styles.editModal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={handleCloseModal}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text style={styles.editModalTitle}>Edit Profile</Text>

          <TextInput
            style={styles.editInput}
            placeholder="Enter new username"
            value={editedUsername}
            onChangeText={setEditedUsername}
          />

          <TextInput
            style={styles.editInput}
            placeholder="Enter new designation"
            value={editedDesignation}
            onChangeText={setEditedDesignation}
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveProfile}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        visible={isAddFundModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseFundModal}
      >
        <View style={styles.overlay} />
        <View style={styles.editModal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={handleCloseFundModal}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text style={styles.editModalTitle}>Add Fund</Text>

          {/* Custom amount input */}
          <TextInput
            style={styles.editInput}
            placeholder="Enter Amount"
            value={customAmount}
            onChangeText={setCustomAmount}
          />

          {/* Default amount buttons */}
          <View style={styles.defaultAmount}>
            {["5000", "10000", "20000"].map((amountOption) => (
              <TouchableOpacity
                key={amountOption}
                style={[
                  styles.defaultAmountButton,
                  selectedDefaultAmount === amountOption
                    ? styles.selectedDefaultAmountButton
                    : null,
                ]}
                onPress={() => handleSelectDefaultAmount(amountOption)}
              >
                <Text
                  style={[
                    styles.defaultAmountButtonText,
                    selectedDefaultAmount === amountOption
                      ? styles.selectedDefaultAmountButtonText
                      : null,
                  ]}
                >
                  {amountOption}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveFund}>
            <Text style={styles.saveButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  banner: {
    height: 250,
    width: "100%",
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
  profilePicContainer: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    marginLeft: -70,
    marginBottom: -20,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userInfo: {
    height: 130,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    padding: 5,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  designation: {
    fontSize: 16,
    color: "gray",
  },
  validBalance: {
    fontSize: 26,
    marginVertical: 10,
  },
  buttonContainer: {
    height: 60,
    width: "100%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e188f",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  editModal: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "50%",
    position: "absolute",
  },
  editModalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  editInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  saveButton: {
    backgroundColor: "#1e188f",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 25,
    width: "40%",
    marginLeft: "60%",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  defaultAmount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 2,
  },
  defaultAmountButton: {
    // backgroundColor: "#1e188f",
    borderWidth: 1,
    borderColor: "#888888",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  defaultAmountButtonText: {
    color: "#888888",
    fontSize: 16,
  },
  selectedDefaultAmountButton: {
    backgroundColor: "green", // Set border color for selected button
  },
  selectedDefaultAmountButtonText: {
    color: "#fff", // Set text color for selected button
  },
});

export default Section4;
