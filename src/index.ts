// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client as KlasaClient } from 'klasa';
import { PointsClient as Client } from './lib/Client';
import { PointsUser } from './lib/extensions/PointsUser';

export { Client, PointsUser };
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
