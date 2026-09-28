import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/31+ppA7cwmL._SL500_.jpg?format=auto&width=640&height=auto&quality=50' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>David Omeñaca Ayuso</Text>
        <Text style={styles.job}>Estudiante de 2do DAM</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>45</Text>
            <Text>Proyectos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>86</Text>
            <Text>Publicaciones</Text>
          </View>
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
    backgroundColor: '#e2e8f0',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 22,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    marginTop: 18,
    fontSize: 25,
    fontWeight: 'bold',
  },
  job: {
    marginTop: 4,
    color: '#64748b',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  number: {
    fontSize: 21,
    fontWeight: 'bold',
  },
});
