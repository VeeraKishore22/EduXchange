import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";  

const mockQuestions = {
  UPSC: [
    { 
      question: "Who was the first President of India?", 
      options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "Dr. B. R. Ambedkar"], 
      answer: "Dr. Rajendra Prasad" 
    },
    { 
      question: "Which Article of the Indian Constitution deals with Emergency provisions?", 
      options: ["Article 352", "Article 356", "Article 360", "All of the above"], 
      answer: "All of the above" 
    },
    { 
      question: "Who is known as the 'Father of the Indian Constitution'?", 
      options: ["Dr. B. R. Ambedkar", "Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru"], 
      answer: "Dr. B. R. Ambedkar" 
    },
    { 
      question: "In which year was the Planning Commission of India established?", 
      options: ["1947", "1950", "1951", "1952"], 
      answer: "1950" 
    },
    { 
      question: "Which Schedule of the Indian Constitution contains the anti-defection law?", 
      options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"], 
      answer: "10th Schedule" 
    },
    { 
      question: "Who was the first Indian to receive a Nobel Prize?", 
      options: ["C. V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"], 
      answer: "Rabindranath Tagore" 
    },
    { 
      question: "What is the tenure of a Rajya Sabha member?", 
      options: ["4 years", "5 years", "6 years", "7 years"], 
      answer: "6 years" 
    },
    { 
      question: "The Directive Principles of State Policy in the Indian Constitution were inspired by which country's Constitution?", 
      options: ["USA", "Canada", "Ireland", "France"], 
      answer: "Ireland" 
    },
    { 
      question: "Who was the first woman Governor of an Indian state?", 
      options: ["Indira Gandhi", "Sarojini Naidu", "Sucheta Kripalani", "Vijayalakshmi Pandit"], 
      answer: "Sarojini Naidu" 
    },
    { 
      question: "The term 'Secular' was added to the Indian Constitution by which amendment?", 
      options: ["24th Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"], 
      answer: "42nd Amendment" 
    }
  ],
  
 GATE: [
    { 
      question: "What is the time complexity of binary search?", 
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], 
      answer: "O(log n)" 
    },
    { 
      question: "Which data structure uses LIFO principle?", 
      options: ["Queue", "Stack", "Array", "Graph"], 
      answer: "Stack" 
    },
    { 
      question: "Which sorting algorithm has the worst-case time complexity of O(n²)?", 
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"], 
      answer: "Bubble Sort" 
    },
    { 
      question: "Which of the following is NOT an example of a NoSQL database?", 
      options: ["MongoDB", "Cassandra", "PostgreSQL", "Redis"], 
      answer: "PostgreSQL" 
    },
    { 
      question: "Which layer of the OSI model is responsible for process-to-process communication?", 
      options: ["Transport Layer", "Network Layer", "Session Layer", "Application Layer"], 
      answer: "Transport Layer" 
    },
    { 
      question: "What does the acronym 'ACID' stand for in databases?", 
      options: ["Atomicity, Consistency, Isolation, Durability", "Authentication, Compression, Integrity, Decryption", "Access, Control, Integrity, Data", "Aggregation, Clustering, Indexing, Deduplication"], 
      answer: "Atomicity, Consistency, Isolation, Durability" 
    },
    { 
      question: "Which of the following is used to prevent deadlocks in operating systems?", 
      options: ["Mutex", "Banker's Algorithm", "Paging", "Round Robin Scheduling"], 
      answer: "Banker's Algorithm" 
    },
    { 
      question: "What is the main advantage of using a linked list over an array?", 
      options: ["Faster access time", "Efficient memory usage", "Easier to sort", "Fixed size"], 
      answer: "Efficient memory usage" 
    },
    { 
      question: "Which logic gate is known as the universal gate?", 
      options: ["AND", "OR", "NAND", "XOR"], 
      answer: "NAND" 
    },
    { 
      question: "Which of the following protocols is used for secure communication over the internet?", 
      options: ["HTTP", "FTP", "TCP", "HTTPS"], 
      answer: "HTTPS" 
    }
],

CAT: [
  {
    question: "If the sum of two numbers is 36 and their product is 320, what is the difference between the two numbers?",
    options: ["2", "4", "6", "8"],
    answer: "4"
  },
  {
    question: "A train 150 meters long is running at a speed of 60 km/h. How long will it take to cross a pole?",
    options: ["5 sec", "7 sec", "9 sec", "11 sec"],
    answer: "9 sec"
  },
  {
    question: "If the price of an item is increased by 20%, then by what percentage should the new price be reduced to restore the original price?",
    options: ["16.66%", "20%", "18%", "22%"],
    answer: "16.66%"
  },
  {
    question: "Find the missing number in the series: 2, 6, 12, 20, ?, 42",
    options: ["28", "30", "32", "34"],
    answer: "30"
  },
  {
    question: "A shopkeeper sells an item at a 25% discount and still makes a 20% profit. What was the original markup percentage?",
    options: ["50%", "60%", "75%", "100%"],
    answer: "60%"
  },
  {
    question: "In a certain language, 'MEASURE' is written as 'NZFTVSF'. How is 'COUNTRY' written in that language?",
    options: ["DPVOUSBZ", "DPVOZUBY", "DPMUSBZ", "DPNVTBZ"],
    answer: "DPVOUSBZ"
  },
  {
    question: "A, B, C, and D are four friends. B is twice as old as A, C is three years older than B, and D is half the age of C. If A is 10 years old, how old is D?",
    options: ["10", "12", "13", "15"],
    answer: "12"
  },
  {
    question: "What is the remainder when 7^100 is divided by 5?",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "If the simple interest on a sum for 3 years at 5% per annum is ₹600, what is the principal amount?",
    options: ["₹3000", "₹3500", "₹4000", "₹4500"],
    answer: "₹4000"
  },
  {
    question: "Find the odd one out: Apple, Banana, Mango, Tomato",
    options: ["Apple", "Banana", "Mango", "Tomato"],
    answer: "Tomato"
  }
],

JEE: [
  {
    question: "If \( f(x) = x^3 - 3x^2 + 4 \), then what is \( f'(2) \)?",
    options: ["1", "2", "3", "4"],
    answer: "1"
  },
  {
    question: "A projectile is launched at an angle of 45° with an initial velocity of 20 m/s. What is the maximum height reached? (Take g = 10 m/s²)",
    options: ["5 m", "10 m", "15 m", "20 m"],
    answer: "10 m"
  },
  {
    question: "Which of the following is a strong electrolyte?",
    options: ["CH₃COOH", "NH₄OH", "H₂O", "NaCl"],
    answer: "NaCl"
  },
  {
    question: "If the sum of the roots of the quadratic equation \( ax^2 + bx + c = 0 \) is 5 and the product is 6, what is the value of \( b/a \)?",
    options: ["-5", "5", "-6", "6"],
    answer: "-5"
  },
  {
    question: "What is the unit of Planck's constant?",
    options: ["Joule", "Joule-second", "Newton", "Watt"],
    answer: "Joule-second"
  },
  {
    question: "Which of the following has the highest electron affinity?",
    options: ["Fluorine", "Chlorine", "Oxygen", "Bromine"],
    answer: "Chlorine"
  },
  {
    question: "A car starts from rest and accelerates uniformly at 5 m/s². How long will it take to reach a speed of 20 m/s?",
    options: ["2 sec", "3 sec", "4 sec", "5 sec"],
    answer: "4 sec"
  },
  {
    question: "What is the value of \( \int e^x dx \)?",
    options: ["\( e^x \)", "\( e^x + C \)", "\( \ln x \)", "\( x e^x \)"],
    answer: "\( e^x + C \)"
  },
  {
    question: "Which of the following compounds is aromatic?",
    options: ["Cyclohexane", "Benzene", "Cyclopentane", "Methane"],
    answer: "Benzene"
  },
  {
    question: "The electric field inside a conductor in electrostatic equilibrium is:",
    options: ["Zero", "Constant", "Infinity", "Variable"],
    answer: "Zero"
  }
],

NEET: [
  {
    question: "Which organelle is known as the 'Powerhouse of the Cell'?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
    answer: "Mitochondria"
  },
  {
    question: "Which of the following hormones is secreted by the pancreas?",
    options: ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
    answer: "Insulin"
  },
  {
    question: "Which law states that energy cannot be created or destroyed?",
    options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"],
    answer: "Law of Conservation of Energy"
  },
  {
    question: "Which of the following is the longest bone in the human body?",
    options: ["Humerus", "Tibia", "Femur", "Radius"],
    answer: "Femur"
  },
  {
    question: "The pH of human blood is approximately:",
    options: ["6.4", "7.4", "8.2", "5.6"],
    answer: "7.4"
  },
  {
    question: "Which gas is primarily responsible for global warming?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
    answer: "Cerebellum"
  },
  {
    question: "Which vitamin helps in blood clotting?",
    options: ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin D"],
    answer: "Vitamin K"
  },
  {
    question: "Which of the following is an example of a polysaccharide?",
    options: ["Glucose", "Fructose", "Cellulose", "Ribose"],
    answer: "Cellulose"
  },
  {
    question: "Which element is found in the hemoglobin molecule?",
    options: ["Calcium", "Iron", "Magnesium", "Sodium"],
    answer: "Iron"
  }
],

SSC: [
  {
    question: "Who was the first Governor-General of India?",
    options: ["Lord William Bentinck", "Lord Canning", "Lord Mountbatten", "Warren Hastings"],
    answer: "Warren Hastings"
  },
  {
    question: "Which river is known as the 'Sorrow of Bihar'?",
    options: ["Yamuna", "Ganga", "Kosi", "Brahmaputra"],
    answer: "Kosi"
  },
  {
    question: "What is the square root of 625?",
    options: ["20", "25", "30", "35"],
    answer: "25"
  },
  {
    question: "Which Indian state has the largest coastline?",
    options: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    answer: "Gujarat"
  },
  {
    question: "Which Mughal emperor built the Red Fort in Delhi?",
    options: ["Babur", "Shah Jahan", "Akbar", "Aurangzeb"],
    answer: "Shah Jahan"
  },
  {
    question: "Which of the following is not a prime number?",
    options: ["29", "37", "51", "23"],
    answer: "51"
  },
  {
    question: "In which year did India gain independence from British rule?",
    options: ["1945", "1947", "1950", "1952"],
    answer: "1947"
  },
  {
    question: "Which of the following metals is the best conductor of electricity?",
    options: ["Aluminum", "Copper", "Silver", "Gold"],
    answer: "Silver"
  },
  {
    question: "Which Indian city is known as the 'Pink City'?",
    options: ["Jaipur", "Jodhpur", "Udaipur", "Bhopal"],
    answer: "Jaipur"
  },
  {
    question: "What is the capital of Jharkhand?",
    options: ["Ranchi", "Jamshedpur", "Dhanbad", "Patna"],
    answer: "Ranchi"
  }
],

Banking: [
  {
    question: "What does 'CRR' stand for in banking terms?",
    options: ["Cash Reserve Ratio", "Current Reserve Rate", "Credit Risk Ratio", "Capital Reserve Requirement"],
    answer: "Cash Reserve Ratio"
  },
  {
    question: "Which organization is responsible for regulating the monetary policy of India?",
    options: ["SEBI", "RBI", "Finance Ministry", "NABARD"],
    answer: "RBI"
  },
  {
    question: "What is the full form of 'NEFT' in banking?",
    options: ["National Electronic Fund Transfer", "National Exchange Fund Transaction", "Net Electronic Finance Transfer", "None of the above"],
    answer: "National Electronic Fund Transfer"
  },
  {
    question: "Which bank was the first to be established in India?",
    options: ["State Bank of India", "Punjab National Bank", "Bank of Baroda", "Bank of Hindustan"],
    answer: "Bank of Hindustan"
  },
  {
    question: "What does 'IFSC' stand for in banking?",
    options: ["Indian Financial Security Code", "International Financial Settlement Code", "Indian Financial System Code", "Integrated Fund Settlement Code"],
    answer: "Indian Financial System Code"
  },
  {
    question: "Which of the following is NOT a function of the Reserve Bank of India?",
    options: ["Issuing currency", "Regulating foreign trade", "Monetary policy implementation", "Regulating banks"],
    answer: "Regulating foreign trade"
  },
  {
    question: "What is the tenure of a Fixed Deposit account?",
    options: ["6 months to 10 years", "1 year to 15 years", "Only 5 years", "No fixed tenure"],
    answer: "6 months to 10 years"
  },
  {
    question: "Which of the following is a measure of inflation?",
    options: ["GDP", "CPI", "Forex Reserves", "FDI"],
    answer: "CPI"
  },
  {
    question: "Which type of bank account offers the highest interest rate?",
    options: ["Savings Account", "Fixed Deposit", "Current Account", "Recurring Deposit"],
    answer: "Fixed Deposit"
  },
  {
    question: "What is the main objective of the Pradhan Mantri Jan Dhan Yojana (PMJDY)?",
    options: ["Increase foreign reserves", "Encourage rural banking", "Financial inclusion", "Increase tax collection"],
    answer: "Financial inclusion"
  }
],

Railway: [
  {
    question: "Which is the largest railway network in the world?",
    options: ["Indian Railways", "China Railway", "Russian Railways", "United States Railroad"],
    answer: "United States Railroad"
  },
  {
    question: "In which year was the first train in India operated?",
    options: ["1853", "1865", "1901", "1912"],
    answer: "1853"
  },
  {
    question: "Which city has the headquarters of Indian Railways?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Who is known as the 'Father of Indian Railways'?",
    options: ["Lord Dalhousie", "Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar"],
    answer: "Lord Dalhousie"
  },
  {
    question: "Which is the fastest train in India?",
    options: ["Rajdhani Express", "Vande Bharat Express", "Shatabdi Express", "Duronto Express"],
    answer: "Vande Bharat Express"
  },
  {
    question: "How many railway zones are there in India?",
    options: ["16", "17", "18", "19"],
    answer: "18"
  },
  {
    question: "What is the full form of IRCTC?",
    options: ["Indian Railway Catering and Transport Corporation", "Indian Railway Catering and Tourism Corporation", "Indian Railway Communication and Ticketing Corporation", "Indian Rail Transport and Catering"],
    answer: "Indian Railway Catering and Tourism Corporation"
  },
  {
    question: "Which Indian train holds the record for the longest route?",
    options: ["Himsagar Express", "Vivek Express", "Rajdhani Express", "Guwahati Express"],
    answer: "Vivek Express"
  },
  {
    question: "Which gauge is most widely used in Indian Railways?",
    options: ["Broad Gauge", "Metre Gauge", "Narrow Gauge", "Standard Gauge"],
    answer: "Broad Gauge"
  },
  {
    question: "Where is the Railway Staff College of India located?",
    options: ["Mumbai", "Vadodara", "Kolkata", "New Delhi"],
    answer: "Vadodara"
  }
],


};

const MockTest = () => {
  const [selectedExam, setSelectedExam] = useState("UPSC");
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    mockQuestions[selectedExam].forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setShowResult(true);
  };

  const handleClear = () => {
    setUserAnswers({});
    setShowResult(false);
    setScore(0);
  };

  return (
    <div style={{
      backgroundImage: `url(${require("../components/images/MockTestbg.webp")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
    }}>
    <div className="mock-test-container">
    <h2  className="mock-test-heading">{selectedExam} MOCK TEST</h2>
      <div className="mock-test-button-container">
     
        {Object.keys(mockQuestions).map((exam) => (
          <button
            key={exam}
            onClick={() => {
              setSelectedExam(exam);
              setUserAnswers({});
              setShowResult(false);
              setScore(0);
            }}
            className={`mock-test-exam-button ${selectedExam === exam ? "active" : ""}`}
          >
            {exam}
          </button>
        ))}
      </div>
      <div>
        
        {mockQuestions[selectedExam].map((q, index) => (
          <div key={index} className="mock-test-question-container">
            <p className="mock-test-question-text">{index + 1}. {q.question}</p>
            {q.options.map((option, idx) => (
              <div key={idx} className="mock-test-option">
                <input 
                  type="radio" 
                  name={`question-${index}`} 
                  id={`option-${index}-${idx}`} 
                  value={option} 
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerSelect(index, option)}
                />
                <label htmlFor={`option-${index}-${idx}`}>{option}</label>
              </div>
            ))}
          
<Link to="#" onClick={handleClear} className="mock-test-clear-link">
  Clear
</Link>
          </div>
        ))}
        
      </div>

      <button className="mock-test-submit-button" onClick={handleSubmit}>
        Submit Test
      </button>

      {showResult && (
        <div className="mock-test-popup">
          <div className="mock-test-popup-content">
            <h3>Test Completed!</h3>
            <p>Your Score: {score} / {mockQuestions[selectedExam].length}</p>
            <button onClick={() => setShowResult(false)}>Ok</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default MockTest;
