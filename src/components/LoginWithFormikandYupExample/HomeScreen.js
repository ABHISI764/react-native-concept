import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Inspection Report</Text>
        {renderTextInput('Collection Type')}
        {renderTextInput('Case File ID')}
        {renderTextInput('LPA ID')}
        {renderTextInput('PDA Submitter Entity')}
        {renderTextInput('Property Data Collector Name')}
        {renderTextInput('PDA Hyperlink')}
        <Text style={styles.subHeader}>Property Data Collector Contacts</Text>
        {renderTextInput('Phone Number')}
        {renderTextInput('Email')}
        {renderTextInput('PDA Collection Entity')}
        {renderTextInput('Property Data Collector Type')}
        {renderTextInput('Property Data Collector Type Description')}
        {renderTextInput('Data Collector Acknowledgement')}
        {renderTextInput('Data Collection Date')}
      </View>
    </ScrollView>
  );
};

const renderTextInput = (placeholder) => (
  <View style={styles.inputContainer}>
    <TextInput style={styles.input} placeholder={placeholder} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  section: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
