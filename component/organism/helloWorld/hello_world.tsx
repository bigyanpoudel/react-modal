import { Button } from "antd";
import React from "react";

const HelloWorld = ({ callback, data, update, enableBottomSheet }: any) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div>Updated props is {data || "Null"}</div>
      <div>Hello world</div>
      <div>Hello world</div>
      <div
        className="modal__bottom"
        style={{
          position: enableBottomSheet ? "fixed" : "absolute",
        }}
      >
        <Button type="primary" style={{ marginRight: "10px" }} onClick={update}>
          update props
        </Button>
        <Button type="primary" danger onClick={callback}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default HelloWorld;
