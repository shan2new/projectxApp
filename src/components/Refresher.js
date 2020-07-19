import React from 'react';

import { IonRefresher, IonContent, IonRefresherContent } from '@ionic/react';

export default (props) => {
  const refreshHandler = (event) => {
    props.refresh && props.refresh();

    setTimeout(() => {
      event.detail.complete();
    }, 1000);
  }

  return (
    <IonRefresher slot="fixed" onIonRefresh={refreshHandler.bind(this)}>
      <IonRefresherContent></IonRefresherContent>
    </IonRefresher>
  );
}