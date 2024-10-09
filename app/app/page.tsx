import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <h1> Hi</h1>
    <div>This Is My Resume</div>
    <h2>Skills</h2>
    <h2>Projects</h2>
    <h2>Jobs</h2>
    <ol>
      <li><Link href="/jobs/1">Job1</Link></li>
      <li><Link href="/jobs/2">Job2</Link></li>
      <li><Link href="/jobs/3">Job3</Link></li>
    </ol>
    </div>
  );
}
