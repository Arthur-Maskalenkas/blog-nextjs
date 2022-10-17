import { generateMedia } from 'styled-media-query'

export const customMedia = generateMedia({
  midPhone: '400px',
  phone: '500px',
  desktop: '1000px',
  xlDesktop: '1500px'
})