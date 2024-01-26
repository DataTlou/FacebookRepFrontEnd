import React, { useState } from "react";
import "../components/components.css";
import { Button, Input, Menu, Row, List, Dropdown } from "antd";
import {
  FacebookFilled,
  HomeOutlined,
  HomeFilled,
  PlaySquareOutlined,
  PlaySquareFilled,
  ShopOutlined,
  ShopFilled,
  NodeIndexOutlined,
  MenuOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined
} from "@ant-design/icons";

const Header = () => {
  const items = [
    HomeOutlined,
    PlaySquareOutlined,
    ShopOutlined,
    NodeIndexOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon, {
      style: { fontSize: "200%", width: "150%" },
    }),
  }));
  const [menuItems, setMenuItems] = useState(items);
  const [openDrop, setOpenDrop] = useState(false)
  const selectedItems = [
    HomeFilled,
    PlaySquareFilled,
    ShopFilled,
    NodeIndexOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon, {
      style: { fontSize: "200%", width: "150%" },
    }),
  }));
  const HandleMenuSelection = ({ key }) => {
    let values = items;
    selectedItems.map((record) => {
      if (record.key === key) {
        values[key - 1].icon = record.icon;
      }
    });
    setMenuItems(values);
  };
  const searchMenu = 
  (
    
    <Menu expandIcon={{PlaySquareOutlined}}>
      <h3>Recent</h3>
      <List>

      </List>
    </Menu>
  )
  const HandleInputClick = () =>
  {
    setOpenDrop(true)
  }
  const HandleInputInactive = () =>
  {
    setOpenDrop(true)
  }
  return (
    <div>
      <Row style={{ width: "100%" }}>
        <Button
          type="primary"
          shape="circle"
          size="large"
          style={{ textSizeAdjust: "150%", marginLeft: "2%", marginTop: "1%" }}
        >
          <FacebookFilled shape="circle" size={"100%"} />
        </Button>
        <Dropdown overlay={searchMenu} open={openDrop}>
          <Input
            placeholder={`Search Facebook`}
            size="120"
            style={{
              width: "10%",
              height: "100%",
              marginTop: "1.5%",
              marginLeft: "1%",
            }}
            variant="filled"
            onClick={HandleInputClick}
            onMouseOut={HandleInputInactive}
          />
        </Dropdown>
        
        <Menu
          items={menuItems}
          mode="horizontal"
          onSelect={HandleMenuSelection}
          style={{
            marginLeft: "20%",
            height: "100%",
            width: "25%",
            marginTop: "1%",
          }}
        />
        <Button
          shape="circle"
          size="large"
          style={{ background: "#D3D3D3", marginTop: "1%", marginLeft: "23%" }}
        >
          <MenuOutlined />
        </Button>
        <Button
          shape="circle"
          size="large"
          style={{ background: "#D3D3D3", marginTop: "1%", marginLeft: "1%" }}
        >
          <MessageOutlined />
        </Button>
        <Button
          shape="circle"
          size="large"
          style={{ background: "#D3D3D3", marginTop: "1%", marginLeft: "1%" }}
        >
          <NotificationOutlined />
        </Button>
        <Button
          shape="circle"
          size="large"
          style={{ background: "#D3D3D3", marginTop: "1%", marginLeft: "1%" }}
        >
          <UserOutlined />
        </Button>
      </Row>
    </div>
  );
};
export default Header;
