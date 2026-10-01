const modules = import.meta.glob<string>('../assets/images/avatars/*.png', {
  eager: true,
  import: 'default',
})

export const avatars = Object.values(modules)