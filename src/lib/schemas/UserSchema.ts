import { Client } from 'klasa';

export const UserSchema = Client.defaultUserSchema
  .add('points-plugin', (points) => points
    .add('count', 'integer', { default: 0, configurable: false })
    .add('cooldown', (cooldown) => cooldown
      .add('on', 'boolean', { default: false, configurable: false })
      .add('expire', 'integer', { default: 0, configurable: false})
    )
  );
