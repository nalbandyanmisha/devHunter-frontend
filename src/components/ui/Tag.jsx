import React from 'react';

const Tag = function({ children, variant = 'default'}) {
  const variants = {
    'default': 'tag-default',
    'match': 'tag-match',
  }
  return (
      <span className={variants[variant]}>{children}</span>
  )
}

export default Tag;
