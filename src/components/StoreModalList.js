import React from 'react';
import { inject, observer } from 'mobx-react';
// import _ from 'lodash';

import { IonLabel, IonList, IonListHeader, IonItem, IonThumbnail, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import TempOrderSheet from './TempOrderSheet';

const productData = [{
  price: 123,
  name: 'Samose',
  description: 'ka bhaiya',
  image: '',
  category: 'food'
}, {
  price: 67,
  name: 'Gol Gappe',
  description: 'Khao dabake!',
  image: '',
  category: 'food'
}];

const StoreModalList = (props) => {

  const {orderCartStore} = props;

  const handleProductClick = (index) => {
    orderCartStore.openCart([productData[index]]);
  }


  return (
    <>
      <IonList className='store_modal_product_list'>
        <IonListHeader>
          List of Products
      </IonListHeader>
        {
          productData.map((product, index) => (
            <IonItem key={index} button onClick={handleProductClick.bind(this, index)}>
              <IonThumbnail slot="start">
                <img className='product_thumbnail' src={"https://b.zmtcdn.com/data/res_imagery/18531910_RESTAURANT_80449ca7afb3eb4ca89f9de4ddcd4de5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"} alt='' />
              </IonThumbnail>
              <IonLabel>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </IonLabel>
              <p style={{ marginRight: 10 }}>₹{product.price}</p>
              <IonIcon icon={arrowForward} />
            </IonItem>
          ))
        }

      </IonList>
      <TempOrderSheet/>
    </>
  );
}

export default inject('orderCartStore')(observer(StoreModalList));