import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import IndexPage from './pages/IndexPage';
import ProfilePage from './pages/ProfilePage';
import ScreenplayPage from './pages/ScreenplayPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthGate from './components/auth/AuthGate';
import StorageNamespaceProvider from './components/auth/StorageNamespaceProvider';

const rootRoute = createRootRoute({
  component: () => (
    <StorageNamespaceProvider>
      <Outlet />
    </StorageNamespaceProvider>
  )
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => (
    <AuthGate requireAuth={false}>
      <LoginPage />
    </AuthGate>
  )
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: () => (
    <AuthGate requireAuth={false}>
      <RegisterPage />
    </AuthGate>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <AuthGate requireAuth={true}>
      <IndexPage />
    </AuthGate>
  )
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => (
    <AuthGate requireAuth={true}>
      <ProfilePage />
    </AuthGate>
  )
});

const screenplayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/screenplay/$projectId',
  component: () => (
    <AuthGate requireAuth={true}>
      <ScreenplayPage />
    </AuthGate>
  )
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  indexRoute,
  profileRoute,
  screenplayRoute
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
