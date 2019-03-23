// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Structures, User } from 'discord.js';
import { RateLimit } from 'klasa';

class PointsUser extends User {
	/**
	 * The ratelimit management for the point cooldown system
	 * @since 0.0.1
	 * @type {RateLimit}
	 * @protected
	 */
	pointsCooldown = new RateLimit(
		this.client.options.points.pointAcquisitionBucket,
		this.client.options.points.cooldown,
	);
}

Structures.extend('User', () => PointsUser);

export { PointsUser };
