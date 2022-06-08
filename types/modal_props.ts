export interface ModalProps {
  component?: React.FC<any>;
  props?: { [key: string]: unknown };
  isVisible?: boolean;
  closable?: boolean;
  onClose?: Function;
  closeModal?: Function;
  width?: number;
  title?: string;
  className?: string;
  enableBottomSheet?: boolean;
  fullScreen?: boolean;
  closeIcon?: boolean;
  headingClassName?: boolean;
  headingComponent?: React.FC<any>;
  bottomSheetFooter?: React.FC<any>;
  bottomSheetClassName?: string;
  modalFooter?: JSX.Element[];
  closeable?: boolean;
  centered?: boolean;
}

export interface ConfirmationModalProps {
  title?: string;
  message?: string;
  onCancel?: Function;
  onOkay?: Function;
  cancelLabel?: string;
  okayLabel?: string;
  isHeading?: string;
  isBackdropCloseable?: boolean;
  closable?: boolean;
}

export interface AsyncConfirmationModalProps {
  title?: string;
  message?: string;
  cancelLabel?: string;
  okayLabel?: string;
  closable?: boolean;
}
