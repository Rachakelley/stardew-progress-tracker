import { XMLParser } from "fast-xml-parser";

export const handleFileUpload = (
  event: React.ChangeEvent<HTMLInputElement>,
  setParsedData: (data: unknown) => void
) => {
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const parser = new XMLParser();
      const result = parser.parse(text);
      setParsedData(result);
    };
    reader.readAsText(file);
  }
};