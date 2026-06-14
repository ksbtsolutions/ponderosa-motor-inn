export default async function handler(req, res) {
  const { checkin, checkout, guests = 2, rooms = 1 } = req.query

  if (!checkin || !checkout) {
    return res.status(400).json({ error: 'checkin and checkout dates are required' })
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(checkin) || !dateRegex.test(checkout)) {
    return res.status(400).json({ error: 'Dates must be in YYYY-MM-DD format' })
  }

  const ciDate = new Date(checkin)
  const coDate = new Date(checkout)
  if (coDate <= ciDate) {
    return res.status(400).json({ error: 'checkout must be after checkin' })
  }

  const g = Math.min(Math.max(parseInt(guests, 10) || 2, 1), 6)
  const r = Math.min(Math.max(parseInt(rooms, 10) || 1, 1), 3)

  // Booking.com deep-link
  const bookingUrl = new URL('https://www.booking.com/searchresults.html')
  bookingUrl.searchParams.set('ss', 'Ponderosa Motor Inn Golden British Columbia')
  bookingUrl.searchParams.set('checkin', checkin)
  bookingUrl.searchParams.set('checkout', checkout)
  bookingUrl.searchParams.set('group_adults', g)
  bookingUrl.searchParams.set('no_rooms', r)

  // Expedia deep-link
  const expediaUrl = new URL('https://www.expedia.ca/Hotels-Search')
  expediaUrl.searchParams.set('destination', 'Ponderosa Motor Inn, Golden, BC, Canada')
  expediaUrl.searchParams.set('startDate', checkin)
  expediaUrl.searchParams.set('endDate', checkout)
  expediaUrl.searchParams.set('adults', g)
  expediaUrl.searchParams.set('rooms', r)

  // Hotels.com deep-link
  const hotelsUrl = new URL('https://www.hotels.com/search.do')
  hotelsUrl.searchParams.set('q-destination', 'Golden, BC, Canada')
  hotelsUrl.searchParams.set('q-check-in', checkin)
  hotelsUrl.searchParams.set('q-check-out', checkout)
  hotelsUrl.searchParams.set('q-rooms', r)
  hotelsUrl.searchParams.set('q-room-0-adults', g)

  // KAYAK
  const kayakUrl = `https://www.kayak.ca/hotels/Golden,BC,Canada/${checkin}/${checkout}/${g}adults/${r}rooms`

  const links = [
    { name: 'Booking.com',  url: bookingUrl.toString() },
    { name: 'Expedia',      url: expediaUrl.toString() },
    { name: 'Hotels.com',   url: hotelsUrl.toString() },
    { name: 'KAYAK',        url: kayakUrl },
  ]

  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
  return res.status(200).json({ links })
}
