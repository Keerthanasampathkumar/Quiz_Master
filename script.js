function calculateScore(callback) {
    const userAnswers = {
      q1: document.getElementById("q1").value.trim(),
      q2: document.getElementById("q2").value.trim(),
      q3: document.getElementById("q3").value.trim()
    };
  
    const correctAnswers = {
      q1: "4",
      q2: "newdhelhi",
      q3: "Blue"
    };
  
    const score = callback(userAnswers, correctAnswers);
    document.getElementById("scoreDisplay").innerText = `Your score: ${score}/3`;
  }
  
  function strictScoring(user, correct) {
    let score = 0;
    for (let key in user) {
      if (user[key] === correct[key]) score++;
    }
    return score;
  }
  
  function lenientScoring(user, correct) {
    let score = 0;
    for (let key in user) {
      if (user[key].toLowerCase() === correct[key].toLowerCase()) score++;
    }
    return score;
  }
  
  document.getElementById("checkScoreBtn").addEventListener("click", () => {
    calculateScore(lenientScoring);
  });
  
