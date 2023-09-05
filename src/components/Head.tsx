import React, { useEffect } from 'react';

export function Head({ title }) {
  useEffect(() => {
    document.title = `${title} | Challenge App Routes`;
  }, [title]);

  return <></>;
}
