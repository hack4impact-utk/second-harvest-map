import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: process.env.CONTENTFUL_PERSONAL_TOKEN as string,
});
