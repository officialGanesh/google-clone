import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";

function Pagination() {

  const router = useRouter();
      <Head>
        <title>{(router.query.term)} - Google Search </title>
      </Head>
  const indexAt = Number(router.query.start) || 0;

  return (

    
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      <Head>
        <title>{router.query.term} - Google Search </title>
    </Head>

      {indexAt >= 10 && (
        <Link href={`/search?term${router.query.term}&start=${indexAt-10}`}>
          <a>
          <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5"/>
            <p>Previous</p>
          </div>
          </a>
        </Link>
      )}
      <Link href={`/search?term${router.query.term}&start=${indexAt+10}`}>
          <a>

        <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
          </a>
      </Link>
    </div>
  );
}

export default Pagination;
