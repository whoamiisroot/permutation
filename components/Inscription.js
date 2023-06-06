import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";

const Inscription = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [grade, setGrade] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [faculteActuelle, setFaculteActuelle] = useState("");
  const [villeFaculteActuelle, setVilleFaculteActuelle] = useState("");
  const [villeDesiree, setVilleDesiree] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSignUp = async () => {
    if (
      email === "" ||
      password === "" ||
      nom === "" ||
      prenom === "" ||
      tel === "" ||
      grade === "" ||
      specialite === "" ||
      faculteActuelle === "" ||
      villeFaculteActuelle === "" ||
      villeDesiree === ""
    ) {
      setShowSuccessModal(true);
      return;
    }
    try {
      const response = await fetch(
        "https://plain-teal-bull.cyclic.app/professeurs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: nom,
            prenom: prenom,
            tel: tel,
            email: email,
            grade: grade,
            specialite: specialite,
            faculteActuelle: faculteActuelle,
            villeFaculteActuelle: villeFaculteActuelle,
            villeDesiree: villeDesiree,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Professor added successfully:", data);
        navigation.navigate("Principale");
      } else {
        const error = await response.json();
        console.error("Failed to add professor:", error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Inscription</Text>
      <View style={styles.scrollView}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TextInput
            placeholder="Email d'utilisateur"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            placeholder="Nom"
            value={nom}
            onChangeText={setNom}
            style={styles.input}
          />

          <TextInput
            placeholder="Prénom"
            value={prenom}
            onChangeText={setPrenom}
            style={styles.input}
          />

          <TextInput
            placeholder="Téléphone"
            value={tel}
            onChangeText={setTel}
            style={styles.input}
          />

          <TextInput
            placeholder="Grade"
            value={grade}
            onChangeText={setGrade}
            style={styles.input}
          />

          <TextInput
            placeholder="Spécialité"
            value={specialite}
            onChangeText={setSpecialite}
            style={styles.input}
          />

          <TextInput
            placeholder="Faculté actuelle"
            value={faculteActuelle}
            onChangeText={setFaculteActuelle}
            style={styles.input}
          />

          <TextInput
            placeholder="Ville de la faculté actuelle"
            value={villeFaculteActuelle}
            onChangeText={setVilleFaculteActuelle}
            style={styles.input}
          />

          <TextInput
            placeholder="Ville désirée"
            value={villeDesiree}
            onChangeText={setVilleDesiree}
            style={styles.input}
          />

          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Page1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Skip pour l'instant seulement</Text>
          </TouchableOpacity>
        </ScrollView>
        <Modal
          visible={showSuccessModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowSuccessModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Fill All Information</Text>
              <TouchableOpacity
                onPress={() => setShowSuccessModal(false)}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 40,
  },
  scrollView: {
    flex: 1,
    alignSelf: "stretch",
  },
  scrollContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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
    backgroundColor: "#446688",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
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


export default Inscription;

