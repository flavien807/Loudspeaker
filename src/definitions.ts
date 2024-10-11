export interface LoudspeakerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  setAudioMode(options: { mode: 'speaker' | 'earpiece' }): Promise<{ success: boolean }>;
}
