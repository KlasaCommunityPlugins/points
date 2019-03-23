// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client as KlasaClient } from 'klasa';
import { PointsClient as Client, UserSettings as PUserSettings } from './lib/Client';
import * as CONSTANTS from './lib/util/CONSTANTS';

export { Client, CONSTANTS, PUserSettings };
// @ts-ignore
exports[KlasaClient.plugin] = Client[KlasaClient.plugin];

/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
