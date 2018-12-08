import dynamic from 'next/dynamic'

const DynamicParallax = dynamic(() => import('./Parallax.jsx'), {
  ssr: false,
})

export { DynamicParallax }
