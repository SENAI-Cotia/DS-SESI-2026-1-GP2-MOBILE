import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5D3FD3" />

      {/* Header */}
      <View style={styles.header}>
        <Link href={"/homeFuncionario"}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Meu perfil</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Info */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/images/user5.avif')}
              style={styles.avatar}
            />
            {/* Lápis de edição */}
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="pencil" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.name}>Ana Paula</Text>
            <Text style={styles.role}>Funcionária</Text>
            <Text style={styles.position}>Auxiliar de produção II</Text>
            <Text style={styles.cpf}>CPF: ***.***.***-**</Text>
          </View>
        </View>

        {/* Habilidades */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillCard}>
              <MaterialIcons name="build" size={40} color="#5D3FD3" />
              <Text style={styles.skillText}>Manuseio de Máquinas</Text>
            </View>
            <View style={styles.skillCard}>
              <MaterialIcons name="local-shipping" size={40} color="#5D3FD3" />
              <Text style={styles.skillText}>Embalagem e Logística</Text>
            </View>
          </View>
        </View>

        {/* Últimos chamados */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimos chamados</Text>

          <View style={styles.callCard}>
            <View style={styles.callHeader}>
              <Text style={styles.callTitle}>Computador Travando</Text>
              <Text style={styles.callTime}>12:30hr</Text>
            </View>
            <View style={styles.callRow}>
              <Ionicons name="time" size={16} color="#a3c940" />
              <Text style={styles.callStatus}>Em aberto</Text>
              <Text style={styles.callLocation}>Sala 5 • Administração</Text>
            </View>
          </View>

          <View style={styles.callCard}>
            <View style={styles.callHeader}>
              <Text style={styles.callTitle}>Máquina com defeito</Text>
              <Text style={styles.callTime}>08:23hr</Text>
            </View>
            <View style={styles.callRow}>
              <Ionicons name="checkmark-circle" size={16} color="#6c63ff" />
              <Text style={styles.callStatus}>Resolvido</Text>
              <Text style={styles.callLocation}>Oficina 12 • Produção</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="person" size={26} color="#FFF" />
        <Ionicons name="home" size={26} color="#FFF" />
        {/* Ícone de histórico */}
        <Ionicons name="time" size={26} color="#FFF" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  header: {
    backgroundColor: '#5D3FD3',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },

  profileHeader: {
    backgroundColor: '#5D3FD3',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  avatarContainer: { position: 'relative' },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#5D3FD3',
    borderRadius: 12,
    padding: 4,
  },
  name: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  role: { color: '#ddd', marginBottom: 2 },
  position: { color: '#FFF', fontSize: 14, fontWeight: '500' },
  cpf: { color: '#FFF', fontSize: 12, marginTop: 5 },

  section: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },

  skillsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  skillCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
  },
  skillText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#5D3FD3',
    fontWeight: '500',
  },

  callCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  callHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  callTitle: { fontWeight: 'bold' },
  callTime: { fontSize: 12, color: '#777' },
  callRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
  callStatus: { fontSize: 13 },
  callLocation: { marginLeft: 'auto', fontSize: 12, color: '#777' },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#5D3FD3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
