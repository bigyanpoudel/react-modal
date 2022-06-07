import { Modal } from "antd";
import React from "react";
import { Modal as ModalUtil } from "../../../utils/model_utils";

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
}

export const ModalComponent = React.forwardRef(
  (propsValues: ModalProps, ref) => {
    const {
      component: RenderInner,
      props,
      closable = true,
      onClose = () => {},
      closeModal = () => {},
      isVisible,
      width = 500,
      title,
      className = "",
    } = propsValues;

    const onModalClose = (isClose: any) => {
      if (!closable) return;
      if (isClose) {
        closeModal();
        onClose();
      }
      ModalUtil.close();
    };

    return (
      <Modal
        visible={isVisible}
        title={title}
        onCancel={onModalClose}
        footer={null}
        width={width}
        className={className}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          {RenderInner && <RenderInner inModal={true} {...props} />}
        </div>
      </Modal>
    );
  }
);
