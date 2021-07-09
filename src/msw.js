// src/mocks/handlers.js
import { rest, setupWorker } from 'msw'
export const handlers = [

  rest.get('/user+new', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]

export const worker = setupWorker(...handlers)