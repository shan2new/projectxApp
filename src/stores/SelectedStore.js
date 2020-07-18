import { observable, action, computed, toJS, reaction } from 'mobx';
import StoresStore from './StoresStore';
import axios from './Helper/axios';

class SelectedStore {

  @observable selectedStore = {};
  @observable isSelectedSomeStore = false;
  @observable isOpen = false;

  constructor () {
    reaction(() => StoresStore.selectedStoreId, (storeId) => {
      if (!storeId) {
        this.isOpen = false;
        return;
      }

      console.log('storeId: ', storeId);

      this.selectedStore = StoresStore.stores.find((store) => store.id === storeId);
      this.isOpen = true;

      console.log('selectedStore: ', this.selectedStore, this.isOpen);

    })
  }

  @action
  toggleModal () {
    this.isOpen = !this.isOpen;

    // if modal is closed remove selectedStoreId
    !this.isOpen && (StoresStore.selectedStoreId = null);
  }

  @computed
  get name () {
    return this.selectedStore.name;
  }

  @computed
  get image () {
    return this.selectedStore.featured_image;
  }

  @computed
  get getStoreData () {
    return this.selectedStore;
  }

  @computed 
  get isStoreModalOpen () {
    return this.isOpen || false;
  }
}

const selectedStore = window.selectedStore = new SelectedStore();

export default selectedStore;