export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { initMocks } = await import("./lib/msw");
    initMocks();
  }
}
