/**
 * An Array of Route that are accessable to the public,
 * These routes does not  require any authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An Array of Route that are used for authentication,
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Route that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after login in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
