import Link from 'next/link';
import type { Job } from '@prisma/client';
import prisma from '@/db';

export default async function Home() {
  
  const jobsList: Job[] = await prisma.job.findMany();

  jobsList.sort((a: Job, b: Job) => {
    return b.startDate.getTime() - a.startDate.getTime();
  });


  const jobsItems = jobsList.map(job => (<ol key={job.id}><Link href={`/jobs/${job.id}`}>{job.startDate.getFullYear()} - {job.name}</Link></ol>));

  return (
    <div>
    <h1> Noah Ovesen</h1>
    <div>You can contact me at (805) 296-8037 or nmovesen@gmail.com</div>
    <br></br>
    <div>Cal Poly Junior and aspiring Systems Administrator. Laser focused, trustworthy, self-motivated, and extreme attention to detail with an avid interest in Networking and Computers.</div>
    <div>Currently manages a network rack composed of 1gig switch, 10gig switch, KVM, Dell Poweredge r720x (with 32TB set in RAID 5 ZFS) with Proxmox, 8 Dell Optiplexes in a Docker Swarm and a PC.</div>
    <div>Self-Hosting TruNAS scale, Airsonic, GlueTun, Deluge, Tailscale, Bitwarden, FTP and SSH server, and Pihole.</div>
    <div>Programmed a rudimentary HTTP Server, File System Emulator, and copies of Linux utilities in C.</div>
    <div>Active learner, recently certified in Comp Tia Network+, Comp Tia Security+ and currently working towards a CCNA Certification. Now building up a home lab from e-waste dumps and used hardware, putting problem solving into practice.</div>
    <div>Experienced working in small teams with Highline Adventures and First Robotics. Programmed and troubleshot robot using the Java programming language.</div>
    <div>Excellent customer service, worked as a courtesy clerk for a grocery store, a zipline guide, and answered calls at Cal Poly ITS Service Desk. Always met customers with a smile and assisted them in every way possible.</div>
    <div>Full time student Junior, 3.58GPA, College of Engineering majoring in Computer Science.</div>
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
    {jobsItems}
    </div>
  );
}
