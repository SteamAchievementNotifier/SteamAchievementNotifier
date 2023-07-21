import { invoke } from '@tauri-apps/api/tauri';
import type { Options } from './types';

export async function snapshotViewport(options: Options = {}) {
  const data = await invoke<number[]>('plugin:snapshot|snapshot', {
    options: {
      ...options,
      region: 'viewport',
    },
  });
  const typedArray = new Uint8Array(data);
  return typedArray;
}
export async function snapshotDocument(options?: Options) {
  const data = await invoke<number[]>('plugin:snapshot|snapshot', {
    options: {
      ...options,
      region: 'document',
    },
  });
  const typedArray = new Uint8Array(data);
  return typedArray;
}
