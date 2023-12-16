const skills = () =>{
    const template = `<strong class="text-xl font-medium text-center">Skills</strong>
    <ul class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-0"
      id="SkillLizt"></ul>`

      return template;
}

document.querySelector('#mySkills').innerHTML = skills();

let w = "text-white bold",
b = "text-black bold";
let a = [
{ c: "bg-gray-50", t: b },
{ c: "bg-gray-100", t: b },
{ c: "bg-gray-200", t: b },
{ c: "bg-gray-300", t: b },
{ c: "bg-gray-400", t: b },
{ c: "bg-gray-500", t: b },
{ c: "bg-gray-600", t: w },
{ c: "bg-gray-700", t: w },
{ c: "bg-gray-800", t: w },
{ c: "bg-gray-900", t: w },
{ c: "bg-red-50", t: w },
{ c: "bg-red-100", t: w },
{ c: "bg-red-200", t: w },
{ c: "bg-red-300", t: w },
{ c: "bg-red-400", t: w },
{ c: "bg-red-500", t: w },
{ c: "bg-red-600", t: w },
{ c: "bg-red-700", t: w },
{ c: "bg-red-800", t: w },
{ c: "bg-red-900", t: w },
{ c: "bg-yellow-50", t: b },
{ c: "bg-yellow-100", t: b },
{ c: "bg-yellow-200", t: b },
{ c: "bg-yellow-300", t: b },
{ c: "bg-yellow-400", t: b },
{ c: "bg-yellow-500", t: b },
{ c: "bg-yellow-600", t: b },
{ c: "bg-yellow-700", t: b },
{ c: "bg-yellow-800", t: b },
{ c: "bg-yellow-900", t: b },
{ c: "bg-green-50", t: b },
{ c: "bg-green-100", t: b },
{ c: "bg-green-200", t: b },
{ c: "bg-green-300", t: b },
{ c: "bg-green-400", t: b },
{ c: "bg-green-500", t: b },
{ c: "bg-green-600", t: w },
{ c: "bg-green-700", t: w },
{ c: "bg-green-800", t: w },
{ c: "bg-green-900", t: w },
{ c: "bg-blue-50", t: b },
{ c: "bg-blue-100", t: b },
{ c: "bg-blue-200", t: b },
{ c: "bg-blue-300", t: b },
{ c: "bg-blue-400", t: b },
{ c: "bg-blue-500", t: w },
{ c: "bg-blue-600", t: w },
{ c: "bg-blue-700", t: w },
{ c: "bg-blue-800", t: w },
{ c: "bg-blue-900", t: w },
{ c: "bg-indigo-50", t: b },
{ c: "bg-indigo-100", t: b },
{ c: "bg-indigo-200", t: b },
{ c: "bg-indigo-300", t: b },
{ c: "bg-indigo-400", t: b },
{ c: "bg-indigo-500", t: w },
{ c: "bg-indigo-600", t: w },
{ c: "bg-indigo-700", t: w },
{ c: "bg-indigo-800", t: w },
{ c: "bg-indigo-900", t: w },
{ c: "bg-purple-50", t: b },
{ c: "bg-purple-100", t: b },
{ c: "bg-purple-200", t: b },
{ c: "bg-purple-300", t: b },
{ c: "bg-purple-400", t: b },
{ c: "bg-purple-500", t: w },
{ c: "bg-purple-600", t: w },
{ c: "bg-purple-700", t: w },
{ c: "bg-purple-800", t: w },
{ c: "bg-purple-900", t: w },
{ c: "bg-pink-50", t: b },
{ c: "bg-pink-100", t: b },
{ c: "bg-pink-200", t: b },
{ c: "bg-pink-300", t: b },
{ c: "bg-pink-400", t: b },
{ c: "bg-pink-500", t: w },
{ c: "bg-pink-600", t: w },
{ c: "bg-pink-700", t: w },
{ c: "bg-pink-800", t: w },
{ c: "bg-pink-900", t: w },
];

let onlyColors = a.filter(
(a) => Number(a.c.match(/\d+$/)[0]) >= 400
);

function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

const shuffledArray = shuffleArray(onlyColors);

let index = 0;

function getNextNonRepeatingValue() {
if (index >= shuffledArray.length) {
  shuffleArray(shuffledArray);
  index = 0;
}
const value = shuffledArray[index];
index++;
return value;
}

const skillz = [
{ name: "C#", color: getNextNonRepeatingValue() },
{ name: "Go", color: getNextNonRepeatingValue() },
{ name: "Java", color: getNextNonRepeatingValue() },
{ name: "JS", color: getNextNonRepeatingValue() },
{ name: "Coldfusion", color: getNextNonRepeatingValue() },
{ name: "PHP", color: getNextNonRepeatingValue() },
{ name: "Python", color: getNextNonRepeatingValue() },
{ name: "C++", color: getNextNonRepeatingValue() },
{ name: ".NET Core", color: getNextNonRepeatingValue() },
{ name: ".NET", color: getNextNonRepeatingValue() },
{ name: "NodeJS", color: getNextNonRepeatingValue() },
{ name: "Deno", color: getNextNonRepeatingValue() },
{ name: "MSSQL", color: getNextNonRepeatingValue() },
{ name: "DynamoDB", color: getNextNonRepeatingValue() },
{ name: "MySQL", color: getNextNonRepeatingValue() },
{ name: "Oracle", color: getNextNonRepeatingValue() },
{ name: "MariaDB", color: getNextNonRepeatingValue() },

{ name: "PostgreSQL", color: getNextNonRepeatingValue() },
{ name: "Supabase", color: getNextNonRepeatingValue() },
{ name: "Redis", color: getNextNonRepeatingValue() },
{ name: "sqlite", color: getNextNonRepeatingValue() },
{ name: "couchbase", color: getNextNonRepeatingValue() },
{ name: "GraphQL", color: getNextNonRepeatingValue() },
{ name: "MongoDB", color: getNextNonRepeatingValue() },

{ name: "GIT", color: getNextNonRepeatingValue() },
{ name: "SVN", color: getNextNonRepeatingValue() },
{ name: "TFS", color: getNextNonRepeatingValue() },
{ name: "Github", color: getNextNonRepeatingValue() },
{ name: "Gitlab", color: getNextNonRepeatingValue() },
{ name: "beanstalk", color: getNextNonRepeatingValue() },
{ name: "Docker", color: getNextNonRepeatingValue() },
,
{ name: "podman", color: getNextNonRepeatingValue() },
,
{ name: "Kubernetes", color: getNextNonRepeatingValue() },
{ name: "AWS", color: getNextNonRepeatingValue() },
{ name: "Linux", color: getNextNonRepeatingValue() },
{ name: "VMs", color: getNextNonRepeatingValue() },
{ name: "Shell/Bash", color: getNextNonRepeatingValue() },
];

let generateSkillList = (_skills) => {
let liz = _skills
  .map((item, key) => {
    const { name, color } = item;
    const li = `<li class="inline-block ${color.c} ${color.t} text-center" id="my${key}">
    ${name}
  </li>`;

    return li;
  })
  .join("");

return liz;
};

const skillList = document.querySelector("#SkillLizt");
skillList.innerHTML = generateSkillList(skillz);

const skillzz = document.querySelectorAll("#SkillLizt li");

setInterval(() => {
skillzz.forEach((el, key) => {
  let newColor = getNextNonRepeatingValue();
  el.className = `${newColor.c} ${newColor.t}`;

});
}, 2000);