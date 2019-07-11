// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Structures } from 'discord.js';
import { Client as KClient } from 'klasa';
import Points from '../util/Points';

const PointsUser = Structures.extend('User', User => class PointsUser extends User {
	/**
	 * The handler for the users points
	 * @since 0.0.1
	 */
	public points: Points = new Points(this, (this.client as KClient));
});

export { PointsUser };
