# ⚔️ Degens-War — Farcaster Mini App

> Dark-fantasy RPG on Base Chain. Fight enemies, earn $DG tokens, mint capybara NFT characters, stake for buffs, and share your victories on Farcaster.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/degens-war)

---

## 🚀 Quick Start (2 minutes)

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/degens-war.git
cd degens-war

# 2. Install
npm install

# 3. Set up env
cp .env.example .env.local
# Edit .env.local — add your keys (see Environment Variables below)

# 4. Run dev server
npm run dev
# Open http://localhost:3000
```

---

## 🔑 Environment Variables

| Variable | What it is | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_BASE_RPC_URL` | Base chain RPC | Use `https://mainnet.base.org` (free) |
| `NEXT_PUBLIC_DG_TOKEN_ADDRESS` | $DG ERC-20 address | Already set in .env.example |
| `NEXT_PUBLIC_STAKING_ADDRESS` | Staking contract | Deploy your contract, paste address |
| `NEXT_PUBLIC_NFT_ADDRESS` | NFT mint contract | Deploy your contract, paste address |
| `NEXT_PUBLIC_ONCHAINKIT_API_KEY` | OnchainKit key | [portal.cdp.coinbase.com](https://portal.cdp.coinbase.com) → free |
| `NEXT_PUBLIC_APP_ID` | MiniKit App ID | Same Coinbase portal |
| `NEXT_PUBLIC_APP_URL` | Your live URL | Set after Vercel deploy |
| `FARCASTER_HEADER` | Manifest signing | Warpcast devs portal (Step 5 in deploy guide) |
| `FARCASTER_PAYLOAD` | Manifest signing | Warpcast devs portal |
| `FARCASTER_SIGNATURE` | Manifest signing | Warpcast devs portal |

---

## 🎮 Game Features

- **8 capybara classes** — Warrior, Wizard, Archer, Cleric, Barbarian, Venomerce, Assassin, Mystic
- **Turn-based combat** — cast skills, manage MP, trigger crits, earn $DG
- **ERC-721 character NFTs** — mint your class on Base via Paymaster (gasless)
- **Staking system** — Bronze → Diamond tiers with XP/drop rate buffs
- **Quest system** — daily quests with $DG rewards
- **Inventory & Shop** — equip gear, buy consumables
- **Flight mode** — unlock at Lv10, boosts aerial skills, costs MP/turn
- **Farcaster integration** — SIWF auth, auto-cast on wins/mints

---

## 🏗️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS (dark fantasy theme) |
| Web3 Auth | Farcaster SIWF via MiniKit |
| Chain | Base Mainnet (chainId: 8453) |
| Reads/Writes | viem + wagmi + OnchainKit |
| Deployment | Vercel |

---

## 📁 Folder Structure

```
degens-war/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout — providers
│   ├── page.tsx             # → redirects to /character-select
│   ├── character-select/    # NFT character mint screen
│   ├── combat/              # Turn-based combat
│   ├── quests/              # Daily quests + claim
│   ├── bag/                 # Inventory
│   ├── shop/                # $DG shop
│   ├── stats/               # Player stats + staking
│   ├── guild/               # Guild system (v1.5)
│   └── .well-known/         # Farcaster manifest endpoint
├── components/
│   ├── GameLayout.tsx       # Tab navigation shell
│   ├── CharacterSelectScreen.tsx  # Full character select + NFT mint
│   └── screens/             # All 6 game tab screens
├── lib/
│   ├── gamedata.ts          # All game data (classes, enemies, skills...)
│   └── types.ts             # TypeScript type definitions
├── contracts/
│   └── abis.ts              # $DG, Staking, NFT contract ABIs
├── public/
│   └── characters/          # ← ADD YOUR 8 PNG CHARACTER IMAGES HERE
├── minikit.config.ts        # Farcaster manifest config
└── .env.example             # Copy to .env.local
```

---

## 🖼️ Character Images

Add your 8 character PNG files (512×512, transparent background recommended) to `/public/characters/`:

```
public/characters/
├── warrior.png
├── wizard.png
├── archer.png
├── cleric.png
├── barbarian.png
├── venomerce.png
├── assassin.png
└── mystic.png
```

The app will automatically use them. Until you add them, emojis are shown as fallback.

---

## 🚢 Deploy to Vercel

### Option A — One click
Click the "Deploy with Vercel" button at the top of this README.

### Option B — Manual
```bash
# Push to GitHub first
git add . && git commit -m "initial" && git push

# Then go to vercel.com → New Project → Import GitHub repo
# Add env vars in Vercel dashboard → Deploy
```

---

## 🤝 Contributing

1. Fork the repo
2. Create branch: `git checkout -b feat/your-feature`
3. Commit: `git commit -m "feat: add guild raids"`
4. Push and open a PR against `main`
5. Every PR gets a Vercel preview URL automatically

### Commit convention
- `feat:` new feature
- `fix:` bug fix
- `chore:` tooling/config
- `docs:` documentation

---

## 📄 License

MIT — see [LICENSE](LICENSE)
