import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useRouter } from 'expo-router';

export default function RoleScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3C1BB8" />

      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Quem eu sou?</Text>

        {/* Quadrados clicáveis */}
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => router.push('/loginFuncionario')}>
          <Ionicons name="people-outline" size={28} color="#FFF" />
          <Text style={styles.roleText}>Funcionário</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => router.push('/loginTecnico')}>
          <Ionicons name="construct-outline" size={28} color="#FFF" />
          <Text style={styles.roleText}>Técnico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => router.push('/loginAdm')}>
          <Ionicons name="settings-outline" size={28} color="#FFF" />
          <Text style={styles.roleText}>ADM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4F46E5' },
  header: { height: '25%', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 220, height: 220 },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 50,
    alignItems: 'center',
    marginTop: -15,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 30 },
  roleButton: {
    width: '100%',
    height: 80,
    backgroundColor: '#4F46E5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  roleText: { marginLeft: 10, fontSize: 16, fontWeight: '600', color: '#FFF' },
});
