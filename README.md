## Token Presale dApp – Dependency Fix

### What was fixed
- Fixed invalid `package.json` JSON syntax
- Added missing dependency `moralis-v1` (required by `react-moralis`)
- Removed `prepare` script that caused `npm install` to fail

### How to run
```bash
npm install
npm run dev
