import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.curso}>Curso 2026/2027</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    gap: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748b',
  },
  
  curso: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f5b99',
  }
});