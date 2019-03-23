// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaClientOptions, util } from 'klasa';
import { join } from 'path';

import { OPTIONS } from './util/CONSTANTS';

const registerCoreDirectory = join(__dirname, '..', '/');

import './schemas/UserSchema';

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
   * @property {number} [defuaultPrice=0]
   * @property {number} [cooldown=60000]
   * @property {number} [minAdd=30]
   * @property {number} [maxAdd=100]
   * @property {number} [initialAmount=null]
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

    // @ts-ignore
    typedThis.commands.registerCoreDirectory(registerCoreDirectory);
    // @ts-ignore
    typedThis.finalizers.registerCoreDirectory(registerCoreDirectory);
    // @ts-ignore
    typedThis.events.registerCoreDirectory(registerCoreDirectory);
    // @ts-ignore
    typedThis.monitors.registerCoreDirectory(registerCoreDirectory);
    // @ts-ignore
    typedThis.inhibitors.registerCoreDirectory(registerCoreDirectory);
	}

}

declare module 'discord.js' {
	interface ClientOptions {
		points: {
      commandOpt: string;
      cooldown: number;
      defaultPrice: number;
      enabled: boolean;
      initialAmount: number | null;
      maxAdd: number;
      minAdd: number;
    };
  }
}
