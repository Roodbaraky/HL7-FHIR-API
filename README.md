# HL7-FHIR API

## Contents
- [Overview](#overview)
- 
## Overview
This is a mock implementation of a FHIR-style API for medical systems, intended to improve my understanding of information transfer in medical / lab settings, which must adhere strictly to these constraints.

## Installation
 Clone the repository via:
```git clone https://github.com/Roodbaraky/HL7-FHIR-API```

Install dependencies via:
```npm install```

## Testing
Tests can be run manually via:
```npm test```
OR
```npm run watch```
To use the '--watch' flag with Vitest.

## Development
Run the development server via:
```npm run dev```

## Production
Build for production:
```npm run build```
OR
```npm run clean```
To use the "--clean" flag with tsc.

Run the transpiled build via:
```npm run prod```
OR
Run dist/server.js with a process manager of your choice e.g.:
```pm2 start dist/app.js```
