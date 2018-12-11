import dynamic from 'next/dynamic'
/* eslint-disable react/display-name */
const DynamicButton = dynamic(() => import('./WindowButton.jsx'), {
  loading: () => <p />,
  ssr: false,
})

export { DynamicButton }
