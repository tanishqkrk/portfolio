import Image from "next/image";
import Link from "next/link";

// const keystrokes = {
//   W: "/work",
//   R: "/resume.pdf",
// };

export default function Home() {
  return (
    <div className="space-y-3 mb-16">
      <div className="flex gap-12 max-sm:flex-col max-sm:gap-6">
        <div className="space-y-3">
          <pre>
            <code></code>
          </pre>
          <div className="w-52 max-sm:w-36 ">
            <Image
              width={400}
              height={400}
              className="w-full"
              alt="My face"
              src={"/me2.webp"}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLVvzNL8Wa2rLYty2pxKxqvZc/l+4y7xvnFuIhTMqL25ajtNE8hnY3b2v2pQ/7f//Z"
            ></Image>
          </div>
        </div>
        <div>
          I&apos;m <span className="font-bold">Tanishq Kaushal</span>, a 22 year
          old self-taught <span className="font-bold">software engineer</span>{" "}
          based in New Delhi, India. While working professionally in companies
          like{" "}
          <a
            className="text-brightBlue hover:underline"
            target="_blank"
            href="https://www.getprobooking.com/"
          >
            Probooking
          </a>{" "}
          and currently working at{" "}
          <a
            target="_blank"
            className="text-brightBlue hover:underline"
            href="https://www.asymmetri.in/"
          >
            Asymmetri
          </a>
          , I also like hacking together projects on the side. Currently working
          on{" "}
          <a
            className="text-brightBlue hover:underline"
            target="_blank"
            href="https://kando-work.vercel.app/"
          >
            Kando
          </a>
          . My tech stack being{" "}
          <span className="font-bold">everything JavaScript</span> (TypeScript,
          NextJS, redux, all that cool stuff). And I&apos;m currently learning
          Golang.
          <br />
          I also practice boxing, lift weights and go on jogs to keep up with my
          unhealthy caffeine habits. Oh! I like solving rubik&apos;s cubes,
          practicing math quizes and play Clash of Clans (I&apos;m a Town hall
          14).
          <br />
          <br />
          <Link href="/work" className="text-brightBlue hover:underline ">
            Read about my work.
          </Link>
          <br />
          <Link href="/resume.pdf" className="text-brightBlue hover:underline">
            Resume.
          </Link>
        </div>
      </div>
    </div>
  );
}

// function Keystroke({ letter, action }: { letter: string; action: Function }) {
//   return (
//     <button
//       onClick={action()}
//       className="keystroke max-md:hidden text-white bg-green/80 px-2 text-sm font-semibold"
//     >
//       {letter}
//     </button>
//   );
// }
