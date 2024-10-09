import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <h1> Hello</h1>
    <div>This Is My Resume</div>
    <div>You can contact me at (805) 296 8037 or nmovesen@gmail.com</div>
    <h2>Skills</h2>
    <ol>
      <li><Link href="/skills/certs">Certifications</Link></li>
      <li><Link href="/skills/langs">Languages</Link></li>
    </ol>
    <h2>Projects</h2>
    <ol>
      <li><Link href="/projects/rack">Network Rack</Link></li>
      <li><Link href="/projects/services">Self-Hosted Services</Link></li>
      <li><Link href="/projects/programming">Programming Projects</Link></li>
    </ol>
    <h2>Jobs</h2>
    <ol>
      <li><Link href="/jobs/ElRancho">ElRancho</Link></li>
      <li><Link href="/jobs/Highline">Highline</Link></li>
      <li><Link href="/jobs/ServiceDesk">ServiceDesk</Link></li>
    </ol>
    </div>
  );
}
