import { Layout } from 'antd'
import GHeader from './Header'
import GAsider from './Asider'
import { routerItems } from '../router'
import React, { Suspense } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

// loading页面
const Loading = () => (
  <>
    <div className="loadsvg">
      <div>loading...</div>
    </div>
  </>
)

const { Header, Footer, Content } = Layout

const rotuerViews = (routerItems) => {
  if (routerItems && routerItems.length) {
    return routerItems.map(({ path, Component, children, redirect }) => {
      return children && children.length ? (
        <Route
          path={path}
          key={path}
          element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          }
        >
          {rotuerViews(children)} // 递归遍历子路由
          {redirect ? (
            <Route path={path} element={<Navigate to={redirect} />}></Route>
          ) : (
            <Route
              path={path}
              element={<Navigate to={children[0].path} />}
            ></Route>
          )}
        </Route>
      ) : (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          }
        ></Route>
      )
    })
  }
}

function GLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <GHeader />
      </Header>
      <Layout>
        <GAsider />
        <Content>
          <Routes>{rotuerViews(routerItems)}</Routes>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default GLayout
