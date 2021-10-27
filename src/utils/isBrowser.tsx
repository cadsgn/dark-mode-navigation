//To avoid gatsby build problem wit SSR

const isBrowser = typeof window !== "undefined";

export default isBrowser;
