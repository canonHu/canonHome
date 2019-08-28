import App from './pages/App'
import Fail from './pages/Fail'
import Root from './pages/Root'
import Detail from './pages/Detail'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: App
      },
      {
        path: '/detail',
        exact: true,
        component: Detail
      },
      {
        path: '*',
        exact: true,
        component: Fail
      }
      // {
      //   path: "/child/:id",
      //   component: Child,
      //   routes: [
      //     {
      //       path: "/child/:id/grand-child",
      //       component: GrandChild
      //     }
      //   ]
      // }
    ]
  }
];

export default routes