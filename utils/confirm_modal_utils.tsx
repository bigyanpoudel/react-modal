import { Button } from "antd";
import { ConfirmationModalProps } from "../types/modal_props";
import { Modal } from "./model_utils";

/**
 * Confirmation Modal
 * Used to handle the confirmation from user and perform action accordingly
 * @param title string // title of the modal
 * @param cancelLabel string
 * @param okayLabel string
 * @param message string
 * @param onCancel Function
 * @param onOkay Function
 * @param closable bool
 */

export const ConfirmationModal = ({
  title = "Confirmation Modal Title",
  cancelLabel = "Cancel",
  message = "Confirmation Modal Message",
  okayLabel = "Okay",
  onCancel = () => Modal.close(),
  onOkay = () => {},
  closable = false,
}: ConfirmationModalProps) => {
  const modalAction: JSX.Element[] = [
    <Button
      key="back"
      onClick={() => {
        onCancel();
        Modal.close();
      }}
    >
      {cancelLabel}
    </Button>,
    <Button
      key="submit"
      type="primary"
      onClick={() => {
        onOkay();
        Modal.close();
      }}
    >
      {okayLabel}
    </Button>,
  ];

  Modal.open({
    component: ConfirmationModalBody,
    modalFooter: modalAction,
    title: title,
    closable: closable,
    closeIcon: true,
    props: {
      message: message,
    },
  });
};

const ConfirmationModalBody = ({ message }: ConfirmationModalProps) => {
  return <div className="confirmation__modal--body">{message}</div>;
};
