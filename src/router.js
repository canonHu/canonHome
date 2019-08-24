import App from './pages/App'
import Fail from './pages/Fail'
import Root from './pages/Root'

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
        path: '*',
        exact: true,
        component: Fail
      },
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