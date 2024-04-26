import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin-ext"],
});

function page() {
  const callouts = [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc: "/images/nidhi1.png",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description:
        "Journals and note-taking Daily commute essentialsDaily commute essentialsDaily commute essentialsDaily commute essentials",
      imageSrc: "/images/nidhi2.png",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "/images/nidhi3.png",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "/images/nidhi4.png",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
    {
      name: "Travel",
      description:
        "Daily commute essentials Daily commute essentialsDaily commute essentialsDaily commute essentials",
      imageSrc: "/images/sparsh.png",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "/images/nidhi1.png",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];

  return (
    <>
    <div className="mt-6">

      <Navbar />
    </div>

      <div className="bg-gray-100 dark:bg-black">
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          <div className="w-full">
            <div className="w-full tracking-widest text-pink-500 text-lg">
              / WHAT WE DO
            </div>
            <div
              className={
                merriweather.className +
                " w-full my-8 mt-4 font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-4xl "
              }
            >
              These are some of our recent design projects
            </div>
            <hr className="my-8" />
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div
                  key={callout.name}
                  className="group relative hover:cursor-pointer"
                >
                  <a href="#">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white dark:bg-slate-950 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <Image
                        width={800}
                        height={800}
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <article
                      // key="2"
                      className="flex mt-4 max-w-xl flex-col items-start justify-between"
                    >
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">
                          Mar 16, 2020
                        </time>
                        <div className="relative z-10 rounded-full bg-gray-50 dark:bg-slate-900 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-400">
                          Marketing
                        </div>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold line-clamp-2 leading-6 text-gray-900 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                          <span className="absolute inset-0" />
                          Boost your conversion rate Boost your conversion
                        </h3>
                        <p className="my-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          Illo sint voluptas. Error voluptates culpa eligendi.
                          Hic vel totam vitae illo. Non aliquid explicabo
                          necessitatibus unde. Sed exercitationem placeat
                          consectetur nulla deserunt vel. Iusto corrupti dicta.
                        </p>
                      </div>
                    </article>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "E-CELL Blogs",
    description:
      "This is official website of EnterpreneurShip cell of IET Lucknow",
  };
}

export default page;
