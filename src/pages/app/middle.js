import React from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

import { IonTab, IonPage, IonContent, IonAvatar, IonSlides, IonSlide, IonList, IonTitle, IonHeader, IonToolbar, IonListHeader, IonItem, IonLabel } from '@ionic/react';


const middle = (props) => {

  const itemData = _.get(props, 'storesStore.stores') || [];

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>ProjectXAPP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>

          <IonListHeader>
            Nearest Restaurants
          </IonListHeader>

          {
            itemData.map((eachStore, index) => (
              <IonItem key={eachStore.id}>
                <IonAvatar slot="start">
                  <img src={eachStore.featured_image}/>
                </IonAvatar>
                <IonLabel>
                  <h2>{eachStore.name}</h2>
                  <h3>{eachStore.cuisines}</h3>
                  <p>Average cost for two: {eachStore.average_cost_for_two}</p>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>

        <IonList>
          <IonListHeader>
            Recent Conversations
          </IonListHeader>

          {
            itemData.map((eachStore, index) => (
              <IonItem key={eachStore.id}>
                <IonAvatar slot="start">
                  <img src={eachStore.featured_image}/>
                </IonAvatar>
                <IonLabel>
                  <h2>{eachStore.name}</h2>
                  <h3>{eachStore.cuisines}</h3>
                  <p>Average cost for two: {eachStore.average_cost_for_two}</p>
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>

        <IonList>
          <IonListHeader>
            Recent Conversations
          </IonListHeader>

          {
            itemData.map((eachStore, index) => (
              <IonItem key={eachStore.id}>
                <IonAvatar slot="start">
                  <img src={eachStore.featured_image} />
                </IonAvatar>
                <IonLabel>
                  <h2>{eachStore.name}</h2>
                  <h3>{eachStore.cuisines}</h3>
                  <p>Average cost for two: {eachStore.average_cost_for_two}</p>
                </IonLabel>
              </IonItem>
            ))
          }

        </IonList>
      </IonContent>
    </IonPage >
  )
}

export default inject('storesStore')(observer(middle));;