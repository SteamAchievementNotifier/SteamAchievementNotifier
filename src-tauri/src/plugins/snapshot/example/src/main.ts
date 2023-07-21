import './style.css';
import placeholder from './placeholder.png';
import { snapshotDocument, snapshotViewport } from 'tauri-plugin-snapshot-api';
import { save } from '@tauri-apps/api/dialog';
import { configDir } from '@tauri-apps/api/path';

const image = document.getElementById('image-preview')! as HTMLImageElement;
image.src = placeholder;

// Get buttons
const documentBtn = document.getElementById(
  'document-btn'
)! as HTMLImageElement;
const viewportBtn = document.getElementById(
  'viewport-btn'
)! as HTMLImageElement;
const documentToPath = document.getElementById(
  'document-to-path-btn'
)! as HTMLImageElement;
const clearBtn = document.getElementById('clear-btn')! as HTMLImageElement;

// Viewport button
viewportBtn.addEventListener('click', async () => {
  const img_buffer = await snapshotViewport();

  image.src = toObjUrl(img_buffer);
});

// Document button
documentBtn.addEventListener('click', async () => {
  const img_buffer = await snapshotDocument();

  image.src = toObjUrl(img_buffer);
});

// Document button
documentToPath.addEventListener('click', async () => {
  const img_buffer = await snapshotDocument({
    save: {
      path: await askUserForPath(),
      overwrite: true,
    },
  });

  image.src = toObjUrl(img_buffer);
});

// Clear button
clearBtn.addEventListener('click', () => (image.src = placeholder));

const askUserForPath = async (): Promise<string> => {
  const path = await save({
    defaultPath: await configDir(),
    title: 'Snapshot save path',
  });
  if (!path) throw new Error('User failed to select an output path');
  return path;
};

const toObjUrl = (buffer: Uint8Array) => {
  const imgBlob = new Blob([buffer], { type: 'image/png' });
  const imageUrl = window.webkitURL.createObjectURL(imgBlob);
  return imageUrl;
};

export {};
