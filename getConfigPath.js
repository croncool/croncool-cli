/* Copyright 2013 - 2024 Waiterio LLC */
import getFiles from './getFiles.js'

export default function getConfigPath() {
  let configPath
  let files = getFiles()
  files = files.filter(file => !file.includes('/build/'))
  files = files.filter(file => file.endsWith('croncool.json'))

  if (files.length > 0) {
    configPath = files[0] // eslint-disable-line prefer-destructuring

    if (configPath.startsWith('/')) {
      configPath = configPath.slice(1)
    }
  }

  return configPath
}
