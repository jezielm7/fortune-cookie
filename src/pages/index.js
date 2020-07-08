import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Phrases from '../components';

import styles from './styles';

const Home = () => {
  const phrase = 'Click to see some phrase!';

  const [image, setImage] = useState(require('../assets/cookie.png'));
  const [phrases, setPhrases] = useState(phrase);
  

  function toBreakCookie() {
    const randomNumber = Math.floor(Math.random() * Phrases.length);

    setPhrases('"' + Phrases[randomNumber] + '"');
    setImage(require('../assets/op-cookie.png'));
  };

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.img}
      />

      <View style={styles.textView}>
        <Text style={styles.text}>{phrases}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={toBreakCookie}
      >
        <Text style={styles.btnText}>Open</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;