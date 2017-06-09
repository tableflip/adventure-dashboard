import Projects from './projects'

export const projects = () => {
  return Projects.find({}, {
    sort: { name: 1 },
    fields: { name: 1, slug: 1 }
  })
}
