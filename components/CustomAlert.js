import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useAuth } from "../AuthContext";

const CustomAlert = ({ visible }) => {
  const {
    popupMessage,
    setPopupMessage,
    setSuccess,
    setError,
    success,
    error,
  } = useAuth();

  if (success) {
    return (
      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.alertContainer}>
            <Image
              source={require("../assets/success.jpg")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.success}>Success</Text>
            <Text style={styles.message}>{popupMessage}</Text>
            <TouchableOpacity
              onPress={() => {
                setSuccess(false);
                setPopupMessage("");
              }}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  } else if (error) {
    return (
      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.alertContainer}>
            <Image
              source={require("../assets/error.jpg")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.failed}>Failed</Text>
            <Text style={styles.message}>{popupMessage}</Text>
            <TouchableOpacity
              onPress={() => {
                setError(false);
                setPopupMessage("");
              }}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity as needed
  },
  alertContainer: {
    backgroundColor: "white",
    // borderColor: "#1e188f", // Set border color to #1e188f
    // borderWidth: 2, 
    padding: 20,
    borderRadius: 10,
    width: "80%", // Adjust the width as needed
    alignItems: "center",
    elevation: 5,
  },
  icon: {
    height: 70, // Adjust the height as needed
    width: 70, // Adjust the width as needed
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: "#3498db", // Replace with your color styling
    padding: 10,
    width: "40%",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white", // Replace with your color styling
    fontSize: 16,
  },
  failed: {
    fontSize: 22,
    color: "red",
  },
  success: {
    fontSize: 22,
    color: "green",
  },
});

export default CustomAlert;


// import React from "react";
// import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { useAuth } from "../AuthContext";

// const CustomAlert = ({ visible }) => {
//   const { popupMessage, setPopupMessage, setSuccess, setError, success, error } = useAuth();

//   const handleClose = (status) => {
//     if (status === "success") setSuccess(false);
//     else if (status === "error") setError(false);
    
//     setPopupMessage("");
//   };

//   const getImageSource = (status) => {
//     return status === "success"
//       ? require("../assets/success.jpg")
//       : status === "error"
//       ? require("../assets/error.jpg")
//       : null;
//   };

//   const getStatusStyles = (status) => {
//     return {
//       container: {
//         backgroundColor: status === "success" ? "green" : "red",
//       },
//       icon: {
//         tintColor: status === "success" ? "white" : "white",
//       },
//       text: {
//         color: "white",
//       },
//       closeButton: {
//         backgroundColor: "white",
//       },
//       closeButtonText: {
//         color: status === "success" ? "green" : "red",
//       },
//     };
//   };

//   const status = success ? "success" : error ? "error" : null;
//   const statusStyles = getStatusStyles(status);

//   return (
//     <Modal transparent visible={visible} animationType="slide">
//       <View style={[styles.overlay, statusStyles.container]}>
//         <View style={styles.alertContainer}>
//           <Image
//             source={getImageSource(status)}
//             style={[styles.icon, statusStyles.icon]}
//             resizeMode="contain"
//           />
//           <Text style={status === "success" ? styles.success : styles.failed}>
//             {status === "success" ? "Success" : "Failed"}
//           </Text>
//           <Text style={[styles.message, statusStyles.text]}>{popupMessage}</Text>
//           <TouchableOpacity onPress={() => handleClose(status)} style={[styles.closeButton, statusStyles.closeButton]}>
//             <Text style={[styles.closeButtonText, statusStyles.closeButtonText]}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity as needed
//   },
//   alertContainer: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     width: "80%",
//     alignItems: "center",
//     elevation: 5,
//   },
//   icon: {
//     height: 70,
//     width: 70,
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: "center",
//     marginTop: 10,
//   },
//   closeButton: {
//     padding: 10,
//     width: "40%",
//     marginTop: 20,
//     borderRadius: 20,
//     alignItems: "center",
//   },
//   closeButtonText: {
//     fontSize: 16,
//   },
//   failed: {
//     fontSize: 22,
//     color: "red",
//   },
//   success: {
//     fontSize: 22,
//     color: "green",
//   },
// });

// export default CustomAlert;
