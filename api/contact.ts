import type { VercelRequest, VercelResponse } from '@vercel/node';
import inquiryHandler from './inquiry.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return inquiryHandler(req, res);
}
