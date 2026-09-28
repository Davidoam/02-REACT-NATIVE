import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>

      <View style={[styles.card, styles.alternativeCard]}>
        <Text style={[styles.title, styles.alternativeTitle]}>¡Sigue aprendiendo!</Text>
        <Text style={[styles.subtitle, styles.alternativeSubtitle]}>
          Practica cada concepto construyendo nuevas interfaces
        </Text>
        <View style={[styles.button, styles.alternativeButton]}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
    gap: 18,
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ebac25',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  alternativeCard: {
    backgroundColor: '#1e293b',
  },
  alternativeTitle: {
    color: '#f8fafc',
  },
  alternativeSubtitle: {
    color: '#cbd5e1',
  },
  alternativeButton: {
    backgroundColor: '#f97316',
  },
});
