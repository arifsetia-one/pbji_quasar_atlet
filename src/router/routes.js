import auth from "src/middlewares/auth.middleware";
import guest from "src/middlewares/guest.middleware";

const routes = [
  {
    path: "/auth",
    meta: {
      middleware: guest,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("pages/LoginView.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: {
      middleware: auth,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "presence",
        component: () => import("pages/PresenceView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
