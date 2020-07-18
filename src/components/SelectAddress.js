import React from 'react';
import { observer } from 'mobx-react';

import { IonLabel, IonAvatar, IonRippleEffect, IonIcon } from '@ionic/react';
import { subwayOutline } from 'ionicons/icons';

const address = '3/1361, Vasundhara, ghaziabad, Uttar Pradesh, 201012.'

const SelectAddress = (props) => {
  const { store } = props;
  return (
    <div className='ion-activatable select_address'>
      <IonIcon icon={subwayOutline} slot="start" className='select_address_icon'/>

      <IonLabel>
        <p style={{fontSize: 15}}>Delivering to {address}</p>
      </IonLabel>
      <IonRippleEffect></IonRippleEffect>
    </div>
  );
}

export default observer(SelectAddress);