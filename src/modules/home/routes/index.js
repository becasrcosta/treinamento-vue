import Home from "../views/Home";

export const HomeRoute = {
  path: "/home",
  name: "Home",
  components: {
    default: Home,
  },
};

export const IndexRoutes = {
  path: "/",
  name: "Index",
  components: {
    default: Home,
  },
};
