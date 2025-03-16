import { getTransformedString } from "@/utils/getTransformedString";
import OpenAI from "openai";

// Custom hook to fetch quiz data based on the input paragraph.
export const useGetQuizData = async (paraInput: string) => {
  const openai = new OpenAI({
    apiKey: process.env.VITE_OPENAI_API_KEY,
  });
  const transformedString = getTransformedString(paraInput);
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [{ role: "user", content: transformedString }],
  });
  console.log(completion.choices);
};
