import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";
import Loader from "./Loader/Loader";

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState(``);
  const [fixedCode, setFixedCode] = useState(`No code to fix`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const fixCode = () => {
    setCode(fixedCode);
  }

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API}/ai/get-review`, { code });
      const reviewText = response.data;
      setReview(reviewText);  
      setLoading(false);
    const matches = reviewText.match(/```([\w+#-]*)\s*([\s\S]*?)\s*```/gi);
        if (matches && matches.length > 1) {
            const lastMatch = matches[matches.length - 1];
            const extractedCode = lastMatch.replace(/```[\w+#-]*|```/g, "").trim();
            setFixedCode(extractedCode);
        }
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  }  

  return (
    <>
    { loading && <Loader/> }
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="buttons">
          <div onClick={reviewCode} className="button review">
            Review
          </div>
          <div onClick={fixCode} className="button fix">
            Fix
          </div>
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
