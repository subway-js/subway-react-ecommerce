import { data } from "./data";

const RPC_FAKE_DELAY = 1500;
export const getProductsList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, RPC_FAKE_DELAY);
  });
};
