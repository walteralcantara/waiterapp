import { FlatList, TouchableOpacity } from 'react-native';

import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

import { Text } from '../Text';

import * as S from './styled';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={S.Separator}
      renderItem={({ item: product }) => (
        <S.Product>
          <S.ProductImage
            source={{
              uri: `http://192.168.0.129:3001/uploads/${product.imagePath}`,
            }}
          />
          <S.ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </S.ProductDetails>

          <S.AddToCartButton>
            <PlusCircle />
          </S.AddToCartButton>
        </S.Product>
      )}
    />
  );
}
