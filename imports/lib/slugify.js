export default function slugify (str) {
  return str.toLowerCase().replace(/[^a-z0-9_-]/g, '-')
}
