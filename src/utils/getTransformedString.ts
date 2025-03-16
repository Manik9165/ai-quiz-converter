export const getTransformedString = (str: string) => {
  return `Convert the given paragraph into a 10 Questions Quiz Set. Give the response like - [{question: "", options:["",""], correctAnswer:""}]. Paragraph - ${str}`;
};
