// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, Structures, User } from 'discord.js';
import { RateLimitManager } from 'klasa';

class PUser extends User {
	/**
	 * The ratelimit management for the point cooldown system
	 * @since 0.0.1
	 * @type {RateLimitManager}
	 * @protected
	 */
	pointsCooldown: RateLimitManager = new RateLimitManager(
		this.client.options.points.pointAcquisitionBucket,
		this.client.options.points.cooldown,
	);

	constructor(client: Client, data: object) {
		super(client, data);

		if (this.client.ready) {
			this.settings.sync()
				.then(() => {
					this.pointsCooldown.bucket = this.client.options.points.pointAcquisitionBucket;
					this.pointsCooldown.cooldown = this.client.options.points.cooldown;
				})
				.catch(() => null);
		}
	}
}

Structures.extend('User', () => PUser);

export { PUser };
