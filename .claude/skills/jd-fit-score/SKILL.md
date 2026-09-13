---
name: jd-fit-score
description: Use when the user provides a job description (JD) and asks whether/how well it fits their profile, or asks for a fit score. Reads ONLY the literal content of src/data/*.ts and scores fit 0-10 with zero assumptions or fabrication.
license: MIT
---

# JD Fit Score

Scores how well a job description matches Tanuj Arora's profile, using ONLY facts
literally present in this repo's data files. Every claim used as evidence MUST be
traceable to an exact quote + source file. No assumption, inference from job titles,
industry stereotypes, or "typically implied" skills is permitted.

## Hard Rules (non-negotiable)

1. **Re-read all data files fresh from disk every time.** Never rely on conversation
   memory or prior summaries — they can be stale or compressed.
2. **Every JD requirement gets exactly one classification:**
   - `Match` — explicit evidence exists (cite exact file + quote)
   - `Partial` — adjacent/transferable evidence exists (cite it, explain the gap)
   - `Gap` — no evidence at all
   - `Unknown` — profile data is insufficient to judge (never guess yes/no)
3. **When evidence is borderline, default to the more conservative bucket**
   (Partial over Match, Gap over Partial).
4. **No tool, certification, metric, or experience may be assumed** from job-title
   stereotypes (e.g., "PMs usually use Jira" is NOT evidence unless Jira is explicitly
   named in a data file).
5. **Every specific claim (years, %, tool, cert, company) must be traceable** to a
   literal file+field. If you can't point to the source, don't use it as evidence.
6. **Never adjust the score upward to be encouraging.** The score reflects grounded
   evidence only.
7. If the JD itself is ambiguous or the data seems like it might not reflect current
   reality, **ask the user** rather than guessing.

## Data Files to Read (every invocation)

- `src/data/hero.ts` (about-me, key areas)
- `src/data/experience/sourcefuse.ts`
- `src/data/experience/hicx.ts`
- `src/data/experience/baswarePM.ts`
- `src/data/experience/baswareEngineer.ts`
- `src/data/skills.ts`
- `src/data/certifications.ts`
- `src/data/domainExpertise.ts`
- `src/data/education.ts`
- `src/data/projects.ts`
- `src/data/contact.ts`

## Process

1. Read all data files listed above in full.
2. Parse the JD into two lists: **Required/Minimum qualifications** and
   **Preferred/Bonus/"set yourself apart"** items.
3. For each item in both lists, search the data files for literal evidence and
   classify it (Match/Partial/Gap/Unknown), citing the exact source.
4. Compute the score using the fixed formula below — show the math.
5. Call out any "keyword trap" — JD terms that superficially resemble profile
   terms (e.g., title says "Product Lifecycle" but means something structurally
   different from actual product-management experience) without real substance
   overlap.
6. Output the full breakdown (see format below).
7. Save the same output to `output/jd-scores/<Company>-<RoleShort>.md` (create the
   `output/jd-scores/` directory if it doesn't exist).

## Scoring Formula (fixed, not vibes-based)

For each group (Required, Bonus):
```
group_score = (Matches × 1.0 + Partials × 0.5 + Gaps × 0 + Unknowns × 0.25) / total_items_in_group
```

Final score:
```
final = round((0.70 × required_score + 0.30 × bonus_score) × 10, 1)
```
Clamp to [0, 10]. Weighting is fixed at 70% Required / 30% Bonus.

## Output Format

```
## Fit Assessment: <Role> — <Company>

**Score: X/10 — <label>**

### Key Strengths
- <Requirement>: <why it's a strong match, 1 line, grounded in evidence>

### Key Weaknesses / Gaps
- <Requirement>: <why it's a gap, 1 line>

### Bottom Line
<2-3 sentence narrative summary of overall fit and biggest deciding factor>

### CV & Cover Letter Tailoring Notes

**Emphasize (lead with these):**
- <Matched requirement> → <specific real achievement/bullet from src/data to feature>,
  e.g. "Backlog/roadmap ownership → src/data/experience/sourcefuse.ts: Omnia roadmap bullet"

**Suggested headline/summary angle:**
<1-2 sentence positioning suggestion, grounded in the top 2-3 Matches>

**Honest framing needed for these gaps:**
- <Gap requirement> → <how to acknowledge it truthfully without hiding or overclaiming>

**Do NOT claim (zero evidence exists):**
- <explicit list of anything classified Gap/Unknown that must never be implied,
  stated, or hinted at in a CV or cover letter for this role>

### Required Qualifications (full breakdown)
| Requirement | Classification | Evidence (source) |
|---|---|---|
| ... | Match/Partial/Gap/Unknown | "<exact quote>" — src/data/<file> |

### Preferred / Bonus (full breakdown)
| Requirement | Classification | Evidence (source) |
|---|---|---|

### Keyword Trap (if any)
<explain any superficial title/keyword overlap that doesn't reflect real fit>

### Score Calculation
Required: <M> match, <P> partial, <G> gap, <U> unknown → required_score = X.XX
Bonus: <M> match, <P> partial, <G> gap, <U> unknown → bonus_score = X.XX
Final = round((0.70 × X.XX + 0.30 × X.XX) × 10, 1) = X.X/10

### Evidence Log
- <file>: "<literal quote used>"
```

## Saving the Report

Write the full output above to:
`output/jd-scores/<Company>-<RoleShort>.md`

## Future Use: Tailoring a CV/Cover Letter for This Role

If the user later asks to draft a tailored CV/cover letter for a role that already
has a saved file in `output/jd-scores/`, read that file FIRST before drafting.
Use its "CV & Cover Letter Tailoring Notes" section as the basis for what to
emphasize, and treat its "Do NOT claim" list as a hard constraint on the drafted
CV/cover letter content — do not violate it even if it seems like it would
strengthen the application.
