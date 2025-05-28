/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./Public/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                "normal ": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
            },
            fontFamily: {
                "Vazirmatn": "Vazirmatn",
                "Dana": "Dana",
                "DanaMedium": "Dana Medium",
                "DanaDemiBold": "Dana DemiBold",
                "MorabbaLight": "Morabba Light",
                "MorabbaMedium": "Morabba Medium",
                "MorabbaBold": "Morabba Bold",
            },
            letterSpacing: {
                "tightest": "-0.065em",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    lg: "1.625rem",
                },
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
