import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <Image 
        source={{ uri: 'https://img.freepik.com/fotos-premium/fundo-de-tecnologia-abstrata-de-codigo-de-programacao-do-desenvolvedor-de-software-e-script-de-computador_34663-31.jpg?semt=ais_hybrid' }} 
        style={styles.coverImage}
      />

      <Image 
        source={{ uri: 'https://instagram.fgyn22-1.fna.fbcdn.net/v/t51.2885-19/457484522_524150940117617_3513318727205484452_n.jpg?_nc_ht=instagram.fgyn22-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2AENuTvXeEewuvxEOqy7aFgW7_SYyOXI-WWAOetzKxnK19uZS1MX51uNOevsbQ8F7s8&_nc_ohc=A16LZE6LrcoQ7kNvgFKedjm&_nc_gid=GY-n1q-ovmqHS1RlsWt_2w&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYF5IijesraY3T2W9Vy6jX4nob0a_ka_AA-vDHQwreWrTA&oe=67DA856F&_nc_sid=7a9f4b' }}
        style={styles.profileImage}
      />

      <Text style={styles.name}>Gabriel Ferreira</Text>
      <Text style={styles.bio}>Desenvolvedor web focado em mapeamento e automação de processos.</Text>

      <Text style={styles.sectionTitle}>Habilidades e Interesses</Text>
      <Text style={styles.item}>🚀 Desenvolvimento Web e Mobile</Text>
      <Text style={styles.item}>📚 Leitura e Aprendizado Contínuo</Text>
      <Text style={styles.item}>🎮 Jogos e Entretenimento Digital</Text>

      <Button 
        title="Toque para uma motivação"
        onPress={() => Alert.alert('Frase Motivacional', 'O sucesso é a soma de pequenos esforços repetidos diariamente!')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  coverImage: {
    width: '100%',
    height: 150, 
    resizeMode: 'cover',
    marginBottom: -60, 
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});
