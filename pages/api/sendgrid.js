import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const msg = {
    to: `${req.body.email}`,
    from: "churrovan@vantablacc.in",
    subject: "Thanks for signing up!",
    template_id: "d-99e92129c9c54743be70628d8b98de90",
  };

  try {
    await sendgrid.send(msg);
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
