import React from 'react';
import { inject, observer } from 'mobx-react'

import {
  IonToolbar, IonModal, IonButtons,
  IonHeader, IonButton, IonIcon, IonLabel,
  IonContent, IonItem, IonItemDivider, IonRouterLink
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import SelectAddress from './SelectAddress';
import { NavLink } from 'react-router-dom';

const TempOrderSheet = (props) => {

  const { orderCartStore } = props;

  return (
    <IonModal
      isOpen={orderCartStore.isOpen}
      // onDidDismiss={() => props.setOpenState(false)}
    >
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear" onClick={() => orderCartStore.closeCart()}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonLabel>
            Confirmation
        </IonLabel>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <SelectAddress />
        {
          orderCartStore && orderCartStore.orderList.map((order, index) => {
            return (
              <IonItem key={index}>
                {/* <IonThumbnail slot="start">
                  <img className='product_thumbnail' src={"https://b.zmtcdn.com/data/res_imagery/18531910_RESTAURANT_80449ca7afb3eb4ca89f9de4ddcd4de5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"} alt='' />
                </IonThumbnail> */}
                <IonLabel>
                  <h2>{order.name}</h2>
                  <p>₹ {order.price}</p>
                </IonLabel>
                <p style={{ marginRight: 10 }}>{order.quantity || 1} X ₹ {order.price} = ₹ {(order.quantity || 1) * order.price}</p>
              </IonItem>
            );
          })
        }
      </IonContent>
      <IonItem key={'total'}>
        {/* <IonThumbnail slot="start">
                  <img className='product_thumbnail' src={"https://b.zmtcdn.com/data/res_imagery/18531910_RESTAURANT_80449ca7afb3eb4ca89f9de4ddcd4de5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"} alt='' />
                </IonThumbnail> */}
        <IonLabel>
          <h1>Total</h1>
          {/* <p>₹ {order.price}</p> */}
        </IonLabel>
        <p style={{ marginRight: 10 }}>₹ {orderCartStore.cartTotal}</p>
      </IonItem>
      <NavLink to='/app/orders'>
        <IonButton slot='end' type='submit' expand="block" fill='solid' size='large'  onClick={() => orderCartStore.confirmOrder()}>Confirm Order</IonButton>
      </NavLink>
    </IonModal>
  );
}

export default inject('orderCartStore')(observer(TempOrderSheet));
