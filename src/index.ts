import logger, { Logger } from './logger'
import Client from './client'
import RulesEngine from './rules-engine'
import {
  StorageEngineConnectionConfig,
  StorageEngineConfig,
  StorageEngine,
  GraphQLInputData,
} from './storage'
import {
  Opts,
  Service,
  ServiceConnection,
  ProviderData,
  Entity,
  SchemaMap,
} from './types'
import {
  Rule,
  RuleFinding,
  Result,
  JsRule,
  JsonRule,
  Engine,
} from './rules-engine/types'
import { plugins, pluginMap } from './plugin/types'
import {
  mergeSchemas,
  getSchemaFromFolder,
  generateSchemaMapDynamically,
} from './utils/schema'

export type {
  Opts,
  Service,
  ServiceConnection,
  Logger,
  Client,
  ProviderData,
  Engine,
  Rule,
  RuleFinding,
  JsRule,
  JsonRule,
  Entity,
  StorageEngineConnectionConfig,
  StorageEngineConfig,
  StorageEngine,
  GraphQLInputData,
  SchemaMap,
}
export default {
  logger,
  Client,
  RulesEngine,
  Result,
  plugins,
  pluginMap,
  mergeSchemas,
  getSchemaFromFolder,
  generateSchemaMapDynamically,
}
