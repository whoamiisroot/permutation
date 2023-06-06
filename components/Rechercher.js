import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';


const Rechercher = () => {
  const [professeurs, setProfesseurs] = useState([]);

  useEffect(() => {
    fetchProfesseurs();
  }, []);

  const fetchProfesseurs = async () => {
    try {
      const response = await axios.get('https://troubled-red-garb.cyclic.app/professeurs');
      setProfesseurs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      {professeurs.map((professeur) => (
        <View key={professeur._id} style={{ borderBottomWidth: 1, padding: 10 }}>
          <Text>{`Nom: ${professeur.nom}`}</Text>
          <Text>{`Prenom: ${professeur.prenom}`}</Text>
          <Text>{`Email: ${professeur.email}`}</Text>
          {/* Add more fields as needed */}
        </View>
      ))}
    </ScrollView>
  );
};

export default Rechercher;

