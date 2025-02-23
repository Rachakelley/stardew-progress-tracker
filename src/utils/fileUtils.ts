import { XMLParser } from "fast-xml-parser";

export const handleFileUpload = (
 event: React.ChangeEvent<HTMLInputElement>,
 setParsedData: (data: unknown) => void,
 onError?: (error: string) => void
) => {
 const file = event.target.files?.[0];
 if (!file) return;

 // Accept both .xml files and extensionless files
 const isXMLFile =
  file.name.toLowerCase().endsWith(".xml") || !file.name.includes(".");

 if (!isXMLFile) {
  onError?.("Please upload a valid Stardew Valley save file or XML file");
  return;
 }

 const reader = new FileReader();
 reader.onload = (e) => {
  try {
   const text = e.target?.result as string;
   const parser = new XMLParser();
   const result = parser.parse(text);

   if (!("?xml" in result)) {
    throw new Error("Invalid XML file format - Missing XML declaration");
   }

   setParsedData(result);
  } catch (error) {
   onError?.(
    error instanceof Error ? error.message : "Failed to parse XML file"
   );
  }
 };

 reader.onerror = () => {
  onError?.("Failed to read file");
 };

 reader.readAsText(file);
};
