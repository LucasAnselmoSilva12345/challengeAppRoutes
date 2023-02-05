import tw from 'tailwind-styled-components';

export const ContainerCardProduct = tw.section`
  container
  mx-auto 
  px-2 
  md:grid 
  md:grid-cols-3 
  md:gap-8
`;

export const BoxProduct = tw.div`
  mb-4
`;

export const NameProduct = tw.h1`
  text-2xl 
  font-bold 
  text-blue-900 
  mb-1
`;

export const DescriptionProduct = tw.p`
  text-sm 
  text-zinc-600
`;
