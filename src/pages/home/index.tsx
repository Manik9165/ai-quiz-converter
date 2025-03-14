import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Home = () => {
  const [textAreaInput, setTextAreaInput] = useState<string>("");
  return (
    <div className="flex flex-col bg-yellow-100 min-h-screen w-full items-center py-8 px-4">
      <div className="w-full max-w-lg flex flex-col items-start gap-6">
        <p className="font-semibold text-lg md:text-xl text-center md:text-left">
          Convert your large paragraphs into small, easy-to-learn quizzes
        </p>
        <Textarea
          placeholder="Enter Paragraph"
          className="w-full min-h-[120px] md:min-h-[150px]"
          value={textAreaInput}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setTextAreaInput(e.target.value)
          }
        />
        <Button className="w-full md:w-auto cursor-pointer">
          Convert to Quiz
        </Button>
      </div>
    </div>
  );
};

export default Home;
