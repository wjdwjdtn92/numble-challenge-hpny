const ROUTER_CHAGE_EVENT = 'ROUTE_CHANGE';

export const router = (onRouteChage) => {
  window.addEventListener(ROUTER_CHAGE_EVENT, () => {
    onRouteChage();
  });
};

export const routeChage = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTER_CHAGE_EVENT, params));
};
