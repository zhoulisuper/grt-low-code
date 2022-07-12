import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Button, Menu, Layout } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('home', 'home', <PieChartOutlined />),
  getItem('二级菜单', 'sub1', <MailOutlined />, [getItem('other', 'other')]),
  getItem('二级菜单', 'sub2', <AppstoreOutlined />, [
    getItem('三级菜单', 'sub3', null, [getItem('user', 'user')]),
  ]),
]

const Asider = () => {
  const [collapsed, setCollapsed] = useState(false)

  const linkTo = useNavigate()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const menuClick = ({ item, key, keyPath }) => {
    linkTo(`/${key}`)
  }

  return (
    <Sider collapsed={collapsed}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        onClick={menuClick}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  )
}

export default Asider
