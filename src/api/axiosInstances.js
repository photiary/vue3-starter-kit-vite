import Axios from 'axios'
import authConstants from '@/api/authConstants'
import errorHandlers from '@/api/errorHandlers'

/**
 * 디폴트 Headers를 갖는 Axios instance를 생성한다.
 *
 * GET Accept: application/json
 *
 * POST Content-Type: application/json
 *
 * @see {@link https://axios-http.com/kr/docs/instance}
 * @returns {AxiosInstance} Axios instance
 */
function createSimpleInstance(url) {
  const axios = Axios.create({
    baseURL: url
  })
  axios.defaults.headers.get['Accept'] = 'application/json'
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  return axios
}

/**
 * 인증 Header 추가, Error handler 등 API의 공용 처리를 담당한다.
 *
 * @see {@link https://axios-http.com/kr/docs/interceptors}
 * @param {AxiosInstance} axios Axios instance
 * @param {boolean} isBasicAuth true: Basic Auth | false: Bearer Token
 * @returns {AxiosInstance} Axios instance
 */
function addAuthInterceptor(axios, isBasicAuth) {
  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('axiosInstances.addAuthInterceptor isBasicAuth:', isBasicAuth)
      if (isBasicAuth) {
        config.auth = authConstants.AXIOS_BASIC_CONFIG
      } else {
        config.headers.Authorization = `Bearer token`
      }
      return config
    },
    function (error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )

  // 응답 인터셉터 추가하기
  axios.interceptors.response.use(
    function (response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      if (isBasicAuth) {
        errorHandlers.basicAuthUnauthorizedErrorHandler(error)
      } else {
        errorHandlers.bearerTokenUnauthorizedErrorHandler(error)
      }
      return Promise.reject(error)
    }
  )
  return axios
}

function createBasicAuthInstance() {
  const axios = createSimpleInstance(import.meta.env.VUE_APP_URL_SERVICE)
  return addAuthInterceptor(axios, true)
}

function createBearerTokenInstance() {
  const axios = createSimpleInstance(import.meta.env.VUE_APP_URL_SERVICE)
  return addAuthInterceptor(axios, false)
}

const basicAuthClient = createBasicAuthInstance()
const bearerTokenClient = createBearerTokenInstance()

export default {
  createSimpleInstance,
  addAuthInterceptor,
  basicAuthClient,
  bearerTokenClient
}
