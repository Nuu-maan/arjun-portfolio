import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Satisfy",
    description:
      "Join Satisfy, a vibrant Discord community where people connect and chill. Be part of the fun!",
    thumbnail:
      "https://images-ext-1.discordapp.net/external/FWyvVlH2jzgaIT4jJ8pxNDZVQJDo2a3D2Fo1Ucimx-4/%3Fsize%3D4096/https/cdn.discordapp.com/icons/1315902323658063952/162314841dd973673052f6a662803317.png?format=webp&quality=lossless", // Placeholder image URL
    color: "#2B2D31",
    buttons: [
      { name: "Join Discord", url: "https://discord.gg/satisfy" },
    ],
  },
];

function Card({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="items-strech flex w-full flex-col justify-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow sm:flex-row">
      <img
        src={project.thumbnail}
        alt={`${project.name} logo`}
        style={{ backgroundColor: project.color }}
        className="h-44 rounded-t-2xl object-contain object-center p-10 sm:h-auto sm:max-h-none sm:w-44 sm:rounded-l-2xl sm:rounded-t-none"
      />
      <div className="flex w-full flex-col justify-evenly p-4">
        <h1 className="text-xl font-semibold">{project.name}</h1>
        <p className="mt-3 text-gray-100">{project.description}</p>
        <div className="flex flex-row flex-wrap items-center gap-2">
          {project.buttons.map((button, i) => (
            <a
              key={i}
              className="mt-3 flex w-fit items-center space-x-2 rounded-full bg-white/20 px-5 py-2 text-sm transition-transform active:scale-95"
              href={button.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{button.name}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </div>
    </>
  );
}
