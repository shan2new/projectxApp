import React from 'react';
import { observer } from 'mobx-react';

import { IonLabel } from '@ionic/react';

const StoreHeader = (props) => {
  const { store } = props;
  return (
    <IonLabel>
      <h1>{store.name}</h1>
      <h3>{store.cuisines}</h3>
      <p>Average cost for two: {store.average_cost_for_two}</p>
    </IonLabel>
  );
}

export default observer(StoreHeader);