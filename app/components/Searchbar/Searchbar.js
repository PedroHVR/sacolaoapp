import * as React from 'react';
import { Searchbar as SearchbarMaterial } from 'react-native-paper';

const Searchbar = ({ onChangeSearch, searchQuery, category }) => {

  return (
    <SearchbarMaterial
      placeholder={`Procurar ${category ? category : ''}`}
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon="magnify"
      iconColor="#000"
      theme={{colors: { text: "#000"}}}
    />
  );
};

export default Searchbar;