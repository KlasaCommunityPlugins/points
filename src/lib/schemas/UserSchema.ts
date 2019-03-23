// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client } from 'klasa';

export const UserSchema = Client.defaultUserSchema
  .add('pointsPlugin', (points) => points
    .add('count', 'integer', { default: 0, configurable: false })
    .add('receivedInitial', 'boolean', { default: false, configurable: false })
    .add('cooldown', (cooldown) => cooldown
      .add('on', 'boolean', { default: false, configurable: false })
      .add('expire', 'integer', { default: 0, configurable: false})
    )
  );
