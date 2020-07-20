import { observable, action, computed } from 'mobx';
import { Route } from 'react-router';
import selectedStore from './SelectedStore';

class OrderCartStore {
  @observable orderList = [];
  @observable isCartConfirmationOpen = false;

  @action
  openCart(addOrderList = []) {
    addOrderList.forEach((order) => {
      this.orderList.push(order);
    });

    this.isCartConfirmationOpen = true;
  }

  @action 
  closeCart () {
    this.isCartConfirmationOpen = false;
  }

  @action
  confirmOrder () {
    setTimeout(() => {
      this.closeCart();
      selectedStore.toggleModal();
      this.orderList = [];
    }, 200);
  }

  @computed
  get isOpen () {
    return this.isCartConfirmationOpen;
  }

  @computed 
  get cartTotal () {
    return this.orderList.reduce((total, order, index) => total + (order.quantity || 1) * order.price, 0);
  }
}

const orderCartStore = window.orderCartStore = new OrderCartStore();

export default orderCartStore;