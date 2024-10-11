export interface LoudspeakerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
