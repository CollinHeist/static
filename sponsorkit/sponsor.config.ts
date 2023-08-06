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
            // to insert custom elements after the tier block
            // composeAfter: (composer, _tierSponsors, _config) => {
            //     composer.addSpan(10);
            // },
        },
        {
            title: 'Premium Sponsors',
            preset: presets.large,
            monthlyDollars: 10,
        },
    ],
});