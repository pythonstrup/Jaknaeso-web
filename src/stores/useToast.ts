import { create } from 'zustand';

interface ToastState {
  open: boolean;
  message: string;
}
interface ToastStoreState {
  toast: ToastState;
  setToast: (toast: ToastState) => void;
}

export const useToastStore = create<ToastStoreState>((set, _) => ({
  toast: {
    message: '',
    open: false,
  },
  setToast: (toast) => set({ toast }),
}));
