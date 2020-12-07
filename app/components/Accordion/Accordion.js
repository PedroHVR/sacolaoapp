import React, { useState } from 'react';
import { List, withTheme } from 'react-native-paper';
import { Text } from 'react-native-paper';
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import { ButtonPrimary } from '../ButtonPrimary';

const statuses = ["", "Aguardando voluntário", "Está sendo comprado", "Finalizada"]
const statusesSelf = ["", "", "Você está ajudando", "Finalizada"]

const Accordion = ({ name, userName, items, status, orderId, helper, type, theme }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  const themeAccordion =  {colors: {text: "#000", primary: "#000"}}
  const { isCategoryEmpty, helpOrderUser, loading } = useOrder()
  const { profile } = useAuth();
  const title = type === 1 ?
  `${statuses[status]} ${status !== 1
    && helper ? 'por '+helper.name : ''}` :
  `${statusesSelf[status]} ${userName}`

  return (
    <List.Section
      theme={{...themeAccordion, ...theme}}
      title={`Pedido ${name}`}
      style={{width: "100%"}}
      titleStyle={{
        color: "#000"
      }}
    >
      <List.Accordion
        title={title}
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
        theme={themeAccordion}
        style={{width: "100%"}}
      >
        {
          items.map(item => Object.keys(item).map((category, index) => {
            const products = item[category]
            return (
              !isCategoryEmpty(orderId, category, type) && <List.Section 
                key={index} 
                title={category}
                titleStyle={{
                  color: "#000"
                }}
              >
                {Object.keys(products).map(index => {
                    const product = products[index]
                    return (
                      product.quantity > 0 && <List.Item
                        key={index}
                        theme={themeAccordion}
                        titleStyle={{color: "#000"}}
                        title={`${product.quantity}(un) ${product.name}`}
                      />
                    )
                  }
                )}
              </List.Section>
            )}
          ))
        }
      </List.Accordion>
      {type === 1 && profile === 2 && 
        <ButtonPrimary 
          mode="contained"
          disabled={status !== 1 || loading}
          onClick={() => helpOrderUser(orderId)}
          loading={loading}
        >
          <Text>Ajudar</Text>
        </ButtonPrimary>
      }
      {profile === 1 && 
        <ButtonPrimary 
          mode="contained"
          disabled={status !== 2}
        >
          <Text>Já recebi essa compra</Text>
        </ButtonPrimary>
      }
    </List.Section>
  );
};

export default withTheme(Accordion)
