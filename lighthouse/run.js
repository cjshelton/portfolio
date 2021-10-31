const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const desktopConfig = require("./desktop-config.js");
const mobileConfig = require("./mobile-config.js");

const formatScore = score => score * 100;

(async () => {
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
        logLevel: "info",
        output: "html",
        port: chrome.port,
    };

    const urls = [
        "https://www.cshelton.co.uk/",
        "https://www.cshelton.co.uk/home/",
        "https://www.cshelton.co.uk/skills-and-experience/",
        "https://www.cshelton.co.uk/personal-projects/",
        "https://www.cshelton.co.uk/blog/",
    ];

    const allResults = {};

    for (const url of urls) {
        const configs = {
            desktop: desktopConfig,
            mobile: mobileConfig,
        };

        allResults[url] = {};

        for (const configType in configs) {
            const runnerResult = await lighthouse(
                url,
                options,
                configs[configType]
            );

            const simplifiedResult = {
                performance: formatScore(
                    runnerResult.lhr.categories.performance.score
                ),
                accessibility: formatScore(
                    runnerResult.lhr.categories.accessibility.score
                ),
                bestPractices: formatScore(
                    runnerResult.lhr.categories["best-practices"].score
                ),
                seo: formatScore(runnerResult.lhr.categories.seo.score),
                pwa: formatScore(runnerResult.lhr.categories.pwa.score),
            };

            allResults[url][configType] = simplifiedResult;
        }
    }

    console.log(JSON.stringify(allResults));

    await chrome.kill();
})();
