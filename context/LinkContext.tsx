
import { useRef, createContext, ReactNode } from "react";

type SectionContextType = {
  projectRef: React.RefObject<any>;
  getInTouchRef: React.RefObject<any>;
  aboutMeRef: React.RefObject<any>;
};

export const SectionContext = createContext<SectionContextType>({} as SectionContextType);

type SectionProviderProps = {
  children: ReactNode;
};

export default function SectionProvider({ children }: SectionProviderProps) {
  const projectRef = useRef<HTMLDivElement>(null);
  const getInTouchRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  return (
    <SectionContext.Provider value={{ projectRef, getInTouchRef, aboutMeRef }}>
      {children}
    </SectionContext.Provider>
  );
}
