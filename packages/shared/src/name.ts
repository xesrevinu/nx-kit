export interface NameService {
  name: string;
}

export const NameTag = Service.Tag<NameService>();

export const layer = Layer.fromEffect(
  NameTag,
  Effect.succeed({ name: 'shared' })
);
