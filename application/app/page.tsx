import Link from 'next/link';
import type { Job } from '@prisma/client';
import prisma from '@/db';

export default async function Home() {
  
  const jobsList: Job[] = await prisma.job.findMany();

  const jobsItems = jobsList.map(job => (<li key={job.id}><Link href={`/jobs/${job.id}`}>{job.name}</Link></li>));

  jobsItems.sort((a:Job, b:Job) => Date.parse(a.startDate) - Date.parse(b.startDate));


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
      {jobsItems}
    </ol>
    </div>
  );
}
