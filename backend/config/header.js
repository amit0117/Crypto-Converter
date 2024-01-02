import dotenv from 'dotenv'
dotenv.config()
export const headerconfig = {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
      Accept: 'application/json',
      'Accept-Encoding': 'deflate, gzip',
    }
  };
  