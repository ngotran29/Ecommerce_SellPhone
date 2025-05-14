import React from "react";
import { Col, Flex } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall
} from "./styled";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButtonInputSearch  from '../ButtonInputSearch/ButtonInputSearch'


export const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4}>
          <WrapperTextHeader>SELLPHONE</WrapperTextHeader>
        </Col>
        <Col span={12}>
         <ButtonInputSearch
         size='middle'
         placeholder='Nhập từ khóa tìm kiếm vào đây'
         text='Tìm kiếm'
         />
        </Col>
        <Col span={8} style={{display: 'flex', gap:'15px'}}>
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
            <ShoppingCartOutlined style={{fontSize:'22px', color:'rgb(26, 148, 255)'}} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>

          </div>
        </Col>
      </WrapperHeader>
      <hr />
    </div>
  );
};
