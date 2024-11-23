import { showToast } from "../components/hooks/showToast";

export const errorLoggingMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.error) {
    // Example of using store
    const state = store.getState();
    const isDevMode = state.config?.isDevelopment;

    // Only log to console in dev mode
    if (isDevMode) {
      console.log("Error:", {
        statusCode: action?.payload?.status,
        errorMessage: action?.payload?.data?.error || action?.payload?.data?.message,
      });
    }

    showToast.error(
      action?.payload?.data?.error || action?.payload?.data?.message || action?.payload?.status
    );
  }
  return result;
};
