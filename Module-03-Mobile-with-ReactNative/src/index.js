import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './services/api'

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

        <View style={styles.container}>
            {projects.map(project => <Text style={styles.title}  key={project.id}>{project.title}</Text>)}
         </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
