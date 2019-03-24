// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { User } from 'discord.js';
import { Client, RateLimit } from 'klasa';

/**
 * Helper class attached to every user
 * @since 0.0.1
 * @private
 */
export default class Points {
  /**
   * The user on which this is attached
   */
  user: User;
  /**
   * The plugins client
   */
  client: Client;
  /**
   * The provided options to the plugin
   */
  readonly options = this.client.options.points;

  /**
   * The ratelimit management for the point cooldown system
   * @since 0.0.1
   * @type {RateLimit}
   */
  limiter: RateLimit;

  /**
   * @since 0.0.1
   * @param {external:User} user The user on which this attached on
   * @param {external:KlasaClient} [client] The plugins client
   */
  constructor(user: User, client?: Client) {
    this.user = user;
    this.client = client ? client : user.client as Client;
    this.limiter = new RateLimit(
      this.options.pointAcquisitionBucket,
      this.options.cooldown,
    );

    this.limiter.reset();
  }

  /**
   * Generates a random amount of points
   * @returns {number} The resulting points the user will be given
   */
  genPoints(): number {
    return Math.floor(Math.random() * (this.options.maxAdd - this.options.minAdd + 1) ) + this.options.minAdd;
  }

}
