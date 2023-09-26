import { create } from 'zustand';

interface LoginStore {
  isMaster: boolean;
  login: () => void;
  logout: () => void;
}

export const useLoginStore = create<LoginStore>(set => ({
  isMaster: false,
  login: () => set(state => ({ isMaster: true })),
  logout: () => set(state => ({ isMaster: false }))
}));
