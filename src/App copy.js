import React, { useState, useEffect } from 'react';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  SunIcon
} from '@heroicons/react/24/outline';

const EnhancedInsightsQuiz = () => {
  // const [currentScreen, setCurrentScreen] = useState('login'); // login, landing, learn, quiz, results
  // const [username, setUsername] = useState('');
  
  const [quizData, setQuizData] = useState({ 
    easy: [
      {
        text: "Let's get straight to the point. I think we need to make a decision now and move forward quickly. Time is money, and we can't afford to waste it.",
        color: "Fiery Red",
        explanation: "This statement shows directness, focus on quick decision-making, and efficiency - all classic Fiery Red traits."
      },
      {
        text: "I'm excited about this new opportunity! Let's get everyone involved and brainstorm some creative ideas. This could be really fun and energizing for the whole team!",
        color: "Sunshine Yellow",
        explanation: "The enthusiasm, focus on involvement, creativity, and fun reflect typical Sunshine Yellow energy."
      },
      {
        text: "I think we should take our time with this decision and make sure everyone's concerns are addressed. How does this affect the team's wellbeing?",
        color: "Earth Green",
        explanation: "Caring about others' concerns, focusing on wellbeing, and taking time for consensus are Earth Green characteristics."
      },
      {
        text: "Before we proceed, I'd like to analyze all the data and consider every possible outcome. We need to be methodical and ensure our approach is accurate and logical.",
        color: "Cool Blue",
        explanation: "The desire for analysis, methodical approach, and focus on accuracy and logic are strong Cool Blue traits."
      }
    ],
    medium: [
      {
        text: "This deadline is non-negotiable. We need results by the end of the day, and I expect everyone to prioritize this task above all else.",
        color: "Fiery Red",
        explanation: "The focus on deadlines, results, and direct expectations are distinctive Fiery Red characteristics."
      },
      {
        text: "What if we tried something completely different? I know it sounds wild, but imagine the possibilities! Let's not be afraid to shake things up!",
        color: "Sunshine Yellow",
        explanation: "The focus on novelty, possibilities, and enthusiasm for change are hallmarks of Sunshine Yellow energy."
      },
      {
        text: "I appreciate everyone's input on this matter. Let's make sure we're creating a solution that works for the entire team and maintains our positive work environment.",
        color: "Earth Green",
        explanation: "Valuing input from everyone, focusing on team harmony, and maintaining a positive environment reflect Earth Green values."
      },
      {
        text: "I've prepared a detailed report with my findings and recommendations based on extensive research. I'd like to walk through each point systematically.",
        color: "Cool Blue",
        explanation: "The preparation of detailed reports, systematic approach, and extensive research are typical Cool Blue behaviors."
      }
    ],
    hard: [
      {
        text: "We need to focus on our objectives and stop getting distracted by side issues. What's the bottom line here?",
        color: "Fiery Red",
        explanation: "The emphasis on focus, objectives, and getting to the bottom line demonstrates Fiery Red's result-oriented approach."
      },
      {
        text: "Let's network with other departments and get more perspectives! I bet there are connections we haven't thought of yet!",
        color: "Sunshine Yellow",
        explanation: "The emphasis on networking, seeking diverse perspectives, and making connections shows Sunshine Yellow's interactive approach."
      },
      {
        text: "I'd like to check in with everyone individually to make sure we're all on the same page before finalizing this project plan.",
        color: "Earth Green",
        explanation: "Taking time to check in with people individually and ensuring group consensus before moving forward are Earth Green traits."
      },
      {
        text: "I need more time to review the specifications and verify that all parameters have been properly defined before committing to this timeline.",
        color: "Cool Blue",
        explanation: "The need for thorough review, verification, and proper definition of parameters reflect Cool Blue's analytical nature."
      }
    ],
    mixed: [
      {
        text: "We need to make this decision quickly, but let's make sure everyone has a chance to voice their concerns first.",
        primaryColor: "Fiery Red",
        secondaryColor: "Earth Green",
        explanation: "This combines Fiery Red's urgency with Earth Green's concern for everyone's input and feelings."
      },
      {
        text: "I'm excited about this innovative approach, but I'd like to see the data that supports its effectiveness.",
        primaryColor: "Sunshine Yellow",
        secondaryColor: "Cool Blue",
        explanation: "The enthusiasm for innovation is Sunshine Yellow, while the need for supporting data is Cool Blue."
      },
      {
        text: "Let's analyze all the options carefully, and then make a swift decision once we have the facts.",
        primaryColor: "Cool Blue",
        secondaryColor: "Fiery Red",
        explanation: "The careful analysis is Cool Blue, while the push for swift action once information is gathered is Fiery Red."
      },
      {
        text: "I want to create an energizing team experience, but we need to ensure everyone feels comfortable with the direction we're taking.",
        primaryColor: "Sunshine Yellow",
        secondaryColor: "Earth Green",
        explanation: "The focus on energy and excitement is Sunshine Yellow, while ensuring everyone's comfort is Earth Green."
      }
    ],
    scenarios: [
      {
        scenario: "During a team meeting with a tight agenda, someone raises an unrelated but interesting idea. How would each color respond?",
        responses: [
          {
            text: "We need to stick to the agenda. We can discuss that at another time if it's important.",
            color: "Fiery Red",
            explanation: "Fiery Red prioritizes the agenda and efficiency over exploring tangential ideas."
          },
          {
            text: "That sounds fascinating! Let's explore it for a few minutes and see where it leads us!",
            color: "Sunshine Yellow",
            explanation: "Sunshine Yellow is excited by new ideas and willing to deviate from the plan to explore possibilities."
          },
          {
            text: "That could be valuable. How does everyone feel about taking a few minutes to discuss this now?",
            color: "Earth Green",
            explanation: "Earth Green considers everyone's feelings and seeks consensus on whether to discuss the new idea."
          },
          {
            text: "That's interesting, but off-topic. Could you schedule a separate meeting and share research on that idea first?",
            color: "Cool Blue",
            explanation: "Cool Blue appreciates structure and proper planning, suggesting a dedicated time with proper preparation."
          }
        ]
      },
      {
        scenario: "A project is falling behind schedule. How would each color approach this situation?",
        responses: [
          {
            text: "We need to reallocate resources immediately and focus only on the critical path items to meet the deadline.",
            color: "Fiery Red",
            explanation: "Fiery Red focuses on immediate action and prioritization to achieve results."
          },
          {
            text: "Let's get the team together for a creative problem-solving session! I bet we can find an innovative way to overcome this!",
            color: "Sunshine Yellow",
            explanation: "Sunshine Yellow seeks collaborative, creative solutions and maintains optimism."
          },
          {
            text: "Let's check in with the team members who are struggling and see how we can support them to get back on track.",
            color: "Earth Green",
            explanation: "Earth Green focuses on supporting team members and understanding the human factors behind the delay."
          },
          {
            text: "We should analyze where the bottlenecks are occurring and develop a systematic plan to address each one.",
            color: "Cool Blue",
            explanation: "Cool Blue wants to analyze the problem thoroughly and develop a systematic solution."
          }
        ]
      }
    ]
  })

  // Learning content for each color
  const learningContent = {
    "Fiery Red": {
      title: "Fiery Red Energy",
      description: "Fiery Red energy is driven, direct, and decisive. People with dominant Fiery Red energy are typically:",
      characteristics: [
        "Results-oriented and focused on the bottom line",
        "Direct and straightforward in communication",
        "Quick to make decisions and take action",
        "Competitive and goal-driven",
        "Time-conscious and efficiency-focused",
        "Confident and assertive in their approach",
        "Problem-solvers who seek immediate solutions"
      ],
      strengths: "Great at taking charge, driving projects forward, and making tough decisions quickly.",
      challenges: "May appear intimidating, impatient, or insensitive to others' feelings.",
      quotes: [
        "Let's get this done now.",
        "What's the bottom line?",
        "I'll take the lead on this.",
        "Time is money, let's not waste it.",
        "Make a decision and move on."
      ],
      image: "🔥"
    },
    "Sunshine Yellow": {
      title: "Sunshine Yellow Energy",
      description: "Sunshine Yellow energy is sociable, dynamic, and demonstrative. People with dominant Sunshine Yellow energy are typically:",
      characteristics: [
        "Enthusiastic and optimistic",
        "Sociable and people-oriented",
        "Creative and innovative in their thinking",
        "Persuasive and engaging communicators",
        "Collaborative and team-focused",
        "Spontaneous and flexible in approach",
        "Inspiring and motivating to others"
      ],
      strengths: "Excellent at generating enthusiasm, coming up with creative ideas, and building relationships.",
      challenges: "May appear disorganized, overly optimistic, or lacking in follow-through.",
      quotes: [
        "Let's brainstorm some ideas!",
        "This will be fun and energizing!",
        "Imagine the possibilities!",
        "Let's get everyone involved!",
        "What if we tried something completely new?"
      ],
      image: "☀️"
    },
    "Earth Green": {
      title: "Earth Green Energy",
      description: "Earth Green energy is caring, encouraging, and sharing. People with dominant Earth Green energy are typically:",
      characteristics: [
        "Caring and empathetic toward others",
        "Patient and supportive listeners",
        "Focused on harmony and positive relationships",
        "Loyal and committed team members",
        "Consistent and reliable in their approach",
        "Considerate of everyone's feelings and needs",
        "Collaborative and consensus-seeking"
      ],
      strengths: "Exceptional at building strong relationships, creating harmony, and supporting team members.",
      challenges: "May avoid conflict, take too long to make decisions, or prioritize others' needs over business objectives.",
      quotes: [
        "How does everyone feel about this?",
        "Let's make sure we consider everyone's input.",
        "I want to ensure this works for the whole team.",
        "Let's take our time and get this right.",
        "How can I support you with this?"
      ],
      image: "🌿"
    },
    "Cool Blue": {
      title: "Cool Blue Energy",
      description: "Cool Blue energy is precise, deliberate, and questioning. People with dominant Cool Blue energy are typically:",
      characteristics: [
        "Analytical and detail-oriented",
        "Methodical and systematic in approach",
        "Data-driven decision makers",
        "Precise and accurate in their work",
        "Cautious and thorough planners",
        "Logical and objective thinkers",
        "Independent and self-sufficient"
      ],
      strengths: "Excellent at analyzing complex problems, ensuring quality, and developing precise solutions.",
      challenges: "May appear distant, overly cautious, or critical of new ideas without sufficient data.",
      quotes: [
        "Let me analyze this more carefully.",
        "I need more data before deciding.",
        "Let's be precise about the requirements.",
        "We should consider all possible outcomes.",
        "The details matter here."
      ],
      image: "❄️"
    }
  };

  // State variables
  const [currentScreen, setCurrentScreen] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState(() => {
  const savedUsers = localStorage.getItem("insightsQuizUsers");
  return savedUsers ? JSON.parse(savedUsers) : {};
});
  const [difficulty, setDifficulty] = useState("easy");
  const [gameMode, setGameMode] = useState("standard"); // standard, mixed, scenario, learning
  const [currentLearningColor, setCurrentLearningColor] = useState("Fiery Red");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState(null);
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10); // 10-second timer
  // const [timeRemaining, setTimeRemaining] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sessionHistory, setSessionHistory] = useState({
    "Fiery Red": { correct: 0, attempted: 0 },
    "Sunshine Yellow": { correct: 0, attempted: 0 },
    "Earth Green": { correct: 0, attempted: 0 },
    "Cool Blue": { correct: 0, attempted: 0 }
  });
  const [screenSize, setScreenSize] = useState("desktop");

  // Quiz progress tracking
  const [highScore, setHighScore] = useState(0);
  // Update quizHistory to use user-specific data
  const [quizHistory, setQuizHistory] = useState([]);
  // const [quizHistory, setQuizHistory] = useState(() => {
//   const savedHistory = localStorage.getItem("insightsQuizHistory");
//   const parsedHistory = savedHistory ? JSON.parse(savedHistory) : {};
//   return Object.values(parsedHistory);  // Convert object values into an array
// });

  const colorStyles = {
    "Fiery Red": {
      bg: 'bg-red-100',
      text: 'text-red-800',
      border: 'border-red-300',
      button: 'bg-red-500 hover:bg-red-600 text-white'
    },
    "Sunshine Yellow": {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      border: 'border-yellow-300',
      button: 'bg-yellow-400 hover:bg-yellow-500 text-black'
    },
    "Earth Green": {
      bg: 'bg-green-100',
      text: 'text-green-800',
      border: 'border-green-300',
      button: 'bg-green-600 hover:bg-green-700 text-white'
    },
    "Cool Blue": {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 text-white'
    }
  };
  
  // Calculate cumulative stats from the entire history
const calculateCumulativeStats = () => {
  return users[username]?.cumulativeStats || {
    "Fiery Red": { correct: 0, attempted: 0 },
    "Sunshine Yellow": { correct: 0, attempted: 0 },
    "Earth Green": { correct: 0, attempted: 0 },
    "Cool Blue": { correct: 0, attempted: 0 }
  };
};

const cumulativeStats = calculateCumulativeStats();

  // Effect to determine screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect for timer
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (isTimerRunning && timeRemaining === 0) {
      handleTimeUp();
    }

    return () => clearInterval(timer);
  }, [isTimerRunning, timeRemaining]);

  // Effect to save quiz history to local storage
  useEffect(() => {
    localStorage.setItem("insightsQuizHistory", JSON.stringify(quizHistory));
  }, [quizHistory]);

// Add login handler
const handleLogin = (e) => {
  e.preventDefault();
  if (!users[username]) {
    // Create new user
    setUsers(prev => ({
      ...prev,
      [username]: {
        password,
        highScore: 0,
        quizHistory: [],
        cumulativeStats: {
          "Fiery Red": { correct: 0, attempted: 0 },
          "Sunshine Yellow": { correct: 0, attempted: 0 },
          "Earth Green": { correct: 0, attempted: 0 },
          "Cool Blue": { correct: 0, attempted: 0 }
        }
      }
    }));
  }
  setCurrentScreen('landing');
};


useEffect(() => {
  if (currentScreen === 'landing' && users[username]) {
    setQuizHistory(users[username].quizHistory);
    setHighScore(users[username].highScore);
  }
}, [currentScreen, username, users]);

  // Handle timer expiration
  const handleTimeUp = () => {
    if (!isAnswered) {
      setIsAnswered(true);
      setShowExplanation(true);

      // Update session history for timed out question
      const currentQuestion = getCurrentQuestion();
      updateSessionHistory(currentQuestion.color, false);
    }
  };

  // Get current question based on mode and difficulty
  const getCurrentQuestion = () => {
    if (gameMode === "standard") {
      return quizData[difficulty][currentQuestionIndex];
    } else if (gameMode === "mixed") {
      return quizData.mixed[currentQuestionIndex];
    } else if (gameMode === "scenario") {
      return quizData.scenarios[currentQuestionIndex].responses[currentQuestionIndex % 4];
    }
    return null;
  };

  // Get current scenario for scenario mode
  const getCurrentScenario = () => {
    if (gameMode === "scenario") {
      return quizData.scenarios[Math.floor(currentQuestionIndex / 4)].scenario;
    }
    return "";
  };

  

  // Get questions array based on current mode and difficulty
  const getCurrentQuestions = () => {
    if (gameMode === "standard") {
      return quizData[difficulty];
    } else if (gameMode === "mixed") {
      return quizData.mixed;
    } else if (gameMode === "scenario") {
      return quizData.scenarios.flatMap(scenario => scenario.responses);
    }
    return [];
  };

  // Start new quiz with selected settings
  const startQuiz = (mode, diff, timed) => {
    setGameMode(mode);
    setDifficulty(diff);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedPrimaryColor(null);
    setSelectedSecondaryColor(null);
    setIsAnswered(false);
    setGameOver(false);
    setShowExplanation(false);
    setShowStartScreen(false);
    setTimerEnabled(true);
    setTimeRemaining(10);
    setIsTimerRunning(true);
    setSessionHistory({
      "Fiery Red": { correct: 0, attempted: 0 },
      "Sunshine Yellow": { correct: 0, attempted: 0 },
      "Earth Green": { correct: 0, attempted: 0 },
      "Cool Blue": { correct: 0, attempted: 0 }
    });
  };

  // Switch to learning mode for a specific color
  const startLearningMode = (color) => {
    setGameMode("learning");
    setCurrentLearningColor(color);
    setShowStartScreen(false);
  };

  // Handle color selection for standard and scenario modes
  const handleColorSelect = (selectedColor) => {
    if (isAnswered) return;
    
    setSelectedPrimaryColor(selectedColor);
    setIsAnswered(true);
    setIsTimerRunning(false);
    
    const currentQuestion = getCurrentQuestion();
    const isCorrect = selectedColor === currentQuestion.color;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    updateSessionHistory(currentQuestion.color, isCorrect);
    
    setShowExplanation(true);
  };

  // Handle primary color selection for mixed mode
  const handlePrimaryColorSelect = (selectedColor) => {
    if (isAnswered) return;
    setSelectedPrimaryColor(selectedColor);
  };

  // Handle secondary color selection for mixed mode
  const handleSecondaryColorSelect = (selectedColor) => {
    if (isAnswered || !selectedPrimaryColor || selectedPrimaryColor === selectedColor) return;
    
    setSelectedSecondaryColor(selectedColor);
    setIsAnswered(true);
    setIsTimerRunning(false);
    
    const currentQuestion = quizData.mixed[currentQuestionIndex];
    const isPrimaryCorrect = selectedPrimaryColor === currentQuestion.primaryColor;
    const isSecondaryCorrect = selectedColor === currentQuestion.secondaryColor;
    
    if (isPrimaryCorrect && isSecondaryCorrect) {
      setScore(score + 1);
    }
    
    updateSessionHistory(currentQuestion.primaryColor, isPrimaryCorrect);
    updateSessionHistory(currentQuestion.secondaryColor, isSecondaryCorrect);
    
    setShowExplanation(true);
  };

  // Update session history for color performance tracking
  const updateSessionHistory = (color, isCorrect) => {
    setSessionHistory(prev => ({
      ...prev,
      [color]: {
        correct: prev[color].correct + (isCorrect ? 1 : 0),
        attempted: prev[color].attempted + 1
      }
    }));
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const questions = getCurrentQuestions();
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedPrimaryColor(null);
      setSelectedSecondaryColor(null);
      setIsAnswered(false);
      setShowExplanation(false);
      setTimeRemaining(10);
      setIsTimerRunning(timerEnabled);
    } else {
      // Save quiz results to history
      const newQuizResult = {
        date: new Date().toISOString(),
        mode: gameMode,
        difficulty,
        score,
        totalQuestions: questions.length,
        performanceByColor: { ...sessionHistory }
      };
      // Update user data
const updatedUsers = {
  ...users,
  [username]: {
    ...users[username],
    highScore: Math.max(users[username].highScore, score),
    quizHistory: [...users[username].quizHistory, newQuizResult],
    cumulativeStats: Object.entries(users[username].cumulativeStats).reduce(
      (acc, [color, stats]) => {
        acc[color] = {
          correct: stats.correct + sessionHistory[color].correct,
          attempted: stats.attempted + sessionHistory[color].attempted
        };
        return acc;
      },
      {}
    )
  }
};
setUsers(updatedUsers);
localStorage.setItem("insightsQuizUsers", JSON.stringify(updatedUsers));
      
      setQuizHistory(prev => [...prev, newQuizResult]);
      setGameOver(true);
      setIsTimerRunning(false);
    }
  };


  



  // Return to start screen
  const goToStartScreen = () => {
    setShowStartScreen(true);
    setGameMode("standard");
    setGameOver(false);
    setIsTimerRunning(false);
  };

  // Restart the quiz with same settings
  const handleRestartQuiz = () => {
    startQuiz(gameMode, difficulty, timerEnabled);
  };

  // Get score message based on performance
  const getScoreMessage = () => {
    const questions = getCurrentQuestions();
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 90) return "Excellent! You're an Insights Discovery expert!";
    if (percentage >= 70) return "Great job! You have a strong understanding of color energies!";
    if (percentage >= 50) return "Good effort! You're developing your color energy recognition.";
    return "Keep practicing! With time, you'll get better at recognizing color energies.";
  };

  // Get feedback on colors the user struggles with
  const getColorFeedback = () => {
    const weakestColors = Object.entries(sessionHistory)
      .filter(([_, stats]) => stats.attempted > 0)
      .map(([color, stats]) => ({
        color,
        accuracy: stats.correct / stats.attempted
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
    
    if (weakestColors.length === 0) return null;
    
    const weakestColor = weakestColors[0];
    if (weakestColor.accuracy < 0.7) {
      return (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-semibold">Learning Opportunity:</p>
          <p>You might benefit from studying more about <span className="font-medium">{weakestColor.color}</span> energy.</p>
          <button
            onClick={() => startLearningMode(weakestColor.color)}
            className="mt-2 text-indigo-600 hover:text-indigo-800 underline"
          >
            Learn about {weakestColor.color}
          </button>
        </div>
      );
    }
    
    return null;
  };

  // Color styling for buttons
  const getColorStyle = (color) => {
    switch (color) {
      case "Fiery Red": return "bg-red-500 hover:bg-red-600 text-white";
      case "Sunshine Yellow": return "bg-yellow-400 hover:bg-yellow-500 text-black";
      case "Earth Green": return "bg-green-600 hover:bg-green-700 text-white";
      case "Cool Blue": return "bg-blue-600 hover:bg-blue-700 text-white";
      default: return "bg-gray-600 hover:bg-gray-700 text-white";
    }
  };

  // Updated render methods

  const renderProgressBar = (percentage, color) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className={`${colorStyles[color].bg} h-2.5 rounded-full`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  const renderDifficultySelector = () => (
  <div className="mb-6">
    <h3 className="text-sm font-medium mb-3 mt-6 text-gray-700">Select Difficulty</h3>
    <div className="flex gap-2">
      {['easy', 'medium', 'hard'].map((diff) => (
        <button
          key={diff}
          onClick={() => setDifficulty(diff)}
          className={`px-4 py-2 rounded-lg transition-all ${
            difficulty === diff 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {diff.charAt(0).toUpperCase() + diff.slice(1)}
        </button>
      ))}
    </div>
  </div>
);


const renderLearningNavigation = () => (
  <header className="mb-8">
    <div className="flex justify-right ">
      <button
        onClick={() => setCurrentScreen('login')}
        className="bg-gray-400 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex ml-auto"
      >
        Logout
      </button>
  </div>
    <h1 className="text-2xl font-bold text-center mb-4">Hi, {username}</h1>
    <h1 className="text-2xl font-bold text-center mb-4">Welcome to Discovery Insights 🚀</h1>
    <hr className="border-t-2 border-gray-300 mb-6" />
    <div className="border-b pb-4">
      <h2 className="text-xl font-semibold mb-4">Learn About Color Energies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(learningContent).map((color) => (
          <button
            key={color}
            onClick={() => startLearningMode(color)}
            className={`p-4 rounded-lg flex flex-col items-center transition-transform hover:scale-105 ${colorStyles[color].bg}`}
          >
            <span className="text-3xl mb-2">{learningContent[color].image}</span>
            <span className="font-medium text-center">{color}</span>
          </button>
        ))}
      </div>
    </div>
  </header>
);


  // Render color wheel visualization
  const renderColorWheel = () => {
  return (
    <div className="relative w-56 h-56 mx-auto my-6">
      {/* Fiery Red Quadrant */}
      <div
        className={`absolute top-0 left-0 w-28 h-28 bg-red-500 rounded-tl-full flex items-center justify-center 
          ${currentLearningColor === "Fiery Red" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Fiery Red")}
      >
        <div className="absolute top-14 left-16 transform -translate-x-4 -translate-y-6">
          <p className="text-white font-bold">Fiery Red 🔥</p>
          {/* <p className="absolute top-7 left-6 text-white text-xs">🔥</p> */}
        </div>
      </div>

      {/* Sunshine Yellow Quadrant */}
      <div
        className={`absolute top-0 right-0 w-28 h-28 bg-yellow-400 rounded-tr-full flex items-center justify-center 
          ${currentLearningColor === "Sunshine Yellow" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Sunshine Yellow")}
      >
        <div className="absolute top-16 left-8 transform -translate-x-6 -translate-y-6">
          <p className="text-white font-bold">Sunshine Yellow☀️</p>
          {/* <p className="text-white text-xs">☀️</p> */}
        </div>
      </div>

      {/* Earth Green Quadrant */}
      <div
        className={`absolute bottom-0 right-0 w-28 h-28 bg-green-600 rounded-br-full flex items-center justify-center 
          ${currentLearningColor === "Earth Green" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Earth Green")}
      >
        <div className="absolute top-10 left-12 transform -translate-x-6 -translate-y-6">
          <p className="text-white font-bold">Earth Green</p>
          <p className="text-white text-xs">🌿</p>
        </div>
      </div>

      {/* Cool Blue Quadrant */}
      <div
        className={`absolute bottom-0 left-0 w-28 h-28 bg-blue-600 rounded-bl-full flex items-center justify-center 
          ${currentLearningColor === "Cool Blue" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Cool Blue")}
      >
        <div className="absolute top-12 left-12 transform -translate-x-2 -translate-y-8">
          <p className="text-white font-bold">Cool Blue❄️</p>
          {/* <p className="text-white text-xs">❄️</p> */}
        </div>
      </div>
    </div>
  );
};


  // Render progress chart
const renderProgressChart = () => {
  if (quizHistory.length === 0) return null;

  const recentScores = quizHistory.slice(-5); // Get the last 5 quiz attempts

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Quiz Performance</h3>
      <div className="flex flex-col h-48 border-l-2 border-b-2 border-gray-200 pb-2 pl-2 relative">
        <div className="flex items-end justify-around h-full w-full">
          {recentScores.map((quiz, index) => {
            const percentage = quiz.totalQuestions > 0 ? (quiz.score / quiz.totalQuestions) * 100 : 0;
            const barHeight = (quiz.score / quiz.totalQuestions) * 100;

            return (
              <div key={index} className="flex flex-col items-center mx-2 w-10">
                <div className="relative w-full flex justify-center">
                  {/* Score Label Above Bar */}
                  <div className="absolute -top-6 text-xs font-medium">
                    {percentage.toFixed(0)}%
                  </div>
                  {/* Bar */}
                  <div
                    className="bg-indigo-500 rounded-t w-full min-w-[8px] max-w-[20px]"
                    style={{
                      height: `${barHeight}px`,
                      minHeight: '40px',
                    }}
                  />
                </div>
                {/* Quiz Name Below Bar */}
                <span className="text-xs mt-2 text-gray-600 text-center truncate w-12">
                  {quiz.name || `Quiz ${quizHistory.length - recentScores.length + index + 1}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* X-axis Labels */}
      {/* <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>0%</span>
        <span>100%</span>
      </div> */}
    </div>
  );
};



// Add login screen
if (currentScreen === 'login') {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <img 
          src="/logo.gif" 
          alt="Company Logo" 
          className="h-16 w-auto"
        />
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">Insights Quiz Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            required
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          {users[username] ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

  // Update the start screen return statement
  if (showStartScreen) {
    return (
      <div className={`p-6 ${screenSize === "mobile" ? "max-w-sm" : "max-w-3xl"} mx-auto bg-white rounded-xl shadow-lg`}>
        {/* {renderNavigationHeader()} */}
        {renderLearningNavigation()}
        
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Start New Quiz
              
              <span className="ml-4 flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                <ClockIcon className="h-4 w-4 mr-1" />
                10s
              </span>
            
            </h2>
            
            {renderDifficultySelector()}

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium mb-2">Quiz Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setGameMode("standard")}
                    className={`p-3 text-left rounded-lg ${
                      gameMode === "standard" 
                        ? 'border-2 border-indigo-500 bg-indigo-50' 
                        : 'border border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <h3 className="font-medium">Standard</h3>
                    <p className="text-sm text-gray-600 mt-1">Single color identification</p>
                  </button>
                  <button
                    onClick={() => setGameMode("mixed")}
                    className={`p-3 text-left rounded-lg ${
                      gameMode === "mixed" 
                        ? 'border-2 border-indigo-500 bg-indigo-50' 
                        : 'border border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <h3 className="font-medium">Mixed Colors (Beta)</h3>
                    <p className="text-sm text-gray-600 mt-1">Identify dual energies</p>
                  </button>
                  <button
                    onClick={() => setGameMode("scenario")}
                    className={`p-3 text-left rounded-lg ${
                      gameMode === "scenario" 
                        ? 'border-2 border-indigo-500 bg-indigo-50' 
                        : 'border border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <h3 className="font-medium">Scenarios (Beta)</h3>
                    <p className="text-sm text-gray-600 mt-1">Real-world situations</p>
                  </button>
                </div>
              </div>

              <button
                onClick={() => startQuiz(gameMode, difficulty, timerEnabled)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg flex items-center justify-center"
              >
                Start Quiz Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-green-600" />
              Your Progress
            </h2>
            
          <div className="text-left mb-6">
            <div className="text-xl font-bold mb-2">
              Personal Best: {((highScore / getCurrentQuestions().length) * 100).toFixed(1)}%
            </div>
          </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              {renderProgressChart()}
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Color Mastery</h3>
                {Object.entries(cumulativeStats).map(([color, stats]) => (
                  <div key={color} className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{color}</span>
                      <span className="text-sm text-gray-600">
                        {stats.attempted > 0 
                          ? `${Math.round((stats.correct / stats.attempted) * 100)}%` 
                          : '--'}
                      </span>
                    </div>
                    {renderProgressBar(
                      stats.attempted > 0 ? (stats.correct / stats.attempted) * 100 : 0,
                      color
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render learning mode
  // Update learning mode section
  
  if (gameMode === "learning") {
    const colorInfo = learningContent[currentLearningColor];
    
    return (
      <div className={`p-6 ${screenSize === "mobile" ? "max-w-sm" : "max-w-3xl"} mx-auto bg-white rounded-xl shadow-lg`}>
        <header className="mb-8 border-b pb-4">
      <button
        onClick={goToStartScreen}
        className="flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to Main
      </button>
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {gameMode === 'learning' ? 'Learning Mode' : 'Color Energy Quiz'}
        </h1>
        {!showStartScreen && (
          <div className="flex items-center gap-4">
          </div>
        )}
      </div>
    </header>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className={`p-6 rounded-lg ${colorStyles[currentLearningColor].bg}`}>
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">{colorInfo.image}</span>
                <div>
                  <h1 className="text-3xl font-bold">{colorInfo.title}</h1>
                  <p className="text-lg mt-2">{colorInfo.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Strengths</h3>
                  <ul className="list-check space-y-2">
                    {colorInfo.characteristics.slice(0, 4).map((char, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Challenges</h3>
                  <ul className="list-warning space-y-2">
                    {colorInfo.characteristics.slice(4).map((char, i) => (
                      <li key={i} className="flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Interactive Color Wheel</h3>
              {renderColorWheel()}
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Typical Phrases</h3>
              <div className="space-y-2">
                {colorInfo.quotes.map((quote, i) => (
          <div
            key={i}
            className={`p-3 bg-white rounded border-l-4 ${colorStyles[currentLearningColor].border}`}
          >
            "{quote}"
          </div>
                ))}
              </div>
            </div>
      </div>
    );
  }



  // Render quiz interface
  if (!showStartScreen && !gameOver) {
    const currentQuestion = getCurrentQuestion();
    const isMixedMode = gameMode === "mixed";
    const isScenarioMode = gameMode === "scenario";
    
    return (
      <div className={`p-4 ${screenSize === "mobile" ? "max-w-sm" : "max-w-2xl"} mx-auto bg-white rounded-xl shadow-md`}>

        <header className="mb-8 border-b pb-4">
       <button
        onClick={goToStartScreen}
        className="flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to Main
      </button>
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {gameMode === 'learning' ? 'Learning Mode' : 'Color Energy Quiz'}
        </h1>
        {!showStartScreen && (
          <div className="flex items-center gap-4">
          </div>
        )}
      </div>
    </header>


        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-lg font-semibold">Question {currentQuestionIndex + 1}</span>
            {timerEnabled && (
    <div className="flex items-center gap-2 text-red-600 font-medium">
      <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
      </svg>
      <span>{timeRemaining}s</span>
    </div>
  )}
          </div>
          <span className="text-lg font-semibold">Score: {score}</span>
        </div>
        
        {isScenarioMode && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">{getCurrentScenario()}</p>
          </div>
        )}
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-lg italic">"{currentQuestion.text}"</p>
        </div>
        
        {isMixedMode ? (
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Select Primary Color:</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(learningContent).map(color => (
                  <button
                    key={color}
                    onClick={() => handlePrimaryColorSelect(color)}
                    className={`${getColorStyle(color)} p-3 rounded-lg ${
                      selectedPrimaryColor === color ? "ring-4 ring-black" : ""
                    }`}
                    disabled={isAnswered}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {selectedPrimaryColor && (
              <div>
                <p className="font-semibold mb-2">Select Secondary Color:</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(learningContent)
                    .filter(color => color !== selectedPrimaryColor)
                    .map(color => (
                      <button
                        key={color}
                        onClick={() => handleSecondaryColorSelect(color)}
                        className={`${getColorStyle(color)} p-3 rounded-lg ${
                          selectedSecondaryColor === color ? "ring-4 ring-black" : ""
                        }`}
                        disabled={isAnswered}
                      >
                        {color}
                      </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(learningContent).map(color => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className={`${getColorStyle(color)} p-3 rounded-lg ${
                  selectedPrimaryColor === color ? "ring-4 ring-black" : ""
                }`}
                disabled={isAnswered}
              >
                {color}
              </button>
            ))}
          </div>
        )}
        
        {showExplanation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-green-600 mb-2">
              {selectedPrimaryColor === currentQuestion.color ? "✅ Correct!" : `❌ Incorrect. The correct answer is ${currentQuestion.color}.`}
            </p>
            <p>{currentQuestion.explanation}</p>
            <button
              onClick={handleNextQuestion}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
            >
              {currentQuestionIndex < getCurrentQuestions().length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          </div>
        )}

      </div>
    );
  }

  // Render results screen
  if (gameOver) {
    const totalQuestions = getCurrentQuestions().length;
    
    return (
      <div className={`p-4 ${screenSize === "mobile" ? "max-w-sm" : "max-w-2xl"} mx-auto bg-white rounded-xl shadow-md`}>
        <h1 className="text-3xl font-bold mb-4 text-center">Quiz Complete!</h1>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2">{score}/{totalQuestions}</div>
          <div className="text-xl">{getScoreMessage()}</div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Performance by Color</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(sessionHistory).map(([color, stats]) => (
              <div key={color} className="p-3 rounded-lg bg-gray-50">
                <div className="flex items-center mb-2">
                  <span className={`text-sm font-semibold ${getColorStyle(color)} px-2 py-1 rounded`}>
                    {color}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy:</span>
                  <span>
                    {stats.attempted > 0 
                      ? `${Math.round((stats.correct / stats.attempted) * 100)}%` 
                      : "N/A"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {getColorFeedback()}
        {renderProgressChart()}
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleRestartQuiz}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
          >
            Try Again
          </button>
          <button
            onClick={goToStartScreen}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
          >
            Main Menu
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default EnhancedInsightsQuiz;