import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'us-equity-investment-platform-rbphu4av',
  authRequired: true
})

export default blink