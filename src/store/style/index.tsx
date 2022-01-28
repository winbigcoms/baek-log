import { action, makeObservable, observable } from 'mobx';

let styleStore;

export class StyleStore {
  @observable darkMode: boolean;

  constructor() {
    makeObservable(this);
    this.darkMode = false;
  }

  @action changeMode = (mode: boolean) => {
    this.darkMode = mode;
  };

  @action hydrate = data => {
    if (!data) return;
    this.darkMode = data.darkMode !== null ? data.darkMode : false;
  };
}

function initStyleStore(initData = null) {
  const _store = store ?? new StyleStore();

  if (initData) {
    _store.hydrate(initData);
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
}

export function useStyleStore(initData: null | undefined) {
  const store = useMemo(() => initStyleStore(initData), [initData]);

  return store;
}
