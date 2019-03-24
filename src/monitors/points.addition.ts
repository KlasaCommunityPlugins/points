// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaMessage, Monitor, MonitorStore } from 'klasa';

export default class PointsAddition extends Monitor {
  readonly options = this.client.options.points;
	constructor(client: Client, store: MonitorStore, file: string[], directory: string) {
		super(client, store, file, directory, { ignoreOthers: false });
	}

	async run(message: KlasaMessage) {
    if (!this.options.enabled) return null;
    const user = message.author;
    if (user.points.limiter.limited) return null;
    try {
      user.points.limiter.drip();
      const points = user.settings.get('pointsPlugin.count') as number;
      await user.settings.update([['points.count', points + user.points.genPoints()]]);
      return true;
    } catch {
      return null;
    }
  }
}
