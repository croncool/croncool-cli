/* Copyright 2013 - 2024 Waiterio LLC */
import {
  setAccessTokenForCroncoolClient,
  setAccessTokenCallbackForCroncoolClient,
} from '@croncool/croncool-js-client/accessToken.js'
import { setRefreshTokenForCroncoolClient } from '@croncool/croncool-js-client/refreshToken.js'
import setAccessToken from './setAccessToken.js'
import setRefreshToken from './setRefreshToken.js'

export default async function storeNewSession({ accessToken, refreshToken }) {
  try {
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)

    setAccessTokenForCroncoolClient(accessToken, setAccessToken)
    setRefreshTokenForCroncoolClient(refreshToken, setRefreshToken)
    setAccessTokenCallbackForCroncoolClient(setAccessToken)

    return true
  } catch (error) {
    console.error('error', error)
    throw error
  }
}
