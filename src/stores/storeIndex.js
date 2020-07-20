import React from 'react';
import { Provider } from "mobx-react";

import storesStore from './StoresStore';
import selectedStore from './SelectedStore';
import profileStore from './ProfileStore'

const Stores = (props) => {
  return (
    <Provider storesStore={storesStore} selectedStore={selectedStore} profileStore={profileStore}>
      {props.children}
    </Provider>
  )
}

export default Stores;