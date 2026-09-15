# OralCare Mobile

Cross-platform patient application for the existing Dental Appointment Management System.

## Problem and approach

The original clinic system centralizes appointment and patient workflows for dentists and reception staff, but patients need a simpler mobile journey. This app reworks that patient experience around quick appointment access, treatment history and notification preferences without exposing the clinic administration interface.

## Current status

This is a functional portfolio MVP with fictional demonstration data. Navigation and patient flows work on Android and iOS through Expo Go. It is not approved for clinical use and is not connected to real PHP/MySQL patient records.

## Stack

- React Native 0.86
- TypeScript
- Expo SDK 57
- Expo Router
- Android, iOS and web from one codebase
- GitHub Actions project validation and type checking

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

Scan the generated QR code with Expo Go. Demo credentials are prefilled and no real authentication occurs.

## Verified limitation

The mobile user interface currently reads fictional local data. Connecting it directly to the academic PHP pages would be unsafe and difficult to maintain. The next technical milestone is a versioned REST API with token authentication and server-side role authorization.

## Production roadmap

1. Create authenticated, versioned PHP REST endpoints.
2. Replace demo login with secure token-based authentication and device storage.
3. Enforce patient, dentist and receptionist permissions on the server.
4. Connect appointment availability and transactional booking.
5. Add push notifications and deep links.
6. Add unit, integration, accessibility and end-to-end tests.
7. Complete AVG/GDPR and security review before processing patient data.

## Security boundary

Do not connect this MVP directly to real patient records. The existing academic backend requires a security review, API layer, audit logging and privacy controls before official use.
