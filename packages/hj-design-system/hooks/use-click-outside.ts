import { RefObject, useEffect } from "react";

interface UseClickContainsProps {
    targetRef: RefObject<HTMLElement>;
    onClickOutside: () => void;
}

export const useClickOutSide = ({targetRef, onClickOutside}: UseClickContainsProps) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            
          if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
            onClickOutside();
          }
        };
      
        document.addEventListener('click', handleClickOutside);
      
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };

      }, [targetRef]);   
}