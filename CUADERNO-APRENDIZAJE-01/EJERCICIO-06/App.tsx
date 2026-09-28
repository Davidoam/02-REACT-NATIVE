import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>INFORME MENSUAL</Text>
      <Text style={styles.title}>Dashboard de ventas</Text>
      <Text style={styles.subtitle}>Rendimiento de septiembre</Text>

      <View style={styles.grid}>
        <Metric title="Ingresos" value="18.620 €" change="+14%" />
        <Metric title="Clientes" value="426" change="+9%" />
        <Metric title="Pedidos" value="1.238" change="+11%" />
        <Metric title="Devoluciones" value="32" change="-3%" />
      </View>
    </View>
  );
}

function Metric({ title, value, change }: { title: string; value: string; change: string }) {
  const isPositive = change.startsWith('+');

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
        {change} este mes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  eyebrow: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  subtitle: {
    color: '#64748b',
    marginTop: 5,
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
  },
  label: {
    color: '#64748b',
  },
  value: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },
  change: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  positive: {
    color: '#16a34a',
  },
  negative: {
    color: '#dc2626',
  },
});
