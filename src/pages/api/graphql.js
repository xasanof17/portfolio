export default async function graphql(req, res) {
  const response = await fetch(process.env.GRAPHCMS_API);
  await res.status(200).json(response);
}
