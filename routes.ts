/**
 * publically accessible routes (no auth required)
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 * routes used for auth (no auth required)
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/signin",
    "/auth/error"
];

/**
 * prefix for API authentication routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default route after auth
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/board";