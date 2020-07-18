import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import { IonLabel, IonAvatar, IonRippleEffect, IonIcon } from '@ionic/react';
import { subwayOutline, arrowDown } from 'ionicons/icons';

const address = '3/1361, Vasundhara, ghaziabad, Uttar Pradesh, 201012.'

const SelectAddress = (props) => {
  const { store } = props;
  return (
    <div className='ion-activatable select_address'>
      <IonIcon icon={subwayOutline} slot="start" className='select_address_icon'/>

      <IonLabel style={{flexGrow: 1}}>
        <p style={{fontSize: 15}}>Delivering to {_.truncate(address, 25)}</p>
      </IonLabel>
      <IonIcon icon={arrowDown} slot="end" className='select_address_icon'/>
      <IonRippleEffect></IonRippleEffect>
    </div>
  );
}

export default observer(SelectAddress);