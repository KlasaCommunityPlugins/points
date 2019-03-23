// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaMessage, Monitor, MonitorStore } from 'klasa';
import { PUserSettings } from '../index';

export default class PointsInitialAmount extends Monitor {
  private readonly options = this.client.options.points;

	constructor(client: Client, store: MonitorStore, file: string[], directory: string) {
		super(client, store, file, directory, { ignoreOthers: false });
	}

	async run(message: KlasaMessage) {
    const settings: PUserSettings = message.member.user.settings as PUserSettings;
    const points = settings.pointsPlugin.count;
    if (!this.options.initialAmount) return;
    if (settings.pointsPlugin.receivedInitial === true) return;
    await settings.update([
      ['pointsPlugin.count', points + this.options.initialAmount],
      ['pointsPlugin.receivedInitial', true],
    ]);
	}
}
