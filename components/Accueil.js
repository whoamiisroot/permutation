import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const Accueil = () => {
  const [professorsData, setProfessorsData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API endpoint
    fetch('https://troubled-red-garb.cyclic.app/professeurs')
      .then((response) => response.json())
      .then((data) => setProfessorsData(data))
      .catch((error) => console.error(error));
  }, []);

  const renderSpecialiteChart = () => {
    const specialiteCounts = {};
    professorsData.forEach((professor) => {
      const { specialite } = professor;
      specialiteCounts[specialite] = (specialiteCounts[specialite] || 0) + 1;
    });
  
    const pieData = Object.keys(specialiteCounts).map((specialite, index) => ({
      value: specialiteCounts[specialite],
      key: specialite,
      svg: { fill: getRandomColor(index) },
      onPress: () => {
        alert(`Specialite: ${specialite}\nProfessors: ${specialiteCounts[specialite]}`);
      },
    }));
  
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Specialite</Text>
        <PieChart style={styles.chart} data={pieData} />
      </View>
    );
  };
  
  const renderVilleChart = () => {
    const villeCounts = {};
    professorsData.forEach((professor) => {
      const { villeFaculteActuelle } = professor;
      villeFaculteActuelle.split(';').forEach((ville) => {
        villeCounts[ville] = (villeCounts[ville] || 0) + 1;
      });
    });
  
    const pieData = Object.keys(villeCounts).map((ville, index) => ({
      value: villeCounts[ville],
      key: ville,
      svg: { fill: getRandomColor(index) },
      onPress: () => {
        alert(`Ville: ${ville}\nProfessors: ${villeCounts[ville]}`);
      },
    }));
  
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Ville</Text>
        <PieChart style={styles.chart} data={pieData} />
      </View>
    );
  };
  
  const renderGradeChart = () => {
    const gradeCounts = {};
    professorsData.forEach((professor) => {
      const { grade } = professor;
      gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
    });
  
    const pieData = Object.keys(gradeCounts).map((grade, index) => ({
      value: gradeCounts[grade],
      key: grade,
      svg: { fill: getRandomColor(index) },
      onPress: () => {
        alert(`Grade: ${grade}\nProfessors: ${gradeCounts[grade]}`);
      },
    }));
  
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Grade</Text>
        <PieChart style={styles.chart} data={pieData} />
      </View>
    );
  };
  

  // Function to generate a random color
  const getRandomColor = (index) => {
    const colors = [
      '#FF5722',
      '#2196F3',
      '#4CAF50',
      '#E91E63',
      '#9C27B0',
      '#FFEB3B',
      '#FF9800',
      '#03A9F4',
      '#8BC34A',
      '#CDDC39',
      '#FFC107',
    ];
    return colors[index % colors.length];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Statistiques</Text>
      {renderSpecialiteChart()}
      {renderVilleChart()}
      {renderGradeChart()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    width: 200,
    height: 200,
  },
});

export default Accueil;

