import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleLogin = () => {
    fetch("https://troubled-red-garb.cyclic.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Authentication successful") {
          fetch("https://troubled-red-garb.cyclic.app/professeurs")
            .then((response) => response.json())
            .then((professeursData) => {
              const professor = professeursData.find(
                (prof) => prof.email === email
              );
              if (professor) {
                navigation.navigate("Accueil");
              }
            })
            .catch((error) => {
              console.error("Error retrieving professors data:", error);
            });
        } else {
          setShowModal(true);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/index.png")} style={styles.image} />

      <TextInput
        placeholder="User Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.Text}         onPress={() => navigation.navigate("Inscription")}
>Not Registered?</Text>

      {/* Modal to display incorrect information */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Incorrect information</Text>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 200,
    borderCurve : 100/2,
    resizeMode: "contain",
  },
  input: {
    borderWidth: 1,
    borderColor: "#446688",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#007bff",
    width:300,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },Text: {
    color: "black",
    fontSize: 16,
    marginRight: 10,
    },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#446688",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
