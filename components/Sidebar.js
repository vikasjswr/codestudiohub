import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Sidebar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    // Implement navigation to the selected screen
    // You can use navigation.navigate(screenName) or any navigation method you prefer
  };

  return (
    <View style={styles.sidebarContainer}>
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => navigateToScreen('Home')}
      >
        <FontAwesome name="home" size={20} color="black" />
        <Text style={styles.sidebarItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => navigateToScreen('Profile')}
      >
        <FontAwesome name="user" size={20} color="black" />
        <Text style={styles.sidebarItemText}>Profile</Text>
      </TouchableOpacity>

      {/* Add more sidebar items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sidebarItemText: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default Sidebar;
