import { useToastStore } from '@/stores';

export function useToast() {
  const { toast, setToast } = useToastStore();

  const showToast = (message: string, duration = 500) => {
    setToast({ open: true, message });
    setTimeout(() => {
      setToast({ open: false, message });
    }, duration);
  };

  const updateToast = (open: boolean) => {
    setToast({ ...toast, open });
  };

  return { toast, updateToast, showToast };
}
