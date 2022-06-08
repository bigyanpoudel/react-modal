import { CloseOutlined } from "@ant-design/icons";
import React, { forwardRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { ModalProps } from "../../../types/modal_props";
import { Modal as ModalUtil } from "../../../utils/model_utils";
import "react-spring-bottom-sheet/dist/style.css";

export const CustomBottomSheet = forwardRef(
  (propsValues: ModalProps, ref: any) => {
    const {
      component: RenderInner,
      props,
      closable = true,
      onClose = () => {},
      closeModal = () => {},
      isVisible = false,
      title,
      bottomSheetFooter: FooterComponent,
      headingComponent: HeadingComponent,
      fullScreen = false,
      closeIcon = false,
      headingClassName = "",
      bottomSheetClassName = "",
    } = propsValues;

    const onBottomSheetClose = () => {
      if (!closable) return;
      if (closable) {
        closeModal();
        onClose();
      }
      ModalUtil.close();
    };

    const RenderHeadComponent = () => {
      if (HeadingComponent) {
        return <HeadingComponent />;
      } else {
        return (
          <div className="bottomsheet_heading">
            {title && <h4 className={`${headingClassName}`}>{title}</h4>}
            {(fullScreen || closeIcon) && (
              <CloseOutlined
                onClick={onBottomSheetClose}
                className="bottomsheet_heading--icon"
              />
            )}
          </div>
        );
      }
    };

    return (
      <BottomSheet
        open={isVisible}
        onDismiss={onBottomSheetClose}
        ref={ref}
        snapPoints={({ maxHeight, minHeight }) =>
          fullScreen ? maxHeight : minHeight
        }
        initialFocusRef={false}
        header={RenderHeadComponent()}
        footer={FooterComponent && <FooterComponent />}
      >
        <div
          className={`${bottomSheetClassName}`}
          style={{
            position: "relative",
            height: "100%",
          }}
        >
          {RenderInner && <RenderInner {...props} />}
        </div>
      </BottomSheet>
    );
  }
);
