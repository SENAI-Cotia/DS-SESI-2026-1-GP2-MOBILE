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

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5D3FD3" />

      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../assets/images/user5.avif')}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.name}>Claudio Rocha</Text>
            <Text style={styles.role}>Técnico</Text>

            <View style={styles.statusRow}>
              <Text style={styles.status}>Disponível</Text>
              <View style={styles.dot} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visão geral</Text>

          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={18} color="#6c63ff" />
            <Text style={styles.infoText}>Disponível • O dia inteiro</Text>
          </View>

          <Text style={styles.subText}>Horário de trabalho: 7h - 17h</Text>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="time" size={18} color="#a3c940" />
            <Text style={styles.infoText}>Próximo serviço • 12h30</Text>
          </View>

          <Text style={styles.subText}>Sistema travado - Sala 19</Text>
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>

          <View style={styles.skillsContainer}>
            <View style={styles.skillCard}>
              <MaterialIcons name="computer" size={40} color="#5D3FD3" />
              <Text style={styles.skillText}>Sistemas de software</Text>
            </View>

            <View style={styles.skillCard}>
              <MaterialIcons name="memory" size={40} color="#5D3FD3" />
              <Text style={styles.skillText}>Sistemas de hardware</Text>
            </View>
          </View>
        </View>

        {/* ultimos chamados */}
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
              <Text style={styles.callLocation}>Sala 5</Text>
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
              <Text style={styles.callLocation}>Oficina 12</Text>
            </View>
          </View>
        </View>
      </ScrollView>


{/* Nav */}
      <View style={styles.bottomNav}>
        <Ionicons name="person" size={24} color="#fff" />
        <Ionicons name="home" size={28} color="#ad98ff" />
        <Ionicons name="menu" size={24} color="#ad98ff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    backgroundColor: '#5D3FD3',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  profileHeader: {
    backgroundColor: '#5D3FD3',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFF',
  },

  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  role: {
    color: '#ddd',
    marginBottom: 5,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  status: {
    color: '#FFF',
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#00ff88',
    borderRadius: 4,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 5,
  },

  infoText: {
    fontSize: 14,
    fontWeight: '500',
  },

  subText: {
    fontSize: 12,
    color: '#777',
    marginLeft: 25,
    marginBottom: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

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

  callHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  callTitle: {
    fontWeight: 'bold',
  },

  callTime: {
    fontSize: 12,
    color: '#777',
  },

  callRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },

  callStatus: {
    fontSize: 13,
  },

  callLocation: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#777',
  },

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