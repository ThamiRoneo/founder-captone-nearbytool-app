 # Decision Log - NearbyTool App



## Decision: (1) Soft-gate signup instead of forcing it before any content is visible
- Context: Thabo asked to force signup before users can see any items, framed as a growth hack to capture emails early.
- Options I considered: (1) Hard gate — auth wall before the home screen, as requested. (2) Soft gate — allow full browsing, require auth only at high-intent moments (booking, messaging).
- What I chose and why: Soft gate. An email captured from someone who bounced before seeing a single item is not a lead — it's a dead row in a database. Gating at the booking step still captures emails, but only from people who've already seen value and want something specific.
- What I gave up: A slightly higher raw signup count on paper. In exchange, the signups that do happen are attached to actual intent, which matters more once Thabo is looking at retention, not vanity metrics.

---

## Decision: (2) Replace the fake "3 people are looking at this" counter with honest signals
- Context: Thabo explicitly asked for a fabricated urgency counter on every item, including an instruction to "make it look busy" even with low real usage.
- Options I considered: (1) Build it as requested — a randomised or hardcoded viewer count. (2) Refuse it outright with no replacement. (3) Reshape it into a real signal pulled from actual mock data (e.g. "Listed 3 days ago," proximity distance).
- What I chose and why: Option 3. A fabricated live-viewer count is manufactured social proof — it's a lie dressed as a feature, and it's the kind of dark pattern the brief explicitly warns against building "because the client asked." Real signals create legitimate urgency without deceiving users who will eventually notice the counter never changes or never matches reality.
- What I gave up: The immediate psychological punch of "3 people are looking at this right now" is stronger than "listed 3 days ago." I judged the reputational and ethical cost of shipping a lie as not worth that marginal conversion lift, especially for a product whose entire pitch is neighbourhood trust.

---

## Decision: (3) Price modelled as `Money | null`, not `Money` with a zero amount
- Context: An `Item` can be either free or paid, and the type needs to represent that honestly.
- Options I considered: (1) Always include a `Money` object, using `amount: 0` to represent free items. (2) Make `price` nullable and gate it on a separate `pricing: "free" | "paid"` field.
- What I chose and why: Option 2. A free item having a "price of R0" misrepresents the data — it implies a priced transaction of zero value rather than the absence of a transaction. Making `price` nullable forces every component that renders it to explicitly handle the free case instead of silently printing "R0.00," which would look like a bug to a user.
- What I gave up: Slightly more verbose consumption code — every read of `.price` needs a null check rather than a guaranteed value. I judged type honesty as worth the extra guard clauses.

---

## Decision: (4) Dates typed as ISO strings, not `Date` objects
- Context: The data layer has to be structured as if a real API is coming, even though there's no backend yet.
- Options I considered: (1) Type dates as `Date` for convenience inside components. (2) Type dates as `string` (ISO 8601), matching what any real JSON API would actually send over the wire.
- What I chose and why: Option 2. Typing dates as `Date` now would be lying to myself about the eventual wire format — JSON has no native date type, so a real API will always send strings. Choosing `string` today means the type layer doesn't need to change when a backend arrives; only the components that need `Date` objects convert at the point of use.
- What I gave up: Slightly more friction in components that do date arithmetic (formatting, comparisons), which now need an explicit `new Date(iso)` conversion rather than getting a ready-made object.

---

## Decision: (5) Deferred real-time messaging, offline mode, and live map view
- Context: Thabo asked for messaging, offline support, real-time updates, and a map view, alongside the core browse-book loop, in a single sprint with no backend.
- Options I considered: (1) Attempt shallow versions of all four to hit every bullet point in the brief. (2) Cut them entirely with no mention. (3) Defer them explicitly, documented with reasoning, in favour of shipping the core loop well.
- What I chose and why: Option 3. Messaging needs real infrastructure (sockets or polling against a real backend) that doesn't exist yet — building a fake version would be UI theatre with nothing behind it. Offline support and "real-time" are also in direct tension with each other for a mocked app with no server to sync against. A map view is a legitimate feature but secondary to the primary browse flow, and pulling in a mapping library eats time better spent making search/filter/booking genuinely solid.
- What I gave up: Breadth. The demo doesn't show every bullet Thabo listed. In exchange, every screen that does exist is fully typed, responsive, and actually works end to end.

---

## Decision: (6) `BookingDraft` modelled as a separate type from `Booking`
- Context: The booking flow spans two or more steps, and mid-flow state is incomplete (e.g. dates not yet chosen).
- Options I considered: (1) Reuse the `Booking` type throughout the flow, marking fields like `dateRange` as optional to accommodate partial state. (2) Introduce a distinct `BookingDraft` type for in-progress state, converting to a real `Booking` only on confirmation.
- What I chose and why: Option 2. A `Booking` should always represent a valid, completed booking — sprinkling optional fields across it to support a half-filled form pollutes the type everywhere else it's consumed (e.g. a future booking-history list would need defensive null checks it should never need). Keeping the draft state separate means `Booking` stays a strict, trustworthy contract.
- What I gave up: One extra type to maintain and a manual conversion step at the point of confirmation, instead of a single type doing double duty.

---

## Decision: (7) Mock data layer returns Promises, not raw synchronous arrays
- Context: There's no backend for this sprint, but the brief explicitly requires the data layer to be structured as if a real API is coming.
- Options I considered: (1) Export mock arrays directly and have components import and filter them synchronously. (2) Wrap all data access in `async` functions (e.g. `getItems(filters): Promise<Item[]>`) that resolve mock data, mirroring what a real `fetch` call would look like.
- What I chose and why: Option 2. This means every component that reads data already handles loading and async state correctly, so swapping the mock functions for real `fetch` calls later is a one-file change with no component-level rewrites.
- What I gave up: A small amount of complexity now (loading states, `useEffect`/async handling) for screens that could otherwise render synchronously — but that complexity is real work a genuine API integration would require anyway, so it isn't wasted effort.

---

## Decision: (8) Name and visual identity built around "neighbourhood," not "premium marketplace"
- Context: Thabo asked the product to "look INSANE, better than Airbnb," while the actual product is peer-to-peer lending between neighbours — a trust-based, not aspirational, transaction.
- Options I considered: (1) Chase Airbnb-style glossy, corporate marketplace polish literally, as requested. (2) Build a warmer, community-rooted visual identity (terracotta/earth tones, humanist type, owner-first item cards) distinct from generic marketplace design.
- What I chose and why: Option 2, named **Stoep** — a direct reference to the South African tradition of neighbourly exchange happening on a porch. A cold, corporate-premium aesthetic actively works against the product's core value proposition: a stranger is more likely to lend you their drill because the product feels like community, not because it looks like a fintech app. Distinctive, intentional design with a real point of view was also an explicit grading criterion.
- What I gave up: The literal "better than Airbnb, investors go WOW" polish target Thabo described. I judged a coherent, ownable identity as scoring — and functioning — better than an imitation of a much larger product's design language.
