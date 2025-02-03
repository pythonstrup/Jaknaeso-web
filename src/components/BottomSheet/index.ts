import BottomSheetMain from './BottomSheet';
import BottomSheetContent from './Content';
import BottomSheetFooter from './Footer';

export const BottomSheet = Object.assign(BottomSheetMain, {
  Footer: BottomSheetFooter,
  Content: BottomSheetContent,
});
