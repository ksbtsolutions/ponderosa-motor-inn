/**
 * POST /api/enquiry
 *
 * Accepts a reservation enquiry form submission and:
 *  1. Sends a notification email to the inn (via Resend)
 *  2. Sends a confirmation email to the guest (via Resend)
 *
 * Required env vars (set in Vercel dashboard → Settings → Environment Variables):
 *   RESEND_API_KEY   — from resend.com (free tier: 3,000 emails/month)
 *   INN_EMAIL        — where to send notifications, e.g. reservations@ponderosamotorinn.bc.ca
 *   FROM_EMAIL       — verified sender domain, e.g. noreply@ponderosamotorinn.bc.ca
 */

export const config = { runtime: 'edge' };

const RESEND_URL = 'https://api.resend.com/emails';

async function sendEmail({ to, from, subject, html }) {
  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error ${res.status}: ${err}`);
  }
  return res.json();
}

function innEmailHtml(data) {
  const {
    name, email, phone, checkin, checkout,
    guests, roomType, message, channelPref,
  } = data;

  const nights =
    checkin && checkout
      ? Math.round(
          (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24)
        )
      : null;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><style>
  body { font-family: Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto; }
  .header { background: #1A2B1A; padding: 24px 32px; }
  .header h1 { color: #E5A83E; font-size: 20px; margin: 0; }
  .header p { color: #9aaa8a; font-size: 13px; margin: 4px 0 0; }
  .body { padding: 28px 32px; }
  .field { margin-bottom: 16px; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 4px; }
  .value { font-size: 15px; color: #111; font-weight: 500; }
  .row { display: flex; gap: 32px; }
  .highlight { background: #FFF8EC; border-left: 3px solid #C4872A; padding: 12px 16px; margin: 20px 0; border-radius: 2px; }
  .footer { background: #f5f5f5; padding: 16px 32px; font-size: 12px; color: #888; }
</style></head>
<body>
<div class="header">
  <h1>New Reservation Enquiry</h1>
  <p>Ponderosa Motor Inn · ${new Date().toLocaleDateString('en-CA', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</p>
</div>
<div class="body">
  <div class="highlight">
    <strong>${name}</strong> is enquiring about ${nights ? `${nights} night${nights !== 1 ? 's' : ''}` : 'a stay'} 
    ${checkin ? `(${new Date(checkin).toLocaleDateString('en-CA', { month:'short', day:'numeric' })} → ${new Date(checkout).toLocaleDateString('en-CA', { month:'short', day:'numeric', year:'numeric' })})` : ''} 
    ${roomType ? `— ${roomType}` : ''} for ${guests} guest${guests !== '1' ? 's' : ''}.
  </div>

  <div class="row">
    <div class="field"><div class="label">Guest Name</div><div class="value">${name}</div></div>
    <div class="field"><div class="label">Guests</div><div class="value">${guests}</div></div>
  </div>
  <div class="row">
    <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
    <div class="field"><div class="label">Phone</div><div class="value">${phone ? `<a href="tel:${phone.replace(/\D/g,'')}">${phone}</a>` : '—'}</div></div>
  </div>
  <div class="row">
    <div class="field"><div class="label">Check-in</div><div class="value">${checkin || '—'}</div></div>
    <div class="field"><div class="label">Check-out</div><div class="value">${checkout || '—'}</div></div>
  </div>
  <div class="row">
    <div class="field"><div class="label">Room Type</div><div class="value">${roomType || 'Any / Not specified'}</div></div>
    <div class="field"><div class="label">Preferred Contact</div><div class="value">${channelPref || 'Either'}</div></div>
  </div>
  ${message ? `
  <div class="field">
    <div class="label">Message / Special Requests</div>
    <div class="value" style="white-space:pre-wrap;background:#f9f9f9;padding:12px;border-radius:3px;font-size:14px;">${message}</div>
  </div>` : ''}
</div>
<div class="footer">
  Reply directly to this email to respond to ${name} at ${email}.<br/>
  Ponderosa Motor Inn · 1206 Trans-Canada Hwy, Golden, BC · 1-800-881-4233
</div>
</body>
</html>`;
}

function guestEmailHtml(data) {
  const { name, checkin, checkout, guests, roomType } = data;
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><style>
  body { font-family: Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto; }
  .header { background: #1A2B1A; padding: 28px 32px; text-align: center; }
  .header h1 { color: #E5A83E; font-family: Georgia, serif; font-size: 22px; margin: 0 0 6px; }
  .header p { color: #9aaa8a; font-size: 13px; margin: 0; }
  .body { padding: 28px 32px; }
  .summary { background: #F5F0E8; border-radius: 4px; padding: 20px 24px; margin: 0 0 24px; }
  .summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
  .summary-label { color: #6B6456; }
  .summary-value { font-weight: 600; color: #1A2B1A; }
  .cta { display: inline-block; background: #C4872A; color: #fff; padding: 12px 28px; border-radius: 3px; text-decoration: none; font-weight: bold; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; margin: 8px 0; }
  .footer { background: #f5f5f5; padding: 16px 32px; font-size: 12px; color: #888; text-align: center; }
  .footer a { color: #C4872A; }
</style></head>
<body>
<div class="header">
  <h1>Ponderosa Motor Inn</h1>
  <p>Golden, British Columbia · Gateway to Six National Parks</p>
</div>
<div class="body">
  <p>Hi ${name.split(' ')[0]},</p>
  <p>Thanks for reaching out! We've received your reservation enquiry and will be in touch within one business day to confirm availability and rates.</p>
  <p>For immediate confirmation, call us anytime — our front desk is staffed 24 hours:</p>
  <p style="font-size:20px;font-weight:bold;color:#C4872A;margin:16px 0;">
    <a href="tel:18008814233" style="color:#C4872A;text-decoration:none;">1-800-881-4233</a>
  </p>

  <div class="summary">
    <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#C4872A;font-weight:600;margin-bottom:14px;">Your Enquiry Summary</div>
    ${checkin ? `<div class="summary-row"><span class="summary-label">Check-in</span><span class="summary-value">${checkin}</span></div>` : ''}
    ${checkout ? `<div class="summary-row"><span class="summary-label">Check-out</span><span class="summary-value">${checkout}</span></div>` : ''}
    <div class="summary-row"><span class="summary-label">Guests</span><span class="summary-value">${guests}</span></div>
    <div class="summary-row"><span class="summary-label">Room Type</span><span class="summary-value">${roomType || 'Any / Flexible'}</span></div>
  </div>

  <p>You can also book directly on your preferred platform:</p>
  <p>
    <a href="https://www.booking.com/hotel/ca/golden-1206-transcanada-highway.html" style="color:#003580;font-weight:bold;">Booking.com</a> &nbsp;·&nbsp;
    <a href="https://www.expedia.ca/Golden-Hotels-Ponderosa-Motor-Inn.h31718.Hotel-Information" style="color:#C4872A;font-weight:bold;">Expedia</a> &nbsp;·&nbsp;
    <a href="https://www.ca.kayak.com/Golden-Hotels-Ponderosa-Motor-Inn.642241.ksp" style="color:#FF690F;font-weight:bold;">KAYAK</a>
  </p>
</div>
<div class="footer">
  Ponderosa Motor Inn · 1206 Trans-Canada Hwy, Golden, BC V0A 1H1<br/>
  <a href="tel:18008814233">1-800-881-4233</a> · <a href="https://www.ponderosamotorinn.bc.ca">ponderosamotorinn.bc.ca</a>
</div>
</body>
</html>`;
}

export default async function handler(req) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email } = data;
  if (!name || !email) {
    return new Response(JSON.stringify({ error: 'name and email are required' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check env vars
  const apiKey = process.env.RESEND_API_KEY;
  const innEmail = process.env.INN_EMAIL || 'reservations@ponderosamotorinn.bc.ca';
  const fromEmail = process.env.FROM_EMAIL || 'noreply@ponderosamotorinn.bc.ca';

  if (!apiKey) {
    // Dev mode — just return success without sending
    console.warn('RESEND_API_KEY not set — skipping email send in dev');
    return new Response(
      JSON.stringify({ ok: true, dev: true, message: 'Dev mode: email not sent (no API key)' }),
      { status: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    );
  }

  try {
    // Send both emails in parallel
    await Promise.all([
      sendEmail({
        from: `Ponderosa Motor Inn <${fromEmail}>`,
        to: innEmail,
        subject: `New reservation enquiry — ${name}${data.checkin ? ` · ${data.checkin}` : ''}`,
        html: innEmailHtml(data),
      }),
      sendEmail({
        from: `Ponderosa Motor Inn <${fromEmail}>`,
        to: email,
        subject: 'We received your enquiry — Ponderosa Motor Inn, Golden BC',
        html: guestEmailHtml(data),
      }),
    ]);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    console.error('Email send failed:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email', detail: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
