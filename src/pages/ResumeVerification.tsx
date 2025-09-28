import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ResumeCheckResult = { status: string; reason: string; score: number };

const checkResume = (file: File | null): ResumeCheckResult => {
  if (!file) return { status: "False", reason: "No file uploaded.", score: 0 };
  const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (!allowedTypes.includes(file.type)) {
    return { status: "False", reason: "Unsupported file type.", score: 20 };
  }
  if (file.size < 10 * 1024) {
    return { status: "False", reason: "File too small to be a real resume.", score: 40 };
  }
  let score = 60;
  if (file.size > 50 * 1024) score += 20;
  if (file.size > 100 * 1024) score += 20;
  if (score > 90) {
    return { status: "True", reason: "Resume passed all checks.", score };
  }
  return { status: "True", reason: "Resume passed basic checks.", score };
};

const ResumeVerification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state?.resumeFile as File | null;
  const result = checkResume(file);
  const studentEmail = location.state?.studentEmail || "student@college.edu";
  React.useEffect(() => {
    if (file && result) {
      localStorage.setItem(`resumeScore_${studentEmail}`, String(result.score));
    }
  }, [file, result, studentEmail]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Resume Verification Result</h2>
      <div className={`p-6 rounded-lg shadow-lg bg-white border ${result.status === "True" ? "border-blue-500" : "border-red-500"}`}>
        <p className="text-lg font-semibold mb-2">Resume Status: <span className={result.status === "True" ? "text-blue-600" : "text-red-600"}>{result.status}</span></p>
        <p className="mb-2">Reason: {result.reason}</p>
        <p className="mb-4 font-bold">Score: <span className="text-xl text-blue-700">{result.score}/100</span></p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ResumeVerification;
