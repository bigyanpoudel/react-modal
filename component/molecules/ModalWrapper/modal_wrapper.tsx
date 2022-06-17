import React, { Component } from "react";
import { ModalProps } from "../../../types/modal_props";

import { CustomBottomSheet } from "../Bottomsheet/BottomSheet";
import { ModalComponent } from "../Modal/Modal";

export interface ModalOpenParams extends ModalProps {
  component?: React.FC<any>;
  ref?: any;
  id?: number;
}

export class ModalWrapper extends Component<{}, { modals: ModalOpenParams[] }> {
  state: any = {
    modals: [], // includes multiple models
  };

  totalIndex: number = 0;

  open = ({ ...args }: ModalOpenParams) => {
    const modal = { ...args };

    let { modals } = this.state;

    // isVisible controls the visibility of bottomsheet
    this.totalIndex++;

    (modal as any).isVisible = true;
    (modal as any).id = this.totalIndex;

    // ref controls the modal behaviour, like closing the modal our update the modal
    if (!modal.ref) {
      modal.ref = React.createRef();
    }

    modals.push({ ...modal });
    this.setState({ modals });
  };

  close = (index: number = this.state.modals.length - 1) => {
    let { modals } = this.state;
    setTimeout(() => {
      modals.splice(index, 1);
      this.setState({ modals });
    }, 200);

    // in order to retain close effect
    if (modals[index]) {
      modals[index].isVisible = false;
      this.setState({ modals });
    }
  };

  updateProps = (
    { ...props }: { [key: string]: any },
    index: number = this.state.modals.length - 1
  ) => {
    const { modals } = this.state;
    modals[index].props = { ...modals[index].props, ...props };
    this.setState({ modals });
  };

  render() {
    const { modals } = this.state;

    return modals.map((modal: ModalOpenParams, index: number) => {
      if (modal.enableBottomSheet) {
        return (
          <CustomBottomSheet
            key={modal.id + "" + index}
            closeModal={this.close}
            {...modal}
          />
        );
      } else
        return (
          <ModalComponent
            key={modal.id + "" + index}
            closeModal={this.close}
            {...modal}
          />
        );
    });
  }
}
