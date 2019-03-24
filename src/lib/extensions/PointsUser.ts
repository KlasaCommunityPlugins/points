// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Structures, User } from 'discord.js';
import { Client as KClient } from 'klasa';
import Points from '../util/Points';

class PointsUser extends User {
	/**
	 * The handler for the users points
	 * @since 0.0.1
	 * @type {Points}
	 * @protected
	 */
	points: Points = new Points(this, (this.client as KClient));
}

Structures.extend('User', () => PointsUser);

export { PointsUser };
