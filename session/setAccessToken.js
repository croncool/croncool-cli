/* Copyright 2013 - 2024 Waiterio LLC */
import localStorage from './localStorage.js'

export default function setAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken)
}
