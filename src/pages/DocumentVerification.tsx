import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const checkDocument = (file: File | null): { status: string; reason: string } => {
  if (!file) return { status: "Invalid", reason: "No file uploaded." };
  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];
  if (!allowedTypes.includes(file.type)) {
    return { status: "Wrong", reason: "Unsupported file type." };
  }
  if (file.size < 10 * 1024) {
    return { status: "Wrong", reason: "File too small to be a valid document." };
  }
  return { status: "Right", reason: "Document passed basic checks." };
};

const DocumentVerification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state?.documentFile as File | null;
  const result = checkDocument(file);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Document Verification Result</h2>
      <div className={`p-6 rounded-lg shadow-lg bg-white border ${result.status === "Right" ? "border-blue-500" : "border-red-500"}`}>
        <p className="text-lg font-semibold mb-2">Status: <span className={result.status === "Right" ? "text-blue-600" : "text-red-600"}>{result.status}</span></p>
        <p className="mb-4">Reason: {result.reason}</p>
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

export default DocumentVerification;
