import dynamic from 'next/dynamic'

const DynamicHeaderLinks = dynamic(() => import('./HeaderLinks.jsx'), {
  ssr: false,
})

export { DynamicHeaderLinks }
