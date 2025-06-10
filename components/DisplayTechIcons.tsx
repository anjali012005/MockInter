// 'use client'
// import Image from "next/image";
// import { cn, getTechLogos } from "@/lib/utils";

// const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
//   const techIcons = await getTechLogos(techStack);

//   return (
//     <div className="flex flex-row">
//       {techIcons.slice(0, 3).map(({ tech, url }, index) => (
//         <div
//           key={tech}
//           className={cn(
//             "relative group bg-dark-300 rounded-full p-2 flex flex-center",
//             index >= 1 && "-ml-3"
//           )}
//         >
//           <span className="tech-tooltip">{tech}</span>

//           <Image
//             src={url}
//             alt={tech}
//             width={100}
//             height={100}
//             className="size-5"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DisplayTechIcons;

// DisplayTechIcons.tsx


'use client';

import Image from "next/image";
import { cn, getTechLogos } from "@/lib/utils";
import { useEffect, useState } from "react";

type TechIcon = {
  tech: string;
  url: string;
};

interface TechIconProps {
  techStack: string[];
}

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([]); // ✅ specify type here

  useEffect(() => {
    const fetchIcons = async () => {
      const icons = await getTechLogos(techStack);
      setTechIcons(icons); // ✅ now this matches the expected type
    };
    fetchIcons();
  }, [techStack]);

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex flex-center",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{tech}</span>

          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
