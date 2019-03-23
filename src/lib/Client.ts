// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaClientOptions, util } from 'klasa';
import { join } from 'path';

import { OPTIONS } from './util/CONSTANTS';

const CORE_DIRECTORY = join(__dirname, '..', '/');

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class PointsClient extends Client {

  /**
   * @typedef {external:KlasaClientOptions} FunctionsClientOptions
   * @property {PointsOptions} [points={}]
   */

  /**
   * @typedef {Object} PointsOptions
   * @property {boolean} [enabled=false]
   * @property {string} [commandOpt="price"]
   * @property {number} [defualtPrice=0]
   * @property {number} [cooldown=60000]
   * @property {number} [minAdd=30]
   * @property {number} [maxAdd=100]
   */

  /**
   * Constructs the points client.
   * @since 0.0.1
   * @param {PointsClientOptions} options The config to pass to the new client
   */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
  }

  static [Client.plugin]() {
		const typedThis = this as unknown as PointsClient;
		util.mergeDefault(OPTIONS, typedThis.options);
	}

}

declare module 'klasa' {
	interface KlasaClientOptions {
		points: {
      commandOpt: string;
      cooldown: number;
      defualtPrice: number;
      enabled: boolean;
      maxAdd: number;
      minAdd: number;
    };
	}
}
