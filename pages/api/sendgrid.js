import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const msg = {
    to: `${req.body.email}`,
    from: "churrovan@vantablacc.in",
    subject: "Thanks for signing up!",
    template_id: "d-5a297904b59e4aec900a7ba60a984192",
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
