import React from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';
import { IonPage, IonContent, IonTitle, IonHeader, IonToolbar, } from '@ionic/react';

import Refresher from '../../components/Refresher';
import GoogleAuthButton from '../../components/GoogleAuthButton'

const profile = (props) => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>ProjectXAPP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <GoogleAuthButton/>
          <Refresher/>   
      </IonContent>
    </IonPage >
  )
}

export default inject('profileStore')(observer(profile));