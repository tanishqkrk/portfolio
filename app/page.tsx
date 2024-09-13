import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-3 mb-16">
      <div className="flex gap-12 max-sm:flex-col max-sm:gap-6">
        <div className="space-y-3">
          <pre>
            <code></code>
          </pre>
          <div className="w-52 max-sm:w-36 ">
            <img className="w-full " alt="My face" src={"/me2.jpg"}></img>
          </div>
        </div>
        <div>
          I&apos;m <span className="font-bold">Tanishq Kaushal</span>, a 21 year
          old self-taught <span className="font-bold">software engineer</span>{" "}
          based in New Delhi, India. While working professionally in companies
          like{" "}
          <a
            className="text-blue hover:underline"
            target="_blank"
            href="https://www.getprobooking.com/"
          >
            Probooking
          </a>{" "}
          and currently working at{" "}
          <a
            target="_blank"
            className="text-blue hover:underline"
            href="https://www.asymmetri.in/"
          >
            Asymmetri
          </a>
          , I also like hacking together projects on the side. Currently working
          on{" "}
          <a
            className="text-blue hover:underline"
            target="_blank"
            href="https://github.com/tanishqkrk/briqs"
          >
            Briqs.site
          </a>
          . My tech stack being{" "}
          <span className="font-bold">everything JavaScript</span> (TypeScript,
          NextJS, redux, all that cool stuff). And I&apos;m currently learning
          Golang.
          <br />
          I also practice boxing, lift weights and go on jogs to keep up with my
          unhealthy caffeine habits. Oh! I like solving rubik&apos;s cubes,
          practicing math quizes and play Clash of Clans (I&apos;m a Town hall
          13).
          <br />
          <br />
          <Link href="/work" className="text-blue hover:underline ">
            Read about my work.
          </Link>
          <br />
          <Link href="/resume.pdf" className="text-blue hover:underline">
            Resume.
          </Link>
        </div>
      </div>
    </div>
  );
}
