import { getXataClient } from '../../src/xata';

const handler = async (req, res) => {
  const xata = await getXataClient();

  const { first_name, last_name, email, company, message, hear_about_us } =
    req.body;

  await xata.db.customers.create({
    first_name,
    last_name,
    email,
    company,
    message,
    hear_about_us,
  });

  res.end();
};

export default handler;
