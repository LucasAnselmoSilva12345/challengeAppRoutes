import tw from 'tailwind-styled-components';

export const Section = tw.section`
  container
  mx-auto
  px-1
`;

export const BoxImage = tw.div`
  flex 
  gap-2
`;

export const BoxDescriptionImage = tw.div`
  mt-4
`;

export const TextTitle = tw.h1`
  text-2xl 
  font-bold 
  text-violet-700 
  mb-2
`;

export const TextPrice = tw.span`
  bg-violet-700 
  p-2 
  rounded-lg 
  text-white 
  font-semibold
`;

export const TextDescription = tw.p`
  w-2/5 
  mt-4 
  text-zinc-400
`;
