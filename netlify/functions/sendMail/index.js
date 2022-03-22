exports.handler = async function (event, context) {
  const contactInfo = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent" }),
  };
};
