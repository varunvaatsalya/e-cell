import Image from "next/image";
import * as FaIcons from "react-icons/fa6";

function page({ params }) {
  return (
    <>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a
                  href="/blogs"
                  className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2"
                >
                  <FaIcons.FaArrowLeftLong />
                  Blogs
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm font-medium text-gray-500">
              Lorem, ipsum dolor
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl lg:max-w-full lg:px-8">
          <div className="w-full flex flex-wrap justify-center md:gap-2 line-clamp-2">
            <Image
              height={1000}
              width={1000}
              src="/images/nidhi1.png"
              alt="image"
              className="max-h-96 w-auto md:rounded-lg"
            />
            <Image
              height={1000}
              width={1000}
              src="/images/sparsh.png"
              alt="image"
              className="max-h-96 w-auto md:rounded-lg"
            />
            <Image
              height={1000}
              width={1000}
              src="/images/nidhi1.png"
              alt="image"
              className="max-h-96 w-auto"
            />
            <Image
              height={1000}
              width={1000}
              src="/images/nidhi4.png"
              alt="image"
              className="max-h-96 w-auto"
            />
            <Image
              height={1000}
              width={1000}
              src="/images/nidhi1.png"
              alt="image"
              className="max-h-96 w-auto"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-5 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 lg:pt-8">
          <div className="text-pink-400 dark:text-pink-700 font-semibold text-sm pb-5">
            Posted On : 23/11/2004
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tenetur, ad autem, est velit aperiam eligendi ut labore accusantium
            maiores quidem placeat illo animi modi?
          </h1>

          <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores ipsam veritatis mollitia perferendis omnis, dolorem ea
                  reiciendis soluta? Esse, veniam animi alias molestias delectus
                  quae, dicta eos vel quibusdam fugit minima id voluptas natus
                  corrupti quia necessitatibus tenetur cumque ipsam, harum
                  architecto ex expedita vitae sit? Reiciendis quo numquam ab,
                  veritatis possimus dignissimos eligendi, expedita sit eum
                  sapiente neque iure dicta libero esse itaque saepe autem
                  suscipit architecto modi tempora voluptates veniam corrupti?
                  Cumque ducimus doloribus numquam, distinctio assumenda beatae.
                  Nesciunt itaque eligendi minima necessitatibus vero cumque at
                  harum, nam, aperiam totam quod in reiciendis. Illum aspernatur
                  qui voluptatibus voluptates rerum odit impedit ipsa voluptate
                  amet. Libero et officiis non a quod animi veniam iusto
                  doloribus, odio ipsa? Nulla repellendus quam vero, adipisci
                  quod error quo alias. Maiores nihil ipsam vero deserunt eius,
                  sint temporibus, aperiam laudantium, ad quam optio quod
                  eligendi non cumque eaque iusto iure reiciendis alias dolorum.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                Highlights
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-base">
                  {/* {product.highlights.map((highlight) => ( */}
                  <li key="1" className="text-gray-400">
                    <span className="text-gray-600 dark:text-gray-400">
                      economics
                    </span>
                  </li>
                  {/* ))} */}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                Aims
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum libero esse iusto eveniet labore tenetur? Veritatis
                  dicta labore voluptatem iure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "E-CELL IET Lucknow",
    description:
      "This is official website of EnterpreneurShip cell of IET Lucknow",
  };
}

export default page;
