/**
 * GET /api/availability?checkin=2024-07-15&checkout=2024-07-18&guests=2&platform=booking
 *
 * Returns deep-link URLs to OTA platforms with dates and guests pre-filled.
 * This is the practical approach for a small independent hotel — rather than
 * a full OTA API integration (which requires months of partner approval), this
 * function generates direct booking links to their existing listings.
 *
 * No env vars required. No API keys needed.
 */

export const config = { runtime: 'edge' };

// Ponderosa's property IDs on each platform (update if they change)
const PROPERTY = {
  // Booking.com — from their listing URL: /hotel/ca/golden-1206-transcanada-highway
  booking: {
    hotelId: '1041614',  // numeric hotel ID for Booking.com search widget
    slug: 'golden-1206-transcanada-highway',
    country: 'ca',
  },
  // Expedia — hotel ID from listing URL
  expedia: {
    hotelId: '31718',
  },
  // KAYAK
  kayak: {
    hotelId: '642241',
  },
};

function buildBookingUrl(checkin, checkout, guests, rooms = 1) {
  const base = 'https://www.booking.com/hotel/ca/golden-1206-transcanada-highway.html';
  const params = new URLSearchParams({
    checkin,
    checkout,
    group_adults: guests,
    no_rooms: rooms,
    selected_currency: 'CAD',
    lang: 'en-gb',
  });
  return `${base}?${params}`;
}

function buildExpediaUrl(checkin, checkout, guests) {
  // Expedia uses startDate/endDate format
  const base = 'https://www.expedia.ca/Golden-Hotels-Ponderosa-Motor-Inn.h31718.Hotel-Information';
  const params = new URLSearchParams({
    chkin: checkin,
    chkout: checkout,
    rm1: `a${guests}`,  // adults
    rfrr: 'HSR.TG.0.0.Hotel.HotelResultList.1.hotel',
  });
  return `${base}?${params}`;
}

function buildKayakUrl(checkin, checkout, guests) {
  const base = 'https://www.ca.kayak.com/hotels/Ponderosa-Motor-Inn,Golden-c27073-h642241';
  const params = new URLSearchParams({
    in: checkin.replace(/-/g, '/'),
    out: checkout.replace(/-/g, '/'),
    rooms: 1,
    travelers: guests,
  });
  return `${base}/${params}`;
}

function buildHotelsUrl(checkin, checkout, guests) {
  const [ci_year, ci_month, ci_day] = checkin.split('-');
  const [co_year, co_month, co_day] = checkout.split('-');
  return `https://ca.hotels.com/ho83499/?chkin=${ci_month}%2F${ci_day}%2F${ci_year}&chkout=${co_month}%2F${co_day}%2F${co_year}&x_pwa=1&rfrr=HSR&pwa_ts=1&referrerUrl=aHR0cHM6Ly93d3cuaG90ZWxzLmNvbS9Ib3RlbHMtU2VhcmNo&useRewards=false&sort=RECOMMENDED&adults=${guests}`;
}

export default async function handler(req) {
  const url = new URL(req.url);
  const checkin  = url.searchParams.get('checkin')  || '';
  const checkout = url.searchParams.get('checkout') || '';
  const guests   = url.searchParams.get('guests')   || '2';
  const platform = url.searchParams.get('platform') || 'all';

  const cors = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: { ...cors, 'Access-Control-Allow-Methods': 'GET, OPTIONS' } });
  }

  // Validate dates if provided
  if (checkin && checkout) {
    const ci = new Date(checkin);
    const co = new Date(checkout);
    if (isNaN(ci) || isNaN(co) || co <= ci) {
      return new Response(JSON.stringify({ error: 'Invalid date range' }), { status: 422, headers: cors });
    }
  }

  const links = {
    booking:  checkin ? buildBookingUrl(checkin, checkout, guests)  : 'https://www.booking.com/hotel/ca/golden-1206-transcanada-highway.html',
    expedia:  checkin ? buildExpediaUrl(checkin, checkout, guests)  : 'https://www.expedia.ca/Golden-Hotels-Ponderosa-Motor-Inn.h31718.Hotel-Information',
    kayak:    checkin ? buildKayakUrl(checkin, checkout, guests)    : 'https://www.ca.kayak.com/Golden-Hotels-Ponderosa-Motor-Inn.642241.ksp',
    hotels:   checkin ? buildHotelsUrl(checkin, checkout, guests)   : 'https://ca.hotels.com/ho83499/',
  };

  // If they want a direct redirect to a specific platform
  if (platform !== 'all' && links[platform]) {
    return Response.redirect(links[platform], 302);
  }

  const nights = checkin && checkout
    ? Math.round((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24))
    : null;

  return new Response(JSON.stringify({
    ok: true,
    query: { checkin, checkout, guests: parseInt(guests), nights },
    links,
    note: 'Ponderosa Motor Inn does not use a channel manager API. These are direct OTA deep-links with your dates pre-filled.',
  }), { status: 200, headers: cors });
}
