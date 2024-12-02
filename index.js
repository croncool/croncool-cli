#!/usr/bin/env node
/* Copyright 2013 - 2024 Waiterio LLC */
import program from 'commander'
import loginCommand from './loginCommand.js'
import logoutCommand from './logoutCommand.js'
import packageJson from './package.json' with { type: 'json' }

program
  .description('manage cron jobs and health checks')
  .version(packageJson.version)
  .addCommand(loginCommand())
  .addCommand(logoutCommand())
  .parse(process.argv)
