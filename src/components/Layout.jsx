import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'

import GHeader from './Header'
import GAsider from './Asider'

import Home from '../page/Home'
import Other from '../page/About'

const { Header, Footer, Content } = Layout

function GLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <GHeader />
      </Header>
      <Layout>
        <GAsider />
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path={`/Home`} element={<Home />} />
            <Route path={`/Other`} element={<Other />} />
          </Routes>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default GLayout
