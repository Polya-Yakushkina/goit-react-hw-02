import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import css from "./App.module.css";
import clsx from "clsx";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  return (
    <div className={clsx(css.app)}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      /> : <Notification />}
    </div>
  )
}