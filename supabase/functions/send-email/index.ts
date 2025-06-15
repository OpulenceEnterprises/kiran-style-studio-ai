
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { SmtpClient } from 'smtp'
import { corsHeaders } from '../_shared/cors.ts'

const GMAIL_SENDER = Deno.env.get('GMAIL_SENDER')!
const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD')!
const RECIPIENT_EMAIL = 'suidhaga.empower@gmail.com'

const client = new SmtpClient()

serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { subject, htmlBody, fromName, fromEmail } = await req.json()

    if (!subject || !htmlBody || !fromName || !fromEmail) {
      throw new Error("Subject, htmlBody, fromName, and fromEmail are required.")
    }

    await client.connectTLS({
      hostname: 'smtp.gmail.com',
      port: 465,
      username: GMAIL_SENDER,
      password: GMAIL_APP_PASSWORD,
    })

    await client.send({
      from: `"${fromName}" <${GMAIL_SENDER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: fromEmail,
      subject,
      content: `You have a new message from ${fromName} (${fromEmail}):\n\n${htmlBody.replace(/<br>/g, "\n")}`,
      html: htmlBody,
    })

    await client.close()

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
