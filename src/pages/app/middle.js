import React from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

import { IonThumbnail, IonPage, IonContent, 
  IonList, IonTitle, IonHeader, IonToolbar, 
  IonListHeader, IonItem, IonLabel } from '@ionic/react';

import './middle.scss';
import StoreModal from './StoreModal';
import Refresher from '../../components/Refresher';


const middle = (props) => {

  const storesStore = _.get(props, 'storesStore'),
    itemData = (storesStore && storesStore.stores) || [];

  const handleOnClick = (storeId) => {
    storesStore.selectStore(storeId);
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>ProjectXAPP</IonTitle>
        </IonToolbar>
        {/* <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen>
        <Refresher/>

        <IonList>

          <IonListHeader>
            Nearest Restaurants
          </IonListHeader>

          {
            itemData.map((eachStore, index) => (
              <IonItem key={eachStore.id} button onClick={handleOnClick.bind(this, eachStore.id)}>
                {/* <IonAvatar slot="start"> */}
                  <IonThumbnail slot="start">
                    <img className='product_thumbnail' src={eachStore.thumb} alt='' />
                  </IonThumbnail>
                {/* </IonAvatar> */}
                <IonLabel>
                  <h2>{eachStore.name}</h2>
                  <h3>{eachStore.cuisines}</h3>
                  <p>Average cost for two: {eachStore.average_cost_for_two}</p>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>

        <StoreModal />
      </IonContent>
    </IonPage >
  )
}

export default inject('storesStore')(observer(middle));