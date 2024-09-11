import {
  Github,
  Instagram,
  Linkedin,
  // MoveUpRight,
  Twitter,
  // X,
} from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-3 mb-16">
      <div className="flex gap-12 max-sm:flex-col max-sm:gap-6">
        <div className="space-y-3">
          <div className="w-52 max-sm:w-36 ">
            <img className="w-full " alt="My face" src={"/me2.jpg"}></img>
            {/* <div>(This is me)</div> */}
          </div>
          {/* <div className="">
            <div className="">Currently:</div>
            <div className="ml-2 text-sm">
              Employed at <span className="link cursor-pointer">Asymmetri</span>{" "}
              <br />
              Building <span className="link cursor-pointer">
                Briqs.site
              </span>{" "}
              <br />
              Learning <span className="link cursor-pointer">Golang</span>
            </div>
          </div> */}
        </div>
        <div>
          I&apos;m <span className="font-semibold">Tanishq Kaushal</span>, a 21
          year old self-taught{" "}
          <span className="font-semibold">software engineer</span> based in New
          Delhi, India. Working professionally in companies like{" "}
          <a
            className="text-blue-600 hover:underline"
            target="_blank"
            href="https://www.getprobooking.com/"
          >
            Probooking
          </a>{" "}
          and currently working at{" "}
          <a
            target="_blank"
            className="text-blue-600 hover:underline"
            href="https://www.asymmetri.in/"
          >
            Asymmetri
          </a>{" "}
          I also like hacking together projects on the side, currently working
          on{" "}
          <a
            className="text-blue-600 hover:underline"
            target="_blank"
            href="https://github.com/tanishqkrk/briqs"
          >
            Briqs.site
          </a>
          . My tech stack being{" "}
          <span className="font-semibold">everything JavaScript</span>{" "}
          (TypeScript, NextJS, Redux, all that cool stuff). And I&apos;m
          currently learning Golang.
          <br />
          I also practice boxing, lift weights and go on jogs to keep up with my
          unhealthy caffeine habits. Oh! I like solving rubik&apos;s cubes,
          practicing math quizes and play Clash of Clans (I&apos;m a Town hall
          13).
          <br />
          <br />
          <Link href="/work" className="text-blue-600 hover:underline ">
            Read about my work.
          </Link>
          <br />
          <Link href="/work" className="text-blue-600 hover:underline">
            Resume.
          </Link>
        </div>
      </div>
      <hr className="bg-gray-300 h-[2px]" />
      <div className="flex gap-1 ">
        <a href="https://www.linkedin.com/in/tanishqkrk/" target="_blank">
          <Linkedin color="#00000090" size={18}></Linkedin>
        </a>
        /
        <a href="http://github.com/tanishqkrk/" target="_blank">
          <Github color="#00000090" size={18}></Github>
        </a>
        /
        <a href="https://instagram.com/tanishqkrkaushal/" target="_blank">
          <Instagram color="#00000090" size={18}></Instagram>
        </a>
        /
        <a href="https://twitter.com/tanishqkrk" target="_blank">
          <Twitter color="#00000090" size={18}></Twitter>
        </a>
      </div>
    </div>
  );
}
