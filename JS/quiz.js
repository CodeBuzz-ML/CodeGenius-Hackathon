var questions = [
  {
    question: "1. What is one way to prevent wildfires from starting?",
    answer: "C) Properly disposing of cigarettes",
    options: [
      "A) Lighting campfires in windy conditions",
      "B) Leaving a grill unattended while cooking",
      "C) Properly disposing of cigarettes",
      "D) Storing flammable materials near heat sources",
    ],
  },
  {
    question: "2. Which weather condition can increase the risk of wildfires?",
    answer: "D) High winds",
    options: [
      "A) Heavy rainfall",
      "B) Fog",
      "C) Low humidity",
      "D) High winds",
    ],
  },
  {
    question:
      "3. What is the term for the practice of clearing vegetation to create a barrier against wildfires?",
    answer: "A) Defensible space",
    options: [
      "A) Defensible space",
      "B) Controlled burn",
      "C) Ignition source",
      "D) Firebreak",
    ],
  },
  {
    question:
      "4. Which of the following can contribute to the spread of wildfires?",
    answer: "B) Dry vegetation",
    options: [
      "A) Rainy weather",
      "B) Dry vegetation",
      "C) High humidity",
      "D) Low temperatures",
    ],
  },
  {
    question: "5. What is a common human cause of wildfires?",
    answer: "C) Unattended campfires",
    options: [
      "A) Controlled burns",
      "B) Lightning strikes",
      "C) Unattended campfires",
      "D) Natural gas leaks",
    ],
  },
  {
    question:
      "6. Which of the following is a natural factor that can contribute to wildfires?",
    answer: "B) Lightning strikes",
    options: [
      "A) Fireworks",
      "B) Lightning strikes",
      "C) Cigarette butts",
      "D) Electrical malfunctions",
    ],
  },
  {
    question:
      "7. What is the term for the practice of intentionally setting fires to remove excess vegetation?",
    answer: "B) Controlled burn",
    options: [
      "A) Wildfire suppression",
      "B) Controlled burn",
      "C) Arson",
      "D) Firebreak",
    ],
  },
  {
    question:
      "8. Which of the following can help reduce the risk of wildfires in residential areas?",
    answer: "D) Using fire-resistant building materials",
    options: [
      "A) Storing firewood next to the house",
      "B) Planting highly flammable vegetation near structures",
      "C) Ignoring local fire codes",
      "D) Using fire-resistant building materials",
    ],
  },
  {
    question: "9. What is a potential consequence of wildfires?",
    answer: "A) Loss of life",
    options: [
      "A) Loss of life",
      "B) Increased rainfall",
      "C) Enhanced biodiversity",
      "D) Improved air quality",
    ],
  },
  {
    question: "10. What is a long-term environmental impact of wildfires?",
    answer: "C) Habitat destruction",
    options: [
      "A) Soil enrichment",
      "B) Reduced erosion",
      "C) Habitat destruction",
      "D) Increased vegetation growth",
    ],
  },
  {
    question:
      "11. Which gas released during wildfires can contribute to air pollution?",
    answer: "A) Carbon dioxide",
    options: ["A) Carbon dioxide", "B) Oxygen", "C) Nitrogen", "D) Hydrogen"],
  },
  {
    question: "12. What can wildfires lead to in terms of water quality?",
    answer: "B) Pollution of waterways",
    options: [
      "A) Increase in freshwater supply",
      "B) Pollution of waterways",
      "C) Enhanced aquatic habitat",
      "D) Decrease in sedimentation",
    ],
  },
  {
    question: "13. Which ecosystem service can be compromised by wildfires?",
    answer: "D) Soil stabilization",
    options: [
      "A) Carbon sequestration",
      "B) Air purification",
      "C) Water desalination",
      "D) Soil stabilization",
    ],
  },
  {
    question: "14. What is a potential economic impact of wildfires?",
    answer: "C) Decreased tourism revenue",
    options: [
      "A) Increased property values",
      "B) Boosted local economies",
      "C) Decreased tourism revenue",
      "D) Reduced insurance premiums",
    ],
  },
  {
    question: "15. Which factor can contribute to the intensity of wildfires?",
    answer: "B) Drought conditions",
    options: [
      "A) Regular rainfall",
      "B) Drought conditions",
      "C) Cool temperatures",
      "D) High humidity",
    ],
  },
  {
    question: "16. What is a method used to detect and monitor wildfires?",
    answer: "A) Satellite imagery",
    options: [
      "A) Satellite imagery",
      "B) Fireworks",
      "C) Barbecue smoke",
      "D) Thunderstorms",
    ],
  },
  {
    question:
      "17. What is a strategy for mitigating the impact of wildfires on communities?",
    answer: "C) Emergency evacuation planning",
    options: [
      "A) Building more flammable structures",
      "B) Ignoring fire safety regulations",
      "C) Emergency evacuation planning",
      "D) Encouraging arson",
    ],
  },
  {
    question: "18. What is a potential health risk associated with wildfires?",
    answer: "B) Respiratory problems",
    options: [
      "A) Increased physical fitness",
      "B) Respiratory problems",
      "C) Improved air quality",
      "D) Enhanced immune function",
    ],
  },
  {
    question: "19. Which action can help reduce the spread of wildfires?",
    answer: "D) Creating firebreaks",
    options: [
      "A) Increasing vegetation density",
      "B) Encouraging arson",
      "C) Storing flammable materials outdoors",
      "D) Creating firebreaks",
    ],
  },
  {
    question:
      "20. What is a factor that can contribute to the difficulty of fighting wildfires?",
    answer: "A) Steep terrain",
    options: [
      "A) Steep terrain",
      "B) Abundant water sources",
      "C) Mild winds",
      "D) Dense fog",
    ],
  },
];
questions_temp = {
  question: "",
  answer: "",
  options: "",
};

var quizHeader = document.getElementById("quizHeader");
var quizBody = document.getElementById("quizBody");
var qNum = 0;
var answers = []; //array to show the correct answers and false ones
var minutes = 0;
var seconds = 0;
var formattedMinutes = 0;
var formattedSeconds = 0;
var interval = 0;

function startQuiz() {
  document.getElementById("mainBody").style.display = "flex";
  document.getElementById("startBtn").style.display = "none";

  appendQuestion();
  interval = setInterval(function () {
    if (seconds < 59) seconds++;
    else {
      seconds = 0;
      if (minutes < 59) minutes++;
      else {
        minutes = 0;
        clearInterval(interval);
      }
    }
    formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById(
      "timer"
    ).innerHTML = `${formattedMinutes}:${formattedSeconds}`;
  }, 1000);
}
function appendQuestion() {
  quizHeader.innerHTML = `<h3 class='quizHeader'>Q${qNum + 1}/${
    questions.length
  }</h3><span id='timer'${minutes}:${seconds}</span>`;
  var divBody = `<h3 class='quizHeader'>Q: ${questions[qNum].question}</h3>`;
  divBody += "<ul class='option_group' id='option_group'>";
  for (var i = 0; i < questions[qNum].options.length; i++)
    divBody += `<li class='option' onclick='activeOpt(this)'>${questions[qNum].options[i]}</li>`;
  divBody += "</ul>";
  divBody +=
    "<button class='btn btn-primary nxtBtn' onclick='nxtQuestion()'>Next question</button>";
  quizBody.innerHTML = divBody;
}
function activeOpt(id) {
  var ul = document.getElementById("option_group");
  for (var i = 0; i < questions[qNum].options.length; i++) {
    if (ul.childNodes[i].className === "active")
      ul.childNodes[i].classList.remove("active");
    ul.childNodes[i].className = "option";
  }
  id.className = "active";
  if (id.innerHTML === questions[qNum].answer) answers[qNum] = true;
  else answers[qNum] = false;
}
function nxtQuestion() {
  if (!(typeof answers[qNum] === "undefined")) {
    if (qNum < questions.length - 1) {
      qNum++;
      appendQuestion();
    } else {
      qNum = 0;
      appendResult();
    }
  } else alert("please select an option");
}
function appendResult() {
  var correctQuestions = 0; // number of questions that were answered correctly
  document.getElementById("exitBtn").style.display = "none";
  clearInterval(interval);
  quizHeader.innerHTML = "<h3>Result</h3>";
  quizHeader.style.justifyContent = "center";
  var divBody = "";
  // for(var i=0; i<questions.length; i++) divBody += `<th>Q${i+1}</th>`
  divBody += "</thead><tbody>";
  for (var i = 0; i < questions.length; i++) {
    if (answers[i]) {
      divBody +=
        "<td><img style='width:20px; margin:5px; align-self: center;' src='./GRAPHICS/check.png'></td>";
      correctQuestions++;
    } else
      divBody +=
        "<td><img style='width:20px; margin:5px;'  src='./GRAPHICS/cancel.png'></td>";
  }

  divBody += "</tbody></table>";

  divBody += "<Table class='table table-bordered'><thead class='thead-dark'>";
  divBody += "<th>Points</th>";
  divBody += "<th>Percentage</th>";
  divBody += "<th>Time Taken (mm:ss)</th>";
  divBody += "</thead></tbody>";
  divBody += `<td>${correctQuestions}/${questions.length}</td>`;
  divBody += `<td>${(correctQuestions / questions.length) * 100}%</td>`;
  divBody += `<td>${formattedMinutes}:${formattedSeconds}</td>`;
  divBody += "</tbody></table>";

  divBody +=
    '<button class="btn btn-primary" onclick=history.go(-2)>Return Home</button>';
  quizBody.innerHTML = divBody;
}
