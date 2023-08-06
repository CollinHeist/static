import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
    // includePrivate: true,
    formats: ["svg"],
    tiers: [
        {
            title: "Past Sponsors",
            monthlyDollars: -1,
            preset: presets.xs,
        }, {
            title: "Backers",
            preset: presets.small
        },
        {
            title: "Sponsors",
            preset: presets.medium,
            monthlyDollars: 1,
        },
        {
            title: 'Premium Sponsors',
            preset: presets.large,
            monthlyDollars: 10,
        },
    ],
});