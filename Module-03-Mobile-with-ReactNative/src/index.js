import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import api from './services/api'

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
      const response = await api.post('projects', { 
        title: `Novo Projeto ${Date.now()}`, 
        owner: `Adriano Santos`
      });

      const project = response.data;

      setProjects([...projects, project]);

    }

  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

        <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project})=> (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
        </SafeAreaView>   
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    
  },

  project: {
    color: '#FFF',
    fontSize: 32,
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center',
    
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,

  }
});
