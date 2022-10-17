import { generateMedia } from 'styled-media-query'

export const customMedia = generateMedia({
  smallPhone: '370px',
  midPhone: '400px',
  phone: '500px',
  desktop: '1000px',
  xlDesktop: '1500px'
})