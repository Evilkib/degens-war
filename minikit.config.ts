export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://degens-war.vercel.app";

export const miniKitConfig = {
  version:               "next",
  name:                  "Degens-War",
  iconUrl:               `${APP_URL}/icon.png`,
  homeUrl:               APP_URL,
  splashImageUrl:        `${APP_URL}/splash.png`,
  splashBackgroundColor: "#060009",
  webhookUrl:            `${APP_URL}/api/webhook`,
};

export const accountAssociation = {
  header:    process.env.FARCASTER_HEADER    ?? "",
  payload:   process.env.FARCASTER_PAYLOAD   ?? "",
  signature: process.env.FARCASTER_SIGNATURE ?? "",
};
