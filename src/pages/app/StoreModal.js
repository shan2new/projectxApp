import React from 'react';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';

import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, IonLabel, IonAvatar } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';

// import axios from './Helper/axios';
import './StoreModal.scss';
import StoreHeader from '../../components/StoreHeader';
import SelectAddress from '../../components/SelectAddress';
import StoreModalList from '../../components/StoreModalList';

const StoreModal = (props) => {

  const { selectedStore } = props;

  console.log('selectedStore: ', props);

  return (
    <IonModal
      isOpen={selectedStore.isStoreModalOpen}
      // onDidDismiss={handleClose}
      className="store_modal_root">
      <IonHeader className="store_modal_header" translucent onClick={() => selectedStore.toggleModal()}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear">
              <IonIcon icon={arrowDown} />
            </IonButton>
          </IonButtons>
          <IonAvatar slot="end">
            <img className='header_avatar' src={selectedStore.selectedStore.thumb} alt='' />
          </IonAvatar>
          <IonLabel>
            <h2>{selectedStore.name}</h2>
            <h3>{_.truncate(selectedStore.selectedStore.cuisines, {
              length: 40
            })}</h3>
            {/* <h1>>{selectedStore.name} */}
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent className="track-content">
        {/* ToDO: Replace it with Ion Slides */}
        <img src={selectedStore.image} alt='' className='store_modal_img'/>
        <div className='store_modal_content'>
          <StoreHeader store={selectedStore.selectedStore}/>
        </div>
        <SelectAddress />
        <StoreModalList selectedStore={selectedStore.selectedStore}/>
      </IonContent>
    </IonModal>
  );
}

export default inject('selectedStore')(observer(StoreModal));