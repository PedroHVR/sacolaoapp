import React, { useState } from 'react';
import { List, withTheme } from 'react-native-paper';
import useOrder from '../../hooks/useOrder';
import { order } from '../../services/order';

const statuses = ["", "Aguardando voluntário", "Está sendo comprado", "Finalizada"]

const Accordion = ({ name, items, status, orderId, theme }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  const themeAccordion =  {colors: {text: "#000", primary: "#000"}}
  const { isCategoryEmpty } = useOrder()
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
        title={`Status: ${statuses[status]}`}
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
              !isCategoryEmpty(orderId, category) && <List.Section 
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
    </List.Section>
  );
};

export default withTheme(Accordion)