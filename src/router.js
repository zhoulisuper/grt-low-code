import { lazy } from 'react'
export const routerItems = [
  {
    path: '/',
    Component: lazy(() => import('./page/Home')),
  },
  {
    path: '/home',
    Component: lazy(() => import('./page/Home')),
  },
  {
    path: '/other',
    Component: lazy(() => import('./page/About')),
    children: [
      {
        path: 'a',
        Component: lazy(() => import('./page/SubMenu/a')),
      },
      {
        path: 'b',
        Component: lazy(() => import('./page/SubMenu/b')),
        children: [],
      },
    ],
  },

  {
    path: '/user',
    Component: lazy(() => import('./page/User')),
    children: [],
  },
]
