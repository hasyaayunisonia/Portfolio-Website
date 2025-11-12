"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "../registry/magicui/marquee";

import assets from "../assets";

const logos = [
  { src: assets.technologies.ReactLogo, alt: "React" },
  { src: assets.technologies.ViteLogo, alt: "Vite" },
  { src: assets.technologies.VueLogo, alt: "Vue" },
  { src: assets.technologies.NextJsLogo, alt: "Next.js" },
  { src: assets.technologies.JavaScriptLogo, alt: "JavaScript" },
  { src: assets.technologies.TypeScriptLogo, alt: "TypeScript" },
  { src: assets.technologies.PostgresqlLogo, alt: "Postgresql" },
  { src: assets.technologies.ReduxLogo, alt: "Redux" },
  { src: assets.technologies.MuiLogo, alt: "Material UI" },
  { src: assets.technologies.AntdLogo, alt: "Ant Design" },
  { src: assets.technologies.MongodbLogo, alt: "Mongodb" },
  { src: assets.technologies.MySqlLogo, alt: "MySql" },
  { src: assets.technologies.OracleLogo, alt: "Oracle" },
  { src: assets.technologies.CodeIgniterLogo, alt: "CodeIgniter" },
  { src: assets.technologies.PhpLogo, alt: "PHP" },
  { src: assets.technologies.JavaLogo, alt: "Java" },
  { src: assets.technologies.SwaggerLogo, alt: "Swagger" },
  { src: assets.technologies.KafkaLogo, alt: "Kafka" },
  { src: assets.technologies.GitLogo, alt: "Git" },
  { src: assets.technologies.DockerLogo, alt: "Docker" },
];

export default function TechnologiesSection() {
  return (
    <section className="text-white py-20" id="technologies">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {logos.map((logo, i) => (
              <div key={i} className="mx-4 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  // width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
          {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div> */}
        </div>
      </div>
    </section>
  );
}
