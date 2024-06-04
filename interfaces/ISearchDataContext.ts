import { ITool } from "./ITool";

export type ISearchDataContext = [
  ITool[],
  React.Dispatch<React.SetStateAction<ITool[]>>
];
