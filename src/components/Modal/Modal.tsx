import { Fragment, type PropsWithChildren } from 'react';
import { Dialog } from 'radix-ui';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description?: string;
}

export default function Modal({ isOpen, closeModal, title, description, children }: PropsWithChildren<ModalProps>) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content} onOpenAutoFocus={(event: Event) => event.preventDefault()}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          {description && (
            <Dialog.Description className={styles.description}>
              {description.split('\\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </Dialog.Description>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
