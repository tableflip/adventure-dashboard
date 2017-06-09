// TEMP FILE ALERT
import Projects from '../../api/projects/projects'
import slugify from '../../lib/slugify'

export function seedProjects () {
  const projectNames = [
    'CampusConnect',
    'MySurvey',
    'KudosHealth',
    'Tester Feedback'
  ]

  projectNames.forEach((name) => {
    const exists = Projects.find({ name }).count()
    if (!exists) {
      Projects.insert({
        name,
        slug: slugify(name),
        releases: []
      })
    }
  })
}
