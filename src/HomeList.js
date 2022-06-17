import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: 1,
          title: 'Bolos de Casamento',
          img: require('../assets/images/tipos/sobremesa.png'),
          description: 'Bolos feitos para casamento',
          bg: '#e35339',
          products: [
            {
              key: 1,
              name: 'Bolo Casamento 3 Andares',
              img: require('../assets/images/cardapio/boloCasamento/bolo1original.png'),
            },
              {
              key: 2,
              name: 'Bolo Simples',
              img: require('../assets/images/cardapio/boloCasamento/bolo2.png'),
            },
              {
              key: 3,
              name: 'Bolo Casamento Muito Simples',
              img: require('../assets/images/cardapio/boloCasamento/bolo3.png'),
            },
          ],
        },
        {
          key: 2,
          title: 'Bolos de Aniversário',
          img: require('../assets/images/tipos/sobremesa.png'),
          description: 'Bolos para aniversário.',
          bg: '#a6bb24',
          products: [
            {
              key: 1,
              name: 'Bolo Masculino',
              img: require('../assets/images/cardapio/boloAniversario/bolodeaniversario1.png'),
            },
            {
              key: 2,
              name: 'Bolo Feminino',
              img: require('../assets/images/cardapio/boloAniversario/bolodeaniversario2.png'),
            },
            {
              key: 3,
              name: 'Bolo Padrão',
              img: require('../assets/images/cardapio/boloAniversario/bolodeaniversario3.png'),
            },
          ],
        },
        {
          key: 3,
          title: 'Bolos de Formatura',
          img: require('../assets/images/tipos/sobremesa.png'),
          description: 'Bolos para formatura',
          bg: '#079ed4',
          products: [
            {
              key: 1,
              name: 'Bolo Branco e Azull',
              img: require('../assets/images/cardapio/boloFormatura/bolodeformatura1.png'),
            },
            {
              key: 2,
              name: 'Bolo Azul e Branco',
              img: require('../assets/images/cardapio/boloFormatura/bolodeformatura2.png'),
            },
            {
              key: 3,
              name: 'Bolo Rosa',
              img: require('../assets/images/cardapio/boloFormatura/bolodeformatura3.png'),
            }
          ],
        },
        {
          key: 4,
          title: 'Bolos Diversos',
          img: require('../assets/images/tipos/sobremesa.png'),
          description: 'Vários tipos de bolos',
          bg: '#fcb81c',
          products: [
            {
              key: 1,
              name: 'Bolo de Chocolate',
              img: require('../assets/images/cardapio/boloDiversos/bolodechocolate.png'),
            },
            {
              key: 2,
              name: 'Bolo Fofo',
              img: require('../assets/images/cardapio/boloDiversos/bolofofo.png'),
            },
            {
              key: 3,
              name: 'Bolo Mole',
              img: require('../assets/images/cardapio/boloDiversos/bolomole.png'),
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <Lista data={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clicou = this.clicou.bind(this);
  }
  clicou() {
    this.props.navigation.navigate('HomeProducts', {
      title: this.props.data.title,
      products: this.props.data.products,
    });
  }
  render() {
    return (
      <TouchableHighlight underlayColor="#CCCCCC" onPress={this.clicou}>
        <View style={[styles.listItem, {backgroundColor: this.props.data.bg}]}>
          <Image source={this.props.data.img} style={styles.listImage} />
          <View>
            <Text style={styles.listTitle}>{this.props.data.title}</Text>
            <Text style={styles.listDescription}>
              {this.props.data.description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 100,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listImage: {
    width: 64,
    height: 64,
    marginLeft: 20,
    marginRight: 20,
  },
  listTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  listDescription: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
