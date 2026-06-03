import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Perfil() {
  return (
    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
            <Text style={styles.headerTitle}>Perfil</Text>
          </View>

          <View style={styles.profileRow}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.nome}>Claudio Rocha</Text>
              <Text style={styles.cargo}>Técnico</Text>

              <View style={styles.disponivelRow}>
                <Text style={styles.disponivel}>Disponível</Text>
                <View style={styles.bolinha} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>

          <Text style={styles.sectionTitle}>Visão geral</Text>

          <View style={styles.infoRow}>
            <Ionicons name="checkmark-circle" size={20} color="#7B61FF" />
            <View>
              <Text style={styles.infoTitle}>Disponível • O dia inteiro</Text>
              <Text style={styles.infoSub}>Horário de trabalho: 7h – 17h</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="time" size={20} color="#7B61FF" />
            <View>
              <Text style={styles.infoTitle}>Próximo serviço • 12h30</Text>
              <Text style={styles.infoSub}>Sistema travado – Sala 19</Text>
            </View>
          </View>


          <Text style={styles.sectionTitle}>Habilidades</Text>

          <View style={styles.skillsRow}>
            <View style={styles.cardSkill}>
              <MaterialIcons name="desktop-mac" size={40} color="#7B61FF" />
              <Text style={styles.skillText}>Sistemas de software</Text>
            </View>

            <View style={styles.cardSkill}>
              <FontAwesome5 name="microchip" size={36} color="#7B61FF" />
              <Text style={styles.skillText}>Sistemas de hardware</Text>
            </View>
          </View>


          <Text style={styles.sectionTitle}>Últimos chamados</Text>

          <View style={styles.chamadoCard}>
            <View style={styles.chamadoHeader}>
              <Text style={styles.chamadoTitulo}>Computador Travando</Text>
              <Text style={styles.hora}>12:30hr</Text>
            </View>

            <View style={styles.statusRow}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Em aberto</Text>
              <Text style={styles.local}>Sala 5</Text>
              <Text style={styles.setor}>Administração</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.chamadoHeader}>
              <Text style={styles.chamadoTitulo}>Máquina com defeito</Text>
              <Text style={styles.hora}>08:23hr</Text>
            </View>

            <View style={styles.statusRow}>
              <Ionicons name="checkmark-circle" size={14} color="#7B61FF" />
              <Text style={styles.statusText}>Resolvido</Text>
              <Text style={styles.local}>Oficina 12</Text>
              <Text style={styles.setor}>Produção</Text>
            </View>
          </View>

        </View>
      </ScrollView>


      <View style={styles.footer}>
        <Ionicons name="person" size={22} color="#fff" />
        <Ionicons name="home" size={22} color="#CBB7FF" />
        <Ionicons name="list" size={22} color="#CBB7FF" />
      </View>

    </View>
  );
}