import { useImageOnLoad } from '../utils'

import type { CSSProperties } from 'react'

interface ImageProps {
  src: {
    thumbnail: string
    fullSize: string
  }
  alt: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'auto' | 'sync'
}

export const Image = ({ src, alt, loading = 'lazy', decoding = 'async' }: ImageProps) => {
  const { handleImageOnLoad, css } = useImageOnLoad()

  const style: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
  }

  return (
    <picture>
      {/* <source type="image/webp" srcSet={''} /> */}
      <img
        src={src.thumbnail}
        alt={alt}
        style={{ ...style, ...css.thumbnail }}
        loading={loading}
        decoding={decoding}
        // srcSet={''}
        sizes="(max-width: 800px) 100vw, 50vw"
      />
      <img
        onLoad={handleImageOnLoad}
        src={src.fullSize}
        alt={alt}
        style={{ ...style, ...css.fullSize }}
        loading={loading}
        decoding={decoding}
        // srcSet={''}
        sizes="(max-width: 800px) 100vw, 50vw"
      />
    </picture>
  )
}
