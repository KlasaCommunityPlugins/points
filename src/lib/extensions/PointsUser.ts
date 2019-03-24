// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Structures, User } from 'discord.js';
import Points from '../util/Points';

class PointsUser extends User {
	/**
	 * The handler for the users points
	 * @since 0.0.1
	 * @type {Points}
	 * @protected
	 */
	points: Points = new Points(this, this.client);
}

Structures.extend('User', () => PointsUser);

export { PointsUser };
