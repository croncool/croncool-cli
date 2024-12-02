/* Copyright 2013 - 2024 Waiterio LLC */
import os from 'os'
import path from 'path'
import { LocalStorage } from 'node-localstorage'

let localStorage

if (!localStorage) {
  const homeDir = os.homedir()
  localStorage = new LocalStorage(path.resolve(homeDir, '.croncool'))
}

export default localStorage
