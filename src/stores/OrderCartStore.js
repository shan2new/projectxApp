import { observable, action, computed, decorate } from 'mobx';
import { Route } from 'react-router';
import selectedStore from './SelectedStore';

class OrderCartStore {
   orderList = observable([]);
   isCartConfirmationOpen = false;

  openCart(addOrderList = []) {
    addOrderList.forEach((order) => {
      this.orderList.push(order);
    });

    this.isCartConfirmationOpen = true;
  }
 
  closeCart () {
    this.isCartConfirmationOpen = false;
  }

  confirmOrder () {
    setTimeout(() => {
      this.closeCart();
      selectedStore.toggleModal();
      this.orderList = [];
    }, 200);
  }

  get isOpen () {
    return this.isCartConfirmationOpen;
  }
 
  get cartTotal () {
    return this.orderList.reduce((total, order, index) => total + (order.quantity || 1) * order.price, 0);
  }
}

decorate(OrderCartStore, {
  orderList: observable,
  isCartConfirmationOpen: observable,
  openCart: action,
  closeCart: action,
  confirmOrder: action,
  isOpen: computed,
  cartTotal: computed
})

const orderCartStore = window.orderCartStore = new OrderCartStore();

export default orderCartStore;