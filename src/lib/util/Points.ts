// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { User } from 'discord.js';
import { Client, RateLimit } from 'klasa';

export default class Points {
  user: User;
  client: Client;
  readonly options = this.client.options.points;

  /**
   * The ratelimit management for the point cooldown system
   * @since 0.0.1
   * @type {RateLimit}
   */
  limiter: RateLimit;

  constructor(user: User, client?: Client) {
    this.user = user;
    this.client = client ? client : user.client as Client;
    this.limiter = new RateLimit(
      this.options.pointAcquisitionBucket,
      this.options.cooldown,
    );

    this.limiter.reset();
  }

  genPoints() {
    return Math.floor(Math.random() * (this.options.maxAdd - this.options.minAdd + 1) ) + this.options.minAdd;
  }

}
