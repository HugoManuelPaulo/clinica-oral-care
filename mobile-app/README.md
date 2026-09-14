# OralCare Mobile

Cross-platform patient app concept for the existing Dental Appointment Management System.

## Status

This is a portfolio MVP with fictional data. It is not approved for clinical use and does not connect to the PHP/MySQL production data.

## Stack

- React Native
- TypeScript
- Expo SDK 56
- Expo Router
- Android, iOS and web from one codebase

## Implemented screens

- Demonstration login
- Patient dashboard
- Appointment booking interaction
- Appointment history
- Profile and notification preference
- Responsive tab navigation

## Run locally

```bash
cd mobile-app
npm install
npx expo start
```

Use Expo Go for a quick device preview, or press `a`, `i`, or `w` for Android, iOS, or web when the relevant environment is available.

Demo credentials are prefilled. No real authentication occurs in this version.

## Production roadmap

1. Refactor the PHP application into authenticated REST endpoints.
2. Replace demo login with secure token-based authentication and device storage.
3. Add server-side authorization for patient, dentist and receptionist roles.
4. Connect real appointment availability and transactions.
5. Add push notifications and deep links.
6. Add unit, integration, accessibility and end-to-end tests.
7. Complete AVG/GDPR and security review before processing patient data.

## Security boundary

Do not connect this MVP directly to real patient records. The existing academic backend requires a security review and API layer before any official use.
