import DrawerContent from './Content';
import DrawerMain from './Drawer';
import DrawerFooter from './Footer';

export const Drawer = Object.assign(DrawerMain, {
  Footer: DrawerFooter,
  Content: DrawerContent,
});
