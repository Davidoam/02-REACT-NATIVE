import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Buenas tardes,</Text>
      <Text style={styles.user}>David 💪</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>META DE PASOS</Text>
        <Text style={styles.steps}>8.200</Text>
        <Text style={styles.stepsLabel}>de 10.000 pasos diarios</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>82% completado · ¡Ya queda poco!</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen de hoy</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="610" label="Kcal activas" />
        <StatCard icon="⏱" value="55 min" label="Entrenamiento" />
        <StatCard icon="❤️" value="69 ppm" label="Ritmo medio" />
        <StatCard icon="📍" value="6,3 km" label="Distancia" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <View style={styles.activityRow}>
        <Activity icon="🏋️" title="Fuerza" detail="45 min · Tren superior" />
        <Activity icon="🚶" title="Caminata" detail="6,3 km · 70 min" />
      </View>
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ icon, title, detail }: { icon: string; title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <Text style={styles.activityIcon}>{icon}</Text>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDetail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3ff',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  greeting: {
    marginTop: 60,
    color: '#7c3aed',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#4c1d95',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#ddd6fe',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#ede9fe',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#6d28d9',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '82%',
    height: '100%',
    backgroundColor: '#2dd4bf',
  },
  percentage: {
    color: '#ccfbf1',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flexBasis: '47%',
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
  },
  statLabel: {
    marginTop: 4,
    color: '#6d28d9',
  },
  activityRow: {
    flexDirection: 'row',
    gap: 12,
  },
  activity: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
  },
  activityIcon: {
    fontSize: 26,
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  activityDetail: {
    marginTop: 4,
    color: '#7c3aed',
  },
});
