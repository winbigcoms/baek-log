import { StyleStore } from './style';

class RootStore {
  constructor() {
    this.style = new StyleStore(this);
  }
}

export default RootStore;
