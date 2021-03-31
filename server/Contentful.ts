import { createClient } from 'contentful-management';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = createClient({
  accessToken: process.env.CONTENTFUL_PERSONAL_TOKEN as string,
});
