import React from 'react';

import { IonRefresher, IonContent, IonRefresherContent } from '@ionic/react';
import { chevronDownCircleOutline } from 'ionicons/icons';

export default (props) => {
  const refreshHandler = (event) => {
    props.refresh && props.refresh();

    setTimeout(() => {
      event.detail.complete();
    }, 1000);
  }

  return (
    <IonRefresher slot="fixed" onIonRefresh={refreshHandler.bind(this)}>
      <IonRefresherContent
        // pullingIcon={chevronDownCircleOutline}
        // pullingText="Pull to refresh"
        // refreshingSpinner="circles"
        // refreshingText="Refreshing..."
        ></IonRefresherContent>
    </IonRefresher>
  );
}