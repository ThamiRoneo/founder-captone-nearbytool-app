# Founder Response — to Thabo

Hi Thabo, thanks for the brief. Here's how I approached the sprint and the calls I made.

Quick honesty up front: you asked for about three months of work in one sprint — that's normal, every founder does it, it's not a knock on you. My job this early is to protect the thing you're building from getting spread so thin that none of it actually works. So I picked the things that make Stoep (working name, more on that below) real, and I said no — or "not yet" — to the rest. Here's the breakdown.

## What I built this sprint (and why these earned the spot)

- **Browse screen with search and filters (distance, category, free/paid).** This is the front door. If someone can't find a drill near them in ten seconds, nothing else matters.
- **Item detail page with photos, owner, and Book Now.** This is where trust actually gets decided — can I see who owns this, does it look legit, do I believe it. Skip this and you skip the exact moment someone decides whether to trust a stranger with their tools.
- **A real booking flow — pick dates, confirm, done.** This is the actual transaction. Without it, Stoep is just a nice-looking catalogue.
- **Login/signup — but reshaped.** See "What I pushed back on" below for why it doesn't work the way you originally described it.
- **Fully responsive, works properly on a phone, and is keyboard-navigable.** Most early users are going to be on their phones, standing in front of the tool they want to borrow. If it's clunky on mobile, it's clunky for basically everyone.
- **A data layer built like a real backend is coming**, even though everything's mocked right now. When you're ready to hire a backend engineer or plug in a database, this doesn't get rebuilt — it just gets connected.

## What I cut or deferred (and why)

- **Messaging between borrower and owner** — you said "maybe" yourself, so I took you at your word. It also needs real infrastructure (live chat) that doesn't make sense to build against fake data. Strong phase-two feature once there's a backend.
- **Offline mode and real-time updates** — these are actually in tension with each other for a product without a live backend yet, and both are meaningfully more engineering time than this sprint had. Worth doing properly later, not worth faking now.
- **Map view, ratings & reviews, wishlist, referral codes, dark mode** — all reasonable for a mature product, none of them core to "can I find a drill and book it." I'd rather hand you four things that work perfectly than ten things half-built that need redoing later.

None of these are dead. They're just not what makes or breaks whether the first version of this product works.

## What I pushed back on (and why — be honest and kind)

- **Forcing signup before people can see anything.** I get the instinct — more emails, more leads. But picture it: someone hears about Stoep, opens the app, and the first thing they see is a wall asking for their email before they've seen a single tool. Most people bounce right there. What you'd be capturing isn't leads, it's a list of people who never actually saw the product. Instead, people can browse and search freely — we only ask for signup the moment someone tries to book something or message an owner. You still capture the email, but now it's attached to someone who wants something specific. That's a better number to show investors than raw signups anyway.

- **The "3 people are looking at this right now!!" counter.** I didn't build this one, and I want to explain clearly because I know you loved it. That number would have to be fake, at least at first — you said it yourself, "even if we don't have many users yet, make it look busy." That means showing real users a made-up statistic to pressure them into booking faster. If even one person figures that out — and someone always does, usually loudly, on social media — it torches the one thing this whole product is selling: trust between neighbours. A tool-lending app that gets caught lying to its own users doesn't recover from that easily. Instead, I built real urgency signals from the actual data — how long ago something was listed, how close it is to you. Smaller nudge, but it's still true in six months when you have real traffic and don't need to fake anything.

- **"Make it look like Airbnb, make investors go WOW."** I went a different direction on purpose. Airbnb sells aspiration to strangers. You're selling trust between neighbours — that needs to look and feel different. I leaned into warm, grounded design instead of glossy corporate polish, so it reads as community, not storefront. Happy to talk through this if you land and disagree, but I think it's more distinctive to an investor than a copy of an app they've already seen a hundred times.

## What I'd do next, if we keep going

- Stand up a real backend and swap the mock data functions for live API calls — the data layer is already shaped to make this a low-drama change.
- Build messaging once there's infrastructure to support it properly, rather than faking a chat UI with nothing behind it.
- Add ratings and reviews once there's real booking history to attach them to — reviews on a product with zero real transactions would just be more fake trust signals, which is exactly what I avoided above.
- Revisit map view and dark mode as genuine nice-to-haves once the core loop has real usage data behind it, so we're polishing based on how people actually use it rather than guessing upfront.
- Sit down together on the name — Stoep is a placeholder I like, but it's your call to make.

Everything above is also in the Decision Log with the fuller reasoning and tradeoffs, if you want to go deeper on any one call. Short version: I didn't build everything you asked for, and I built one or two things differently than you asked. I think it's a stronger, more honest product for it, and I'd rather have this conversation with you now than have you find out from a user complaint later.

Land safe. Let's talk when you're back.

— Your frontend engineer
- Thami Sithole
