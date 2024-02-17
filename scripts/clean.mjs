#! /usr/bin/env node

import fs from 'fs/promises';

import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

try {
  await fs.rm(distDir, { recursive: true });
  await fs.mkdir(distDir);
} catch (e) {
  if (e.code === 'ENOENT') {
    await fs.mkdir(distDir);
  }
}
