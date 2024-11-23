export async function initMocks() {
  if (typeof window !== "undefined") {
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
    console.log("Mock worker started");
  }
}
