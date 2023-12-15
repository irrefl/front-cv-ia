const tamplate = ` <div class="w-4/6">
<section class="pr-3 pl-3">
  
  <h2 class="text-2xl pb-1 border-b font-semibold">About</h2>
  <p class="mt-4 text-xs">This is who iam</p>

  <div class="bodyx">
    <div data-tooltip-target="tooltip-left" data-tooltip-placement="left">
      <div class="block-container">
        <div class="btn-back btn-back-1"></div>
        <div class="btn-front">
          <svg class="frame">
            <rect rx="32" stroke="url(#gradient-half)" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="48" height="48" viewBox="0 0 24 24"
            fill="none">
            <path
              d="M12.3999 17.4999C11.8999 17.2999 11.2999 17.3999 11.0999 17.8999L9.29989 21.4999C8.99989 21.9999 9.19989 22.5999 9.69989 22.8999C9.79989 22.9999 9.99989 22.9999 10.1999 22.9999C10.5999 22.9999 10.8999 22.7999 11.0999 22.4999L12.8999 18.8999C13.0999 18.2999 12.8999 17.6999 12.3999 17.4999Z"
              fill="url(#gradient-full)" />
            <path
              d="M17 17.4999C16.5 17.2999 15.9 17.3999 15.7 17.8999L13.9 21.4999C13.7 21.9999 13.8 22.5999 14.3 22.7999C14.4 22.8999 14.6 22.8999 14.8 22.8999C15.2 22.8999 15.5 22.6999 15.7 22.3999L17.5 18.7999C17.7 18.2999 17.5 17.6999 17 17.4999Z"
              fill="url(#gradient-full)" />
            <path
              d="M7.89994 17.4999C7.39994 17.2999 6.79994 17.3999 6.59994 17.8999L4.79994 21.4999C4.59994 21.9999 4.69994 22.5999 5.19994 22.7999C5.29994 22.9999 5.49994 22.9999 5.59994 22.9999C5.99994 22.9999 6.29994 22.7999 6.49994 22.4999L8.29994 18.8999C8.59994 18.2999 8.39994 17.6999 7.89994 17.4999Z"
              fill="url(#gradient-full)" />
            <path
              d="M15.2 1C12.4 1 9.9 2.5 8.5 4.8C8 4.7 7.5 4.6 7 4.6C3.7 4.6 1 7.3 1 10.6C1 13.9 3.7 16.6 7 16.6H15.2C19.5 16.6 23 13.1 23 8.8C23 4.5 19.5 1 15.2 1Z"
              fill="url(#gradient-full)" />
          </svg>
        </div>
      </div>
    </div>

    <div id="tooltip-left" role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      <strong class="text-xl font-medium">Further Education</strong>
      <ul class="mt-2 mb-10">
        <li class="px-2 mt-1">Coursera</li>
        <li class="px-2 mt-1">edx</li>
        <li class="px-2 mt-1">Udacity</li>
        <li class="px-2 mt-1">Udemy</li>
        <li class="px-2 mt-1">CodewithMosh</li>
        <li class="px-2 mt-1">Books</li>
      </ul>
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <div data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom">
      <div class="block-container">
        <div class="btn-back btn-back-2"></div>
        <div class="btn-front">
          <svg class="frame">
            <rect rx="32" stroke="url(#gradient-half)" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="48" height="48" viewBox="0 0 24 24"
            fill="none">
            <path
              d="M12.2999 22.0001C9.59992 22.0001 6.99992 21.0001 4.99992 19.0001C0.999923 15.0001 0.999923 8.70009 4.89992 4.80009C6.29992 3.30009 8.19992 2.30009 10.2999 2.00009C10.6999 1.90009 11.0999 2.10009 11.2999 2.50009C11.4999 2.90009 11.4999 3.30009 11.1999 3.60009C8.99992 6.10009 9.19992 10.0001 11.5999 12.4001C13.9999 14.8001 17.7999 15.0001 20.2999 12.8001C20.5999 12.5001 21.0999 12.5001 21.3999 12.7001C21.7999 12.9001 21.9999 13.3001 21.8999 13.7001C21.5999 15.8001 20.5999 17.6001 19.1999 19.1001C17.2999 21.0001 14.7999 22.0001 12.2999 22.0001Z"
              fill="url(#gradient-full)" />
          </svg>
        </div>
      </div>
    </div>

    <div id="tooltip-bottom" role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      <strong class="text-xl font-medium">Currently learning</strong>
      <ul class="mt-2 mb-10">
        <li class="px-2 mt-1">LLM Development and Integration</li>
        <li class="px-2 mt-1">Deep Learning</li>
      </ul>
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <div data-tooltip-target="tooltip-right" data-tooltip-placement="right">
      <div class="block-container">
        <div class="btn-back btn-back-3"></div>
        <div class="btn-front">
          <svg class="frame">
            <rect rx="32" stroke="url(#gradient-half)" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="48" height="48" viewBox="0 0 24 24"
            fill="none">
            <path
              d="M8.49995 22.9999C8.19995 22.9999 7.89995 22.8999 7.59995 22.7999C6.79995 22.3999 6.39995 21.5999 6.59995 20.7999L7.79995 14.9999H5.99995C5.19995 14.9999 4.49995 14.4999 4.19995 13.7999C3.89995 13.0999 3.99995 12.2999 4.59995 11.7999L14.0999 1.6999C14.6999 1.0999 15.6999 0.899901 16.3999 1.2999C17.1999 1.6999 17.5999 2.4999 17.3999 3.2999L16.1999 9.0999H17.9999C18.7999 9.0999 19.4999 9.5999 19.7999 10.2999C20.0999 10.9999 19.9999 11.7999 19.3999 12.2999L9.89995 22.3999C9.49995 22.7999 8.99995 22.9999 8.49995 22.9999Z"
              fill="url(#gradient-full)" />
          </svg>
        </div>
      </div>
    </div>

    <div id="tooltip-right" role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      <strong class="text-xl font-medium">Interests & Hobbies</strong>
      <ul class="mt-2">
        <li class="px-2 mt-1">Sustainability</li>
        <li class="px-2 mt-1">New technologies</li>
        <li class="px-2 mt-1">Blogging on dev.to</li>
        <li class="px-2 mt-1">Investment</li>
        <li class="px-2 mt-1">Travel</li>
      </ul>
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <svg style="visibility: hidden; width: 0; height: 0">
      <defs>
        <linearGradient id="gradient-full" x1="0%" y1="0%" x2="120%" y2="120%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#ffffff00" />
        </linearGradient>
        <linearGradient id="gradient-half" x1="-50%" y1="-50%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#ffffff00" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>

<section class="pr-3 pl-3">
  <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
    Work Experiences
  </h2>
  <ul class="mt-2">
    <li class="pt-2 mb-5">
      <p class="flex justify-between text-xs">
        <strong class="text-lg">Caracol Knits</strong>
        <span
          class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">2018</span>
      </p>
      <p class="flex justify-between text-base">
        Junior Software Analyst
      </p>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
            aria-controls="accordion-collapse-body-1">
            <span>🚀 Outstanding Contributions:</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <strong class="text-base">
              Outstanding Contributions:
            </strong>
            <ul
              class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
              <li class="mr-4">
                Actively collaborated in the design and
                development of internal projects during the
                training phase at Caracol University.
              </li>
              <li class="mr-4">
                Expert application of key technologies:
                <strong>Team Foundation, Visual Studio, SQL Server, C#,
                  Web APIs (ServiceStack and WCF), Silverlight,
                  and WPF.</strong>
              </li>
            </ul>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
            aria-controls="accordion-collapse-body-2">
            <span>🔄 Strategic Involvement in Technological
              Migration</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <strong class="text-base">
              Strategic Involvement in Technological
              Migration:</strong>
            <ul
              class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
              <li class="mr-4">
                Contributed to the technological migration
                process, applying Scrum, DDD, TDD, and BDD in
                interdisciplinary meetings for efficient execution
                and exhaustive testing.
              </li>
            </ul>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-3" aria-expanded="false"
            aria-controls="accordion-collapse-body-3">
            <span>🤝 Deep Collaboration with the Team & Software
              Architect</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <strong class="text-base">Deep Collaboration with the Team & Software
              Architect:</strong>
            <ul
              class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
              <li class="mr-4">
                Worked closely with the software architect and the
                team, applying agile principles. Ensured code
                quality before deployment, guided by test-driven
                development (TDD).
              </li>
            </ul>
          </div>
        </div>

        <h2 class="accordion-collapse-heading-3">
          <button type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-4" aria-expanded="false"
            aria-controls="accordion-collapse-body-3">
            <span>💡 Comprehensive Mastery of Web APIs and Design
              Patterns</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>

        <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <strong class="text-base">
              Comprehensive Mastery of Web APIs and Design
              Patterns:</strong>
            <ul
              class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
              <li class="mr-4">
                Developed and understood the implementation of Web
                APIs using design patterns, including SOLID and
                others. Managed various implementation aspects,
                from the frontend with Silverlight to databases
                with SQL Server.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>

    <li class="pt-2 mb-5">
      <p class="flex justify-between text-xs">
        <strong class="text-lg">Banpais</strong>

        <span
          class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">2019</span>
      </p>
      <p class="flex justify-between text-base">
        .NET Software Developer
      </p>

      <div id="accordion-collapse22" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-22">
          <button type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-22" aria-expanded="false"
            aria-controls="accordion-collapse-body-22">
            <span>🌐 Strategic Problem-Solving and
              Collaboration:</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-22" class="hidden" aria-labelledby="accordion-collapse-heading-22">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <strong class="text-base">🌐 Strategic Problem-Solving and
              Collaboration:</strong>
            <ul
              class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
              <li class="mr-4">
                Led strategic calls and meetings, collaborating
                across departments to streamline processes and
                resolve challenges.
              </li>
              <li class="mr-4">
                Actively engaged with other departments,
                contributing to the bank's success through
                effective
                <strong>problem-solving</strong>.
              </li>
              <li class="mr-4">
                Contributed to a <strong>10%</strong> growth in
                the net loan portfolio, totaling L 40,451 MM
                (about US$1.6 billion) by the end of 2019.
              </li>

              <li class="mr-4">
                Supported the bank in maintaining a robust
                financial position, reflected in a 16.4% return on
                average equity (ROAE) in 2019, ensuring sustained
                profitability.
              </li>
            </ul>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-222">
          <button type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-222" aria-expanded="false"
            aria-controls="accordion-collapse-body-222">
            <span>💼 Project Showcase - Work Order Management
              System:</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-222" class="hidden" aria-labelledby="accordion-collapse-heading-222">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <ul
              class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
              <li class="mr-4">
                Spearheaded the development of a comprehensive
                Work Order Management System to track the entire
                software development process.
              </li>
              <li class="mr-4">
                Frontend Development:
                <strong>.NET, WebForms, ASP.NET,Bootstrap, CSS,
                  JavaScript.
                </strong>
              </li>
              <li class="mr-4">
                Backend Development: C# as the primary backend
                language, implementing Entity Framework DataFirst.
              </li>
              <li class="mr-4">
                Database Integration: Utilized
                <strong>MSSQL</strong>, creating queries and
                stored procedures.
              </li>
              <li class="mr-4">
                Data Migration: Integrated data from
                <strong>AS400 to MSSQL</strong>, enhancing data
                accessibility and retrieval.
              </li>
              <li class="mr-4">
                Methodology: Implemented the cascade method for
                streamlined software development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>

    <li class="pt-2 mb-5">
      <p class="flex justify-between text-xs">
        <strong class="text-lg"> San Services</strong>
        <span
          class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">2021</span>
      </p>
      <p class="flex justify-between text-base">
        Lucee/Coldfusion Software Developer
      </p>

      <div id="job3"></div>
    </li>

    <script>
      let jobFunctionz = [
        {
          role: "💻 Technological Mastery and Environment Setup:",
          list: [
            "Acquired expertise in ColdFusion and Lucee (open-source version) through extensive self-learning.",
            "Orchestrated environment setups using SVN for version control, Beanstalk for change visualization, and SmartSVN for deployment.",
            "Managed repositories and tools like CommandBox and Nginx to configure servers and various instances.",
          ],
        },

        {
          role: "🌍 System Deployment and Maintenance:",
          list: [
            "Configured projects to run by granting network permissions via VPN and opening required ports for system functionality.",
            "Analyzed entire systems and codebase, ensuring smooth running of systems with branches for testing, staging, and production.",
            "Resolved conflicts, debugged, and addressed bugs in these systems, particularly in the legacy booking engine supporting public sites like sandals.com, beaches.com, taportal.sandals.com, news.beaches.com, and news.sandals.com.",
            "Developed backend services using Java, ColdFusion, and Lucee, ensuring the upkeep of the booking engine, and collaborated with DBA teams for database-related tasks.",
          ],
        },
        {
          role: "🚧 Infrastructure Oversight and Troubleshooting:",
          list: [
            "Investigated and resolved infrastructure issues, assigning tasks to SysAdmin or infrastructure developers when necessary.",
            "Integrated Java code into microservices, fixing and updating tools that had become obsolete.",
            "Collaborated closely with all developers in Honduras and India, understanding requirements from a Rapid Application Development (RAD) perspective, ensuring product owner satisfaction",
          ],
        },
        {
          role: "📈 Achievements and Project Management:",
          list: [
            "Successfully migrated a substantial portion of jQuery to pure JavaScript in the frontend.",
            "Created multiple modules in the booking engine, resolved conflicts in public and private systems related to database configuration, backend, frontend, and infrastructure.",
            "Tracked work progress using Jira and ServiceNow, maintaining a structured approach in collaboration with the India-based development team.",
            "Implemented metrics and weekly reporting in Microsoft Teams to meet set objectives.",
          ],
        },
        {
          role: "🎨 Interface Modernization and Functional Enhancements:",
          list: [
            "Proactively modernized graphical interfaces by applying CSS and design frameworks, anticipating the need for improved interactivity and notifications.",
            "Proactively developed and deployed various modules, including features like automated email notifications, document-based registration status management for travel agencies, document upload/download functionalities, password restoration, and extensive testing and deployment procedures.",
          ],
        },
        {
          role: "🌟 Proactive Strategic Impact and Innovation:",
          list: [
            "Significantly contributed to the modernization and enhancement of systems, showcasing adaptability, problem-solving skills, and a proactive commitment to achieving project goals.",
            "Leveraged strong communication and collaboration skills to work seamlessly with global teams, applying proactive planning to meet the dynamic needs of the projects.",
          ],
        },
      ];
      let acordeon = () => {
        let accordeonContainer = (jobChildren) =>
          `<div id="accordion-collapse22" data-accordion="collapse">${jobChildren}</div>`;

        let ItemList = (list) => {
          let ul = (
            compressedList
          ) => `<ul class="pl-4 mt-1 space-y-1 list-disc list-inside text-justify text-sm text-gray-800 dark:text-gray-400">
                                      ${compressedList}
                              </ul>`;

          let li = list
            .map((item, index) => `<li class='mr-4'>${item}</li>`)
            .join("");

          let output = ul(li);
          return output;
        };

        let uix = crypto.randomUUID();
        let jobContent = (title, id, itemList) => {
          const uniqueId = uix + id;
          let class1 =
            "flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3";
          let class2 =
            "flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3";

          let isNotTheFirstItem = id === 0 ? class1 : class2;
          const template = `<h2 id="accordion-collapse-heading-${uniqueId}">
                                  <button type="button"
                                      class="${isNotTheFirstItem}"
                                      data-accordion-target="#accordion-collapse-body-${uniqueId}" aria-expanded="false"
                                      aria-controls="accordion-collapse-body-${uniqueId}">
                                      <span>${title}:</span>
                                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0"
                                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                          viewBox="0 0 10 6">
                                          <path stroke="currentColor" stroke-linecap="round"
                                              stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                      </svg>
                                  </button>
                              </h2>
                              <div id="accordion-collapse-body-${uniqueId}" class="hidden"
                                  aria-labelledby="accordion-collapse-heading-${uniqueId}">
                                  <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                      ${ItemList(itemList)}
                                  </div>
                              </div>`;
          return template;
        };

        let p = jobFunctionz
          .map((item, index) => {
            let newContent = jobContent(
              item.role,
              index,
              item.list
            );
            return newContent;
          })
          .join("");

        return accordeonContainer(p);
      };
      let san = document.querySelector("#job3");
      san.innerHTML = acordeon();
    </script>
  </ul>
</section>

<section class="container mx-auto px-4">
  <!-- projects -->
  <h2 class="text-3xl mt-6 pb-2 border-b font-semibold text-gray-800">
    Projects
  </h2>

  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    <li class="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition duration-500">
      <div class="aspect-w-16 aspect-h-1 relative">
        <img src="chatbot.jpg" alt="Chatbot"
          class="object-cover object-center absolute inset-0 filter blur-sm mx-auto rounded-lg" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div class="absolute inset-0 ring-4 ring-blue-600 ring-offset-4 ring-offset-gray-100"></div>
        <!-- Add this div for the water drop effect -->
        <div class="absolute inset-0 animate-drop opacity-50 scale-150">
          <img src="water-drop.png" alt="Water drop" class="object-cover object-center absolute inset-0" />
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between my-0 z-">
          <strong>Chatbot</strong>
        </div>
        <ul class="flex mb-2">
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Live</a>
          </li>
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Code</a>
          </li>
        </ul>
        <p class="text-base md:text-base text-gray-700">
          Un chatbot que tiene la capacidad de platicar con mis
          clientes potenciales
        </p>
        <p class="flex mb-2">
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
        </p>
      </div>
    </li>
    <li class="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out">
      <div class="aspect-w-16 aspect-h-9 relative">
        <img src="eshopping.jpg" alt="EShopping App"
          class="object-cover object-center absolute inset-0 filter blur-sm mx-auto rounded-lg" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div class="absolute inset-0 ring-4 ring-blue-600 ring-offset-4 ring-offset-gray-100"></div>
        <!-- Add this div for the water drop effect -->
        <div class="absolute inset-0 animate-drop opacity-50 scale-150">
          <img src="water-drop.png" alt="Water drop" class="object-cover object-center absolute inset-0" />
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between my-1 -z-50" style="z-index: -9999">
          <strong>EShopping App</strong>
        </div>
        <ul class="flex mb-2">
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Live</a>
          </li>
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Code</a>
          </li>
        </ul>
        <p class="text-base md:text-base text-gray-700">
          Una aplicación de delivery con microservicios.
        </p>
        <p class="flex mt-2">
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
        </p>
      </div>
    </li>
  </ul>
</section>

<section class="pr-3 pl-3">
  <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
    Education
  </h2>
  <ul class="mt-2">
    <li class="pt-2">
      <p class="flex justify-between text-sm">
        <strong class="text-base">
          Universidad Autonoma de Honduras </strong>2022-2019
      </p>
      <p class="flex justify-between text-sm">
        Computer Science, Agronomic Engineering<small>GPA 4.0</small>
      </p>
    </li>
    <li class="pt-2">
      <p class="flex justify-between text-sm">
        <strong class="text-base">
          Universidad Tecnologica de Honduras </strong>2022-2019
      </p>
      <p class="flex justify-between text-sm">
        Computing Engineering<small>GPA 3.8</small>
      </p>
    </li>
  </ul>
</section>
</div>`