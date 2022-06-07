import { Button } from "antd";
import React from "react";
import { Modal } from "../../../utils/model_utils";

const HelloWorld = ({ callback, data, update }: any) => {
  console.log("data..", data);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div>Hello world</div>
      <div>Hello world</div>
      <div>Hello world</div>
      <div className="modal__bottom">
        <Button
          type="primary"
          style={{ marginRight: "10px" }}
          onClick={() => {
            console.log("updating modal");
            update();
          }}
        >
          Okay
        </Button>
        <Button type="primary" danger onClick={callback}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default HelloWorld;
