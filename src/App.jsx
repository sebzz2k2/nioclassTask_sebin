import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { MathJaxContext, MathJax } from 'better-react-mathjax'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'


const Question = ["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"]
const URL =
  "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=";

function App() {
  const [question_id, setQuestion_id] = useState(0)
  const [question, setQuestion] = useState(Question[question_id])
  const [QData, setQData] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`${URL}${question}`).then((res) => {
      setLoading(false)
      setQData(res.data[0].Question)
    }).catch((err) => {
      setLoading(false)
      window.alert("error occured")
    })
  }, [question])

  useEffect(() => {
    setQuestion(Question[question_id])
  }, [question_id])

  const handleNext = () => {
    if (question_id === 2) {
      setQuestion_id(0)
    } else
      setQuestion_id((prev) => prev + 1)
  }
  const handlePrev = () => {
    if (question_id === 0) {
      setQuestion_id(2)
    } else
      setQuestion_id((prev) => prev - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handlePrev}>
          <GrLinkPrevious />
        </button>
        <button onClick={handleNext}>
          <GrLinkNext />
        </button>
      </header>
      <div className="container">
        {loading ? <h4>Loading...</h4> : <MathJaxContext>
          <MathJax>{QData}</MathJax>
        </MathJaxContext>}

      </div>
    </div>
  )
}

export default App


const abc = {
  "ChapterID": "AreaUnderTheCurve",
  "QuestionID": "AreaUnderTheCurve_901",
  "UpdateQuestion": 0,
  "ExpectedTime": 25,
  "Difficulty": "0",
  "Source": "n/a ",
  "PostQuestionNotes": "n/a ",
  "Tags": "Theory",
  "Question": "Let \\( F(x) = \\int_{h(x)}^{g(x)}f(t)dt \\) such that function g(x) and h(x) are defined on \\( [a,b] \\) and differentiable at all points \\( x\\in[a,b] \\), then \\( \\frac{d}{dx}F(x) = ? \\)",
  "QuestionSummary": "",
  "Step1": "",
  "Result1": "",
  "Explanation1": "",
  "Step1Timer": 60,
  "Step2": "",
  "Result2": "",
  "Explanation2": "",
  "Step2Timer": 20,
  "Step3": "",
  "Result3": "",
  "Explanation3": "",
  "Step3Timer": 15,
  "Step4": "",
  "Result4": "",
  "Explanation4": "",
  "Step4Timer": 15,
  "Step5": "",
  "Result5": "",
  "Explanation5": "",
  "Step5Timer": 15,
  "Step6": null,
  "Result6": null,
  "Explanation6": null,
  "Step6Timer": null,
  "Step7": null,
  "Result7": null,
  "Explanation7": null,
  "Step7Timer": null,
  "Step8": null,
  "Result8": null,
  "Explanation8": null,
  "Step8Timer": null
}