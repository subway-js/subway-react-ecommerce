export const AGGREGATE_NAME = "SessionAggregate";
export const initialState = {
  userLogged: false,
  username: null,
  gwtToken: null
};

export const aggregateConfig = {
  name: AGGREGATE_NAME,
  initialState
};

export { LoginModal } from "./ui/containers/loginModal";
