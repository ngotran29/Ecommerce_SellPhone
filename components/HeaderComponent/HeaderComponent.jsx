import React from "react";
import { Col, Flex } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall
} from "./styled";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { Search } = Input;

export const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>SELLPHONE</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="Nhập sản phẩm bạn muốn tìm"
            //onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col span={6} style={{display: 'flex'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize: '22px'}}/>
            <div>
              <WrapperTextHeaderSmall>Đăng ký/ Đăng nhập</WrapperTextHeaderSmall>
              <div>
              <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div style={{display:'flex', alignItems:'center'}}>
            <ShoppingCartOutlined style={{fontSize:'22px', color:'#fff'}} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>

          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};
