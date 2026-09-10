// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-available-positions",
          title: "Available Positions",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/positions/";
          },
        },{id: "news-check-out-the-paper-led-by-research-scientist-dr-qiang-sun-titled-can-ai-weather-models-predict-out-of-distribution-gray-swan-tropical-cyclones-published-in-pnas-the-paper-presents-controlled-experiments-showing-that-an-ai-weather-model-cannot-forecast-gray-swan-tropical-cyclones-those-stronger-than-any-the-ai-model-had-seen-in-the-training-set-i-e-ai-model-cannot-extrapolate-however-the-ai-model-shows-the-remarkable-ability-to-learn-from-strong-storms-in-one-ocean-basin-and-forecast-them-in-another-i-e-it-can-translocate-the-results-have-important-implications-for-the-current-ai-weather-models-and-climate-emulators-the-paper-is-highlighted-in-pnas-podcast-gizmodo-and-uchicago-news",
          title: 'Check out the paper led by research scientist Dr. Qiang Sun titled “Can...',
          description: "",
          section: "News",},{id: "news-check-out-the-paper-led-by-phd-student-karan-jakhar-titled-analytical-and-ai-discovered-stable-accurate-and-generalizable-subgrid-scale-closure-for-geophysical-turbulence-published-in-prl-the-paper-shows-that-ai-specifically-techniques-that-can-discover-equations-from-data-can-identify-new-closure-models-for-turbulence-that-are-accurate-and-stable-and-work-for-unseen-flows-but-only-after-physics-constraints-are-included-in-the-discovery-the-paper-also-shows-that-guided-by-the-ai-discovery-this-closure-could-be-derived-analytically-the-results-provide-an-example-of-ai-accelerating-scientific-discovery-the-paper-is-highlighted-by-aps-editors-and-by-uchicago-news",
          title: 'Check out the paper led by PhD student Karan Jakhar titled “Analytical and...',
          description: "",
          section: "News",},{id: "news-our-team-is-one-of-eight-selected-nationally-for-the-inaugural-moonshots-program-of-the-laude-institute-for-a-project-titled-actionable-ai-weather-forecasts-for-developing-economies-led-by-statistician-and-computer-scientist-rebecca-willett-with-nobel-laureate-economist-michael-kremer-computer-scientist-ian-foster-and-me-the-people-who-most-need-a-good-weather-forecast-often-have-the-least-access-to-one-we-will-combine-ai-weather-and-climate-models-with-data-from-developing-countries-build-software-that-lets-any-country-plug-in-its-own-observations-and-create-benchmarks-so-that-forecasts-can-be-compared-fairly-across-countries-the-eight-teams-now-have-six-months-to-turn-their-seed-grants-into-full-proposals-for-a-10m-multi-year-moonshot-lab-to-be-decided-in-october-the-award-is-covered-by-forbes-and-uchicago-news",
          title: 'Our team is one of eight selected nationally for the inaugural Moonshots program...',
          description: "",
          section: "News",},{id: "news-check-out-the-paper-co-led-by-ens-paris-phd-student-amaury-lancelin-and-uchicago-postdoc-dr-alex-wikner-titled-ai-boosted-rare-event-sampling-to-characterize-extreme-weather-published-in-prl-the-rarest-weather-is-the-hardest-to-simulate-and-characterize-because-it-almost-never-happens-learning-about-a-once-in-a-thousand-year-heat-wave-would-require-simulating-thousands-of-years-of-weather-the-paper-offers-a-hybrid-ai-math-physics-solution-a-fast-ai-weather-model-guides-an-expensive-physics-based-climate-model-through-a-mathematical-algorithm-to-more-efficiently-sample-times-where-the-chance-of-extreme-events-is-higher-this-reproduces-the-statistics-of-heat-waves-with-100x-less-computing-time-making-it-practical-to-study-the-most-extreme-and-impactful-events-that-have-not-happened-yet-the-gray-swans-the-paper-is-highlighted-by-aps-editors-and-uchicago-news",
          title: 'Check out the paper co-led by ENS-Paris PhD student Amaury Lancelin and UChicago...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%64%72%61%6D%68@%75%63%68%69%63%61%67%6F.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
