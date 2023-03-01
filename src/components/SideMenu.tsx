import { useState } from 'react';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  BarChartOutlined,
  PhoneOutlined,
  SyncOutlined,
  LineChartOutlined,
  ControlOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Statistics', '1', <BarChartOutlined />),
  getItem('Phone', '2', <PhoneOutlined />),
  getItem('Synchronize', '3', <SyncOutlined />),
  getItem('Chart', '4', <LineChartOutlined />),
  getItem('Parameters', '5', <ControlOutlined />),
  getItem('List', '6', <FileTextOutlined />),
  getItem('Sign out', '7', <LogoutOutlined style={{color: 'red'}} />),
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div style={{ height: '100vh' }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ margin: 2 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        style={{width: collapsed ? 50 : ''}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        // theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />

    </div>
  );
};

export default SideMenu;