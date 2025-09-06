"use client";

import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const SwitchWrapper = ({ onChange }:any) => {
  return (
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
      onChange={onChange}
    />
  );
};

export default SwitchWrapper;