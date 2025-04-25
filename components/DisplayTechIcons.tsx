// import { cn, getTechLogos } from '@/lib/utils'
// import Image from 'next/image';
// import React from 'react'

// const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
//     const techIcons = await getTechLogos(techStack);
//     return (
//         <div className='flex flex-row'>
//             {techIcons.slice(0, 3).map(({ tech, url }, index) => (
//                 <div key={tech} className={cn('relative group bg-dark-300 rounded-full p-2 flex-center, index >= 1 && -ml-3' )}>
//                     <span className='tech-tooltip'>{tech}</span>
//                     <Image src={url} alt={tech} width={100} height={100} className='size-5' />
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default DisplayTechIcons

'use client';

import { cn, getTechLogos } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
  const [techIcons, setTechIcons] = useState<{ tech: string; url: string }[]>([]);

  useEffect(() => {
    const fetchTechIcons = async () => {
      const icons = await getTechLogos(techStack);
      setTechIcons(icons); // Update the state with the fetched icons
    };

    fetchTechIcons();
  }, [techStack]); // Re-fetch when techStack changes

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn('relative group bg-dark-300 rounded-full p-2 flex-center', index >= 1 && '-ml-3')}
        >
          <span className="tech-tooltip">{tech}</span>
          <Image src={url} alt={tech} width={100} height={100} className="size-5" />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
