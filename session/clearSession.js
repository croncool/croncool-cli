/* Copyright 2013 - 2024 Waiterio LLC */

import {
  setAccessTokenForCroncoolClient,
  setAccessTokenCallbackForCroncoolClient,
} from '@croncool/croncool-js-client/accessToken.js'
import { setRefreshTokenForCroncoolClient } from '@croncool/croncool-js-client/refreshToken.js'
import localStorage from './localStorage.js'

export default function clearSession() {
  localStorage.clear()

  setAccessTokenCallbackForCroncoolClient(null)

  setAccessTokenForCroncoolClient(null)
  setRefreshTokenForCroncoolClient(null)
}
