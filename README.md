# Rule-Based Derma Recommendation API

Minimal production-style REST API for tele-derma rules evaluation.

## Setup

```bash
npm install
```

Create `.env`:

```bash
cp .env.example .env
```

Update `DATABASE_URL` to your PostgreSQL connection.

Run migrations and generate Prisma client:

```bash
npm run prisma:migrate
npm run prisma:generate
```

Optional seed:

```bash
npx prisma db seed
```

Start the API:

```bash
npm run dev
```

## API

### POST /api/recommendations/evaluate

Request body:

```json
{
  "appointmentId": "123",
  "answers": [
    { "questionId": "age_band", "answer": "24_40" },
    { "questionId": "skin_goals", "answer": ["acne_breakouts"] }
  ]
}
```

Response:

```json
{
  "appointmentId": 123,
  "diagnosis_ids": [1, 2],
  "longevity_ids": [1],
  "video_ids": [],
  "kickout_id": null
}
```

Example curl:

```bash
curl -X POST http://localhost:3000/api/recommendations/evaluate \
  -H "Content-Type: application/json" \
  -d '{"appointmentId":"123","answers":[{"questionId":"age","answer":17}]}'
```

## Rules

Rules are stored in `SKIN_CONCERN_DIAGNOSIS_MAP.rules` as JSON. Each policy is validated via Ajv before evaluation.
Invalid policies are skipped and logged.

Policy shape:

```json
{
  "version": 1,
  "enabled": true,
  "conditions": {
    "all": [
      { "fact": "age", "op": ">=", "value": 18 },
      { "fact": "skin_goals", "op": "includes", "value": "acne_breakouts" }
    ]
  },
  "effect": {
    "diagnosis_ids": [1],
    "longevity_ids": [2]
  }
}
```

Operators (v1):
- equals
- in
- includes
- includesAny
- exists
- isTrue / isFalse
- >=, >, <=, <
- between (value is {"min": number, "max": number})

Tie-break for kickouts:
- If multiple matching policies output `kickout_id`, the engine selects the policy with the lowest `SKIN_CONCERN_DIAGNOSIS_MAP.id`.

## Project scripts

- `npm run dev` - start server with watch
- `npm run build` - build TypeScript
- `npm run start` - run compiled server
- `npm run prisma:migrate` - run migrations
- `npm run prisma:generate` - generate Prisma client
- `npm run prisma:studio` - open Prisma Studio

## Notes

- `APPOINTMENT_REPORT` is upserted by `appointment_id` per evaluation.
- `video_ids` is always an empty array for now.
