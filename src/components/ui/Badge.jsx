import React from 'react';

const Badge = function({ children, variant = 'new'}) {
  const variants = {
    'new': 'badge-new',
  }
  return (
      <span className={variants[variant]}>{children}</span>
  )
}

export default Badge;
