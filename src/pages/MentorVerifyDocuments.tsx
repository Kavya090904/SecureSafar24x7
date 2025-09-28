import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type DocumentCheckResult = { status: string; reason: string; score: number };

const checkDocument = (file: File | null): DocumentCheckResult => {
  if (!file) return { status: "Invalid", reason: "No file uploaded.", score: 0 };
  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];
  if (!allowedTypes.includes(file.type)) {
    return { status: "Fake", reason: "Unsupported file type.", score: 20 };
  }
  if (file.size < 10 * 1024) {
    return { status: "Fake", reason: "File too small to be a valid document.", score: 40 };
  }
  let score = 60;
  if (file.size > 50 * 1024) score += 20;
  if (file.size > 100 * 1024) score += 20;
  if (score > 90) {
    return { status: "Right", reason: "Document passed all checks.", score };
  }
  return { status: "Right", reason: "Document passed basic checks.", score };
};

const MentorVerifyDocuments: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<DocumentCheckResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setResult(null);
  };

  const handleVerify = () => {
    setResult(checkDocument(selectedFile));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Mentor Document Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" accept=".pdf,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} />
          <Button className="mt-4 w-full" onClick={handleVerify} disabled={!selectedFile}>
            Verify Document
          </Button>
          {result && (
            <div className={`mt-6 p-4 rounded border ${result.status === "Right" ? "border-blue-500" : "border-red-500"}`}>
              <p className="font-semibold">Status: <span className={result.status === "Right" ? "text-blue-600" : "text-red-600"}>{result.status}</span></p>
              <p>Reason: {result.reason}</p>
              <p className="font-bold mt-2">Score: <span className="text-xl text-blue-700">{result.score}/100</span></p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorVerifyDocuments;
