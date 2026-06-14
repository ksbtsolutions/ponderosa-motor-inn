export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, checkin, checkout, guests, roomType, message, how } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-CA', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not specified'
  const nights = (checkin && checkout) ? Math.max(0, Math.round((new Date(checkout) - new Date(checkin)) / 86400000)) : null

  const innHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f6; border-radius: 12px;">
      <div style="background: #1A2B1A; padding: 20px 24px; border-radius: 8px 8px 0 0; margin-bottom: 0;">
        <h1 style="color: #C4872A; font-size: 20px; margin: 0;">New Guest Enquiry</h1>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Ponderosa Motor Inn</p>
      </div>
      <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e8e4dc;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #1A2B1A;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C4872A;">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #C4872A;">${phone}</a></td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #666;">Check-in</td><td style="padding: 8px 0;">${formatDate(checkin)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Check-out</td><td style="padding: 8px 0;">${formatDate(checkout)}${nights ? ` <span style="color: #666;">(${nights} night${nights !== 1 ? 's' : ''})</span>` : ''}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Guests</td><td style="padding: 8px 0;">${guests || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Room Type</td><td style="padding: 8px 0;">${roomType || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Referral</td><td style="padding: 8px 0;">${how || 'Not specified'}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f5f0e8; border-radius: 6px; border-left: 3px solid #C4872A;">
          <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.6;"><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <div style="margin-top: 16px; text-align: center;">
          <a href="mailto:${email}?subject=Re: Your enquiry at Ponderosa Motor Inn" style="display: inline-block; background: #C4872A; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name.split(' ')[0]}</a>
        </div>
      </div>
    </div>
  `

  const guestHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f6; border-radius: 12px;">
      <div style="background: #1A2B1A; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <div style="font-size: 32px; margin-bottom: 8px;">P</div>
        <h1 style="color: white; font-size: 20px; margin: 0;">Ponderosa Motor Inn</h1>
        <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Golden, British Columbia</p>
      </div>
      <div style="background: white; padding: 28px 24px; border: 1px solid #e8e4dc; border-top: none;">
        <h2 style="color: #1A2B1A; margin: 0 0 12px;">Thanks for reaching out, ${name.split(' ')[0]}!</h2>
        <p style="color: #555; line-height: 1.7; margin: 0 0 16px;">We've received your enquiry and will get back to you within a few hours during our front desk hours (7 AM – 10 PM daily).</p>
        ${checkin && checkout ? `
        <div style="background: #f5f0e8; border-radius: 8px; padding: 16px; margin: 16px 0; border-left: 4px solid #C4872A;">
          <strong style="color: #1A2B1A; display: block; margin-bottom: 8px;">Your requested dates</strong>
          <div style="color: #555; font-size: 14px;">Check-in: ${formatDate(checkin)}</div>
          <div style="color: #555; font-size: 14px;">Check-out: ${formatDate(checkout)}${nights ? ` · ${nights} night${nights !== 1 ? 's' : ''}` : ''}</div>
        </div>` : ''}
        <p style="color: #555; line-height: 1.7; margin: 16px 0 0;">If you need immediate assistance, call us anytime:<br><a href="tel:+12503440047" style="color: #C4872A; font-weight: 600;">+1 (250) 344-0047</a></p>
      </div>
      <div style="background: #1A2B1A; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
        <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 12px;">1025 11th Ave S, Golden, BC V0A 1H0 · <a href="https://ponderosa-inn.com" style="color: var(--amber);">ponderosa-inn.com</a></p>
      </div>
    </div>
  `

  try {
    const RESEND_KEY = process.env.RESEND_API_KEY
    if (!RESEND_KEY) throw new Error('Missing RESEND_API_KEY')

    await Promise.all([
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'Ponderosa Motor Inn <enquiries@ponderosa-inn.com>',
          to: ['info@ponderosa-inn.com'],
          reply_to: email,
          subject: `New enquiry from ${name}${checkin ? ` · ${checkin}` : ''}`,
          html: innHtml,
        })
      }),
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'Ponderosa Motor Inn <no-reply@ponderosa-inn.com>',
          to: [email],
          subject: 'We\'ve received your enquiry – Ponderosa Motor Inn',
          html: guestHtml,
        })
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Email send failed:', err.message)
    return res.status(500).json({ error: 'Failed to send enquiry. Please call us at +1 (250) 344-0047.' })
  }
}
