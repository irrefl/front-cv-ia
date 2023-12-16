let job1 = [
    {
      role: "🚀 Outstanding Contributions:",
      list: [
        "Actively collaborated in the design and development of internal projects during the training phase at Caracol University.",
        "Expert application of key technologies: Team Foundation, Visual Studio, SQL Server, C#, Web APIs (ServiceStack and WCF), Silverlight, and WPF."
      ]
    },
    {
      role: "🔄 Strategic Involvement in Technological Migration",
      list: [
        "Contributed to the technological migration process, applying Scrum, DDD, TDD, and BDD in interdisciplinary meetings for efficient execution and exhaustive testing."
      ]
    },
    {
      role: "🤝 Deep Collaboration with the Team & Software Architect",
      list: [
        "Worked closely with the software architect and the team, applying agile principles.",
        "Ensured code quality before deployment, guided by test-driven development (TDD)."
      ]
    },
    {
      role: "💡 Comprehensive Mastery of Web APIs and Design Patterns",
      list: [
        "Developed and understood the implementation of Web APIs using design patterns, including SOLID and others.",
        "Managed various implementation aspects, from the frontend with Silverlight to databases with SQL Server."
      ]
    }
  ];

  let job2 = [
    {
      role: "🌐 Strategic Problem-Solving and Collaboration:",
      list: [
        "Led strategic calls and meetings, collaborating across departments to streamline processes and resolve challenges.",
        "Actively engaged with other departments, contributing to the bank's success through effective problem-solving.",
        "Contributed to a 10% growth in the net loan portfolio, totaling L 40,451 MM (about US$1.6 billion) by the end of 2019.",
        "Supported the bank in maintaining a robust financial position, reflected in a 16.4% return on average equity (ROAE) in 2019, ensuring sustained profitability."
      ],

    },
    {
      role: "📊 Project Showcase - Work Order Management System",
      list: [
        "Spearheaded the development of a comprehensive Work Order Management System to track the entire software development process.",
        "Frontend Development: .NET, WebForms, ASP.NET,Bootstrap, CSS, JavaScript.",
        "Backend Development: C# as the primary backend language, implementing Entity Framework DataFirst.",
        "Data Migration: Integrated data from AS400 to MSSQL, enhancing data accessibility and retrieval.",
        "Database Integration: Utilized MSSQL, creating queries and stored procedures.",
        "Methodology: Implemented the cascade method for streamlined software development."
      ]
    }
  ]

  let job3 = [
    {
      role: "🌐 Technological Mastery and Environment Setup:",
      list: [
        "🚀 Acquired expertise in ColdFusion and Lucee (open-source version) through extensive self-learning.",
        "🔄 Orchestrated environment setups using SVN for version control, Beanstalk for change visualization, and SmartSVN for deployment.",
        "🛠️ Managed repositories and tools like CommandBox and Nginx to configure servers and various instances."
      ]
    },
    {
      role: "🌍 System Deployment and Maintenance:",
      list: [
        "🌐 Configured projects to run by granting network permissions via VPN and opening required ports for system functionality.",
        "🕵️ Analyzed entire systems and codebase, ensuring smooth running of systems with branches for testing, staging, and production.",
        "🐞 Resolved conflicts, debugged, and addressed bugs in these systems, particularly in the legacy booking engine supporting public sites like sandals.com, beaches.com, taportal.sandals.com, news.beaches.com, and news.sandals.com.",
        "💻 Developed backend services using Java, ColdFusion, and Lucee, ensuring the upkeep of the booking engine, and collaborated with DBA teams for database-related tasks."
      ]
    },
    {
      role: "🚧 Infrastructure Oversight and Troubleshooting:",
      list: [
        "🛠️ Investigated and resolved infrastructure issues, assigning tasks to SysAdmin or infrastructure developers when necessary.",
        "🔄 Integrated Java code into microservices, fixing and updating tools that had become obsolete.",
        "🌐 Collaborated closely with all developers in Honduras and India, understanding requirements from a Rapid Application Development (RAD) perspective, ensuring product owner satisfaction."
      ]
    },
    {
      role: "📈 Achievements and Project Management:",
      list: [
        "🔄 Successfully migrated a substantial portion of jQuery to pure JavaScript in the frontend.",
        "🛠️ Created multiple modules in the booking engine, resolved conflicts in public and private systems related to database configuration, backend, frontend, and infrastructure.",
        "📊 Tracked work progress using Jira and ServiceNow, maintaining a structured approach in collaboration with the India-based development team.",
        "🎯 Implemented metrics and weekly reporting in Microsoft Teams to meet set objectives."
      ]
    },
    {
      role: "🎨 Interface Modernization and Functional Enhancements:",
      list: [
        "🔄 Proactively modernized graphical interfaces by applying CSS and design frameworks, anticipating the need for improved interactivity and notifications.",
        "🚀 Proactively developed and deployed various modules, including features like automated email notifications, document-based registration status management for travel agencies, document upload/download functionalities, password restoration, and extensive testing and deployment procedures."
      ]
    },
    {
      role: "🌟 Proactive Strategic Impact and Innovation:",
      list: [
        "🚀 Significantly contributed to the modernization and enhancement of systems, showcasing adaptability, problem-solving skills, and a proactive commitment to achieving project goals.",
        "🌐 Leveraged strong communication and collaboration skills to work seamlessly with global teams, applying proactive planning to meet the dynamic needs of the projects."
      ]
    }
  ];

const workExperience = () => {
    const template = `<h2 class="text-2xl mt-6 pb-1 border-b font-semibold">
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

      <div id="job1"></div>
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

      <div id="job2">

      </div>
    </li>

    <li class="pt-2 mb-5">
      <p class="flex justify-between text-xs">
        <strong class="text-lg">Unique Vacations</strong>
        <span
          class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">2021</span>
      </p>
      <p class="flex justify-between text-base">
        Lucee/Coldfusion Software Developer
      </p>

      <div id="job3"></div>
    </li>

  </ul>`
    return template;
}

document.querySelector('#workExperience').innerHTML = workExperience();

const createAcordeon = (jobFuncs) => {
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
                          <span>${title}</span>
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

    let lis = jobFuncs
      .map((item, index) => {
        let newContent = jobContent(
          item.role,
          index,
          item.list
        );
        return newContent;
      })
      .join("");

    return accordeonContainer(lis);
  };

  document.querySelector('#job1').innerHTML = createAcordeon(job1)
  document.querySelector('#job2').innerHTML = createAcordeon(job2)
  document.querySelector("#job3").innerHTML = createAcordeon(job3);