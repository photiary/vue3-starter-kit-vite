/**
 * Axios에서 사용하는 인증정보
 */
const AXIOS_BASIC_CONFIG = {
  username: import.meta.env.VITE_APP_OAUTH_CLIENT_ID,
  password: import.meta.env.VITE_APP_OAUTH_CLIENT_SECRET
}

export default { AXIOS_BASIC_CONFIG }
