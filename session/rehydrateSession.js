/* Copyright 2013 - 2024 Waiterio LLC */
import {
  setAccessTokenForCroncoolClient,
  setAccessTokenCallbackForCroncoolClient,
} from '@croncool/croncool-js-client/accessToken.js'
import { setRefreshTokenForCroncoolClient } from '@croncool/croncool-js-client/refreshToken.js'
import getAccessToken from './getAccessToken.js'
import getRefreshToken from './getRefreshToken.js'
import setAccessToken from './setAccessToken.js'

export default async function rehydrateSession() {
  const accessToken = getAccessToken()
  const refreshToken = getRefreshToken()

  setAccessTokenForCroncoolClient(accessToken)
  setRefreshTokenForCroncoolClient(refreshToken)
  setAccessTokenCallbackForCroncoolClient(setAccessToken)
}
