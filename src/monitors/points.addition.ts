// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaMessage, Monitor, MonitorStore } from 'klasa';

export default class PointsAddition extends Monitor {
  private readonly options = this.client.options.points;

	constructor(client: Client, store: MonitorStore, file: string[], directory: string) {
		super(client, store, file, directory, { ignoreOthers: false });
	}

	async run(message: KlasaMessage) {
    const user = message.member.user;
    if (user.pointsCooldown.limited) return null;
    try {
      user.pointsCooldown.drip();
      const points = message.member.user.settings.get('pointsPlugin.count') as number;
      await message.member.user.settings.update([['points.count', points + this.genPoints]]);
      return true;
    } catch { return null; }
  }

  get genPoints() {
    return Math.floor(Math.random() * (this.options.maxAdd - this.options.minAdd + 1) ) + this.options.minAdd;
  }
}
