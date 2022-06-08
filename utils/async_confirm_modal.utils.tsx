import { Button } from "antd";
import { AsyncConfirmationModalProps } from "../types/modal_props";
import { Modal } from "./model_utils";

/**
 * Async Confirmation Modal
 * Can be used to take a response from the user and perform action based on user decision
 * @param title string
 * @param cancelLabel string
 * @param okayLabel string
 * @param closable bool
 * @param message string
 * @returns Promise
 */

export const AsyncConfirmationModal = ({
  cancelLabel = "Cancel",
  okayLabel = "Confirm",
  message = "AsynConfirmation Modal message",
  title = "AsyncConfirmation Modal Title",
  closable = false,
}: AsyncConfirmationModalProps) => {
  return new Promise<boolean>((resolve, _) => {
    const modalAction: JSX.Element[] = [
      <Button
        key="back"
        onClick={() => {
          resolve(false);
          Modal.close();
        }}
      >
        {cancelLabel}
      </Button>,
      <Button
        key="submit"
        type="primary"
        onClick={() => {
          resolve(true);
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
  });
};

const ConfirmationModalBody = ({ message }: AsyncConfirmationModalProps) => {
  return <div className="confirmation__modal--body">{message}</div>;
};
