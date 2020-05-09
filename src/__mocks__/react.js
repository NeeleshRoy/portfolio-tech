global.window = global
window.addEventListener = () => {}
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node')
}

export * from 'react'
export { default } from 'react'
