import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

const ButtonInputSearch = (props) => {
  const { text, placeholder, size } = props;
  return (
    <div style={{display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "4px"}}>
      
      <Input size={size} placeholder={placeholder} variant="borderless" />

      <div style={{width: "1px",height: "20px", backgroundColor: "#ccc", margin: "0 8px",}}/>

      <Button color="primary" variant="text"  style={{ borderRadius: "0px 8px 8px 0px"}}>
        {text}
      </Button>

    </div>
  );
};

export default ButtonInputSearch;
