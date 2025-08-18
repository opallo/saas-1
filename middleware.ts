import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = createRouteMatcher([
  '/sign-in',
  '/api/checkout',
  '/api/webhook',
])

export default clerkMiddleware((auth, req) => {
  if (!publicRoutes(req)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}
