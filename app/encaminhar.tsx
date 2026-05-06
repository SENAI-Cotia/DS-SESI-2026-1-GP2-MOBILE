import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EncaminharChamados() {
  const [selecionado, setSelecionado] = useState<number | null>(null);

  const funcionarios = [
    {
      id: 1,
      nome: 'Gabriel Oliveira',
      imagem: require('../assets/images/user.avif'),
    },
    {
      id: 2,
      nome: 'André Leonardo',
      imagem: require('../assets/images/user2.jpg'),
    },
    {
      id: 3,
      nome: 'Jorge da Silva',
      imagem: require('../assets/images/user3.jpg'),
    },
    {
      id: 4,
      nome: 'Arthur Soares',
      imagem: require('../assets/images/user4.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5D3FD3" />


      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Encaminhar chamados</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Máquina com defeito</Text>

          <View style={styles.tabs}>
            <Text style={styles.tab}>Oficina 12</Text>
            <Text style={styles.tab}>Produção</Text>
          </View>

          <Image
            source={require('../assets/images/maquina.jpg')}
            style={styles.cardImage}
          />

          <Text style={styles.description}>
            A máquina da oficina não está ligando, e suas engrenagens não rodam
          </Text>

          <View style={styles.cardFooter}>
            <Text style={styles.footerLeft}>Funcionário: Gustavo</Text>
            <Text style={styles.footerRight}>09 de abril, 08:32hr</Text>
          </View>
        </View>


        <Text style={styles.sectionTitle}>Enviar chamado para:</Text>

        {funcionarios.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.userCard,
              selecionado === item.id && styles.userCardSelecionado
            ]}
            onPress={() => setSelecionado(item.id)}
          >
            <Image source={item.imagem} style={styles.userImage} />

            <View>
              <Text style={styles.userName}>{item.nome}</Text>
              <Text style={styles.userRole}>Manutenção</Text>
            </View>
          </TouchableOpacity>
        ))}

        {selecionado && (
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Encaminhar chamado</Text>
          </TouchableOpacity>
        )}
      </ScrollView>


      <View style={styles.bottomNav}>
        <Ionicons name="person" size={24} color="#ad98ff" />
        <Ionicons name="home" size={28} color="#FFF" />
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

  card: {
    backgroundColor: '#efe5fd',
    margin: 20,
    borderRadius: 12,
    padding: 15,
    elevation: 5,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  tab: {
    color: '#666',
  },

  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },

  description: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerLeft: {
    fontSize: 12,
    color: '#333',
  },

  footerRight: {
    fontSize: 10,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
  },

  userCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  userCardSelecionado: {
    borderWidth: 2,
    borderColor: '#5D3FD3',
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  userRole: {
    color: '#777',
    fontSize: 12,
  },

  botao: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#5D3FD3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
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