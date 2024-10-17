import { useEffect, useState } from "react";

type Props = {
  selector: string;
  threshold: number;
}

export const useFadeIn = ({ selector, threshold }: Props) => {
  const [visibleElements, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prevVisible) => [
              ...prevVisible,
              (entry.target as HTMLElement).dataset.index,
            ]);
          }
        });
      },
      { threshold }
    );

    const projectElements = document.querySelectorAll(selector);
    projectElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      projectElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, threshold]);
  return visibleElements;
}
