const genName = document.getElementById("generate-name");
const maleNameList = [
        "Liam",
        "Noah",
        "Oliver",
        "Theodore",
        "Henry",
        "James",
        "Elijah",
        "Mateo",
        "William",
        "Lucas",
        "Benjamin",
        "Levi",
        "Elias",
        "Luca",
        "Jack",
        "Sebastian",
        "Hudson",
        "Samuel",
        "Leo",
        "Ezra",
        "Michael",
        "Daniel",
        "John",
        "Ethan",
        "Julian"
];
const maleName = document.getElementById("male-name");

const femaleNameList = [
        "Olivia",
        "Emma",
        "Charlotte",
        "Amelia",
        "Sophia",
        "Mia",
        "Isabella",
        "Ava",
        "Evelyn",
        "Luna",
        "Harper",
        "Sofia",
        "Camila",
        "Eleanor",
        "Elizabeth",
        "Violet",
        "Scarlett",
        "Emily",
        "Hazel",
        "Lily",
        "Gianna",
        "Aurora",
        "Elena",
        "Aria",
        "Nova"
];
const femaleName = document.getElementById("female-name");

function generateName() {
        maleName.textContent = maleNameList[Math.floor(Math.random() * maleNameList.length)];
        femaleName.textContent = femaleNameList[Math.floor(Math.random() * femaleNameList.length)];
}

genName.addEventListener("click", generateName);