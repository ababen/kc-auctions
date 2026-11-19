# Agent prompt: create the GHL Private Integration token

Paste everything below the line into an agent that can use a browser where you're already logged in to GoHighLevel and claude.ai.

---

**Goal:** Create a GoHighLevel Private Integration token for **one** sub-account, then save it as a Network secret in a Claude Code cloud environment. The token must never appear in chat, files, logs or screenshots.

**Target sub-account (must match exactly):**
- Location ID: `j3exS78suwnPaxPQOlVD`
- URL: https://app.gohighlevel.com/v2/location/j3exS78suwnPaxPQOlVD/dashboard

### Step 1: Open the right sub-account
1. Open the URL above.
2. Check that the browser address contains `/location/j3exS78suwnPaxPQOlVD/`. Write down the sub-account name shown in the top-left switcher.
3. If the address shows a different location ID, or you're in the Agency view, **stop** and report it. Don't create anything.

### Step 2: Create the Private Integration (in this sub-account, not the agency)
1. In that sub-account, go to **Settings → Private Integrations**. If you don't see it, check **Settings → Labs** or ask the agency admin to turn on Private Integrations. Don't use the Agency-level Private Integrations page.
2. Click **Create new Integration**.
   - Name: `Claude - Associate Auctions setup`
   - Description: `Tags, custom fields, opportunities, contacts for outreach setup`
3. Select only these scopes:
   - `locations.readonly`
   - `locations/tags.readonly`, `locations/tags.write`
   - `locations/customFields.readonly`, `locations/customFields.write`
   - `locations/customValues.readonly`, `locations/customValues.write`
   - `contacts.readonly`, `contacts.write`
   - `opportunities.readonly`, `opportunities.write`
   - `workflows.readonly`
   - `forms.readonly`
   - `calendars.readonly`
4. Create it, then copy the token. GHL shows it only once. Don't paste it anywhere except Step 3.

### Step 3: Save the token in the Claude Code environment
1. Go to https://claude.ai/code and open the session titled after this outreach / GHL work, or any session that uses the **Default** environment.
2. Open the cloud environment menu in the session's title bar, then choose **Default → Edit**.
3. Under **Network secrets** (called **API credentials** in older versions of the app), add one:
   - Host: `services.leadconnectorhq.com`
   - Header: `Authorization`
   - Type / prefix: `Bearer`
   - Name: `GHL - Associate Auctions (j3exS78suwnPaxPQOlVD)`
   - Value: the token
4. Save.

Note: the Default environment is used by all of this person's cloud sessions, so they can all send this token to `services.leadconnectorhq.com`. If that's not OK, create a separate personal environment (e.g. `kc-auctions`) and save the secret there instead. Say which one you used.

### Step 4: Report back (no token)
Reply with only:
- The sub-account name and confirmation that the location ID was `j3exS78suwnPaxPQOlVD`
- The integration name and the scopes you selected
- Which Claude environment holds the secret (Default or the new one)
- Anything that didn't match these steps

**Don't:** paste the token into chat or a file, create the integration at the Agency level, add any scope not listed above, or change anything else in GHL.
