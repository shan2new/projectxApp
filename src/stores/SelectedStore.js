import { observable, action, computed, toJS, reaction, decorate } from 'mobx';
import StoresStore from './StoresStore';
import axios from './Helper/axios';

class SelectedStore {

  selectedStore = {};
  isSelectedSomeStore = false;
  isOpen = false;

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

  toggleModal () {
    this.isOpen = !this.isOpen;

    // if modal is closed remove selectedStoreId
    !this.isOpen && (StoresStore.selectedStoreId = null);
  }

  get name () {
    return this.selectedStore.name;
  }

  get image () {
    return this.selectedStore.featured_image;
  }

  get getStoreData () {
    return this.selectedStore;
  }
 
  get isStoreModalOpen () {
    return this.isOpen || false;
  }
  
}

decorate(SelectedStore, {
  selectedStore: observable,
  isSelectedSomeStore: observable,
  isOpen: observable,
  toggleModal: action,
  name: computed,
  getStoreData: computed,
  isStoreModalOpen: computed
});

const selectedStore = window.selectedStore = new SelectedStore();

export default selectedStore;