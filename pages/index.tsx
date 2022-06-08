import { Button, Modal as AntModal } from "antd";
import type { NextPage } from "next";
import { useState } from "react";
import HelloWorld from "../component/organism/helloWorld/hello_world";
import { useWindowDimensions } from "../hooks/useWindowsDimensions";
import styles from "../styles/Home.module.css";
import { AsyncConfirmationModal } from "../utils/async_confirm_modal.utils";
import { ConfirmationModal } from "../utils/confirm_modal_utils";
import { Modal } from "../utils/model_utils";

const Home: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dimensions = useWindowDimensions();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //opening modal in a global scope
  const openModal = () => {
    Modal.open({
      title: "Modal Title",
      component: HelloWorld,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },
        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: "hello",
            },
            0
          );
        },
      },
    });
  };

  const openModalAndBottomSheet = () => {
    Modal.open({
      title: "Modal Title",
      enableBottomSheet: dimensions.width < 640,
      component: HelloWorld,
      fullScreen: true,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },
        enableBottomSheet: dimensions.width < 640,
        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: "hello",
            },
            0
          );
        },
      },
    });
  };

  const openConfirmationModal = () => {
    ConfirmationModal({
      onOkay: () => {
        console.log("handle onKay...");
      },
    });
  };

  const openAsynConfirmationModal = async () => {
    const confirm = await AsyncConfirmationModal({});
    console.log("confirm", confirm);
    //todo
    // if(confirm){
    // handle the required action if user confirm
    // }else{
    // handle the required action if user reject
    // }
  };

  return (
    <div className={styles.container}>
      <Button type="dashed" onClick={openModal}>
        Open Modal using Function
      </Button>
      <br />
      <br />
      <Button type="dashed" onClick={openModalAndBottomSheet}>
        Open Modal and bottomsheet on small device
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={showModal}>
        Open Modal general approach
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={openConfirmationModal}>
        Open Confirmation Modal
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={openAsynConfirmationModal}>
        Open Async Confirmation Modal
      </Button>

      <AntModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Modal data...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntModal>
    </div>
  );
};

export default Home;
