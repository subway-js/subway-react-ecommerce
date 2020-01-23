const RPC_FAKE_DELAY = 1000;
export const authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: "ok", jwt: "fake.jwt.token" });
    }, RPC_FAKE_DELAY);
  });
};
