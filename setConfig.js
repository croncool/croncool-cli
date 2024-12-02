/* Copyright 2013 - 2024 Waiterio LLC */
import fs from 'fs-extra'
import path from 'path'

export default function setConfig(config) {
  let configPath = path.resolve('.', 'croncool.json')

  let string = ''

  if (config) {
    string = JSON.stringify(config)
  }

  config = fs.writeFileSync(configPath, string)

  return config
}
