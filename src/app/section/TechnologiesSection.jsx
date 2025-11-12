"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "../registry/magicui/marquee";

import ReactLogo from "@/app/images/technologies/reactLogo.png";
import VueLogo from "@/app/images/technologies/vueLogo.png";
import JavaScriptLogo from "@/app/images/technologies/javascriptLogo.png";
import TypeScriptLogo from "@/app/images/technologies/typescriptLogo.png";
import PostgresqlLogo from "@/app/images/technologies/postgresqlLogo.png";
import MongodbLogo from "@/app/images/technologies/mongodbLogo.png";
import MySqlLogo from "@/app/images/technologies/mysqlLogo.png";
import OracleLogo from "@/app/images/technologies/oracleLogo.png";
import JavaLogo from "@/app/images/technologies/javaLogo.png";
import NextJsLogo from "@/app/images/technologies/nextjsLogo.jpg";
import GitLogo from "@/app/images/technologies/gitLogo.png";
import DockerLogo from "@/app/images/technologies/dockerLogo.png";
import CodeIgniterLogo from "@/app/images/technologies/codeigniterLogo.png";
import SwaggerLogo from "@/app/images/technologies/swaggerLogo.png";
import MuiLogo from "@/app/images/technologies/muiLogo.png";
import AntdLogo from "@/app/images/technologies/antdLogo.png";

const logos = [
  { src: ReactLogo, alt: "React" },
  { src: VueLogo, alt: "Vue" },
  { src: NextJsLogo, alt: "Next.js" },
  { src: JavaScriptLogo, alt: "JavaScript" },
  { src: TypeScriptLogo, alt: "TypeScript" },
  { src: PostgresqlLogo, alt: "Postgresql" },
  { src: MuiLogo, alt: "Material UI" },
  { src: AntdLogo, alt: "Ant Design" },
  { src: MongodbLogo, alt: "Mongodb" },
  { src: MySqlLogo, alt: "MySql" },
  { src: OracleLogo, alt: "Oracle" },
  { src: CodeIgniterLogo, alt: "CodeIgniter" },
  { src: JavaLogo, alt: "Java" },
  { src: SwaggerLogo, alt: "Swagger" },
  { src: GitLogo, alt: "Git" },
  { src: DockerLogo, alt: "Docker" },
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
