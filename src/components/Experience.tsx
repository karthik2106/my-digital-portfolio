import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    title: "2026",
    content: (
      <div>
        <p className="text-foreground text-sm md:text-base font-semibold mb-2">
          GovTech — Software Engineer Intern
        </p>
        <p className="text-muted-foreground text-xs md:text-sm mb-4">
          Jan 2026 – Jul 2026
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Upcoming internship!
        </p>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p className="text-foreground text-sm md:text-base font-semibold mb-2">
          HTX — AI Computer Vision Engineer Intern
        </p>
        <p className="text-muted-foreground text-xs md:text-sm mb-4">
          Jan 2025 – Jun 2025
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
          At HTX, I focused on computer vision, deploying YOLO models for object detection and instance segmentation. I trained multiple models, applied data augmentation techniques, and improved accuracy from 60% to 95% on 2,000+ images.
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          I also co-developed a live traffic monitoring dashboard that streamed real-time video, integrated AI inference results, and displayed detection outputs via WebSockets. This role combined AI, engineering, and system deployment, giving me hands-on experience with model tuning and real-time visualization.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-foreground text-sm md:text-base font-semibold mb-2">
          TVS Motor — Software Engineer Intern
        </p>
        <p className="text-muted-foreground text-xs md:text-sm mb-4">
          May 2024 – Aug 2024
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
          During my internship at TVS Motor, I revamped an internal inventory management dashboard using React and Node.js, improving data accuracy and reducing manual entry time by 40%. I contributed to backend logic, frontend UI flows, and secure access using JWT-based authentication for protected APIs.
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          The project enhanced operational efficiency by streamlining data handling and making processes more automated and reliable. This experience exposed me to full-stack development in a corporate environment.
        </p>
      </div>
    ),
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-background">
      <Timeline data={experienceData} />
    </section>
  );
};

export default Experience;
