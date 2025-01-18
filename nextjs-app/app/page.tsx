import { Suspense } from "react";
import { AllPosts } from "@/app/components/Posts";

export default async function Page() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 from-40% via-white  relative">
        <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center">
            <div className="flex flex-col gap-4 items-center">
              <div className=" text-md leading-6 uppercase">
                Welcome to my blog!
              </div>
            </div>
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>
                Whether it’s crafting digital solutions, exploring innovative
                ideas, or sharing lessons from my experiences, this blog
                reflects my growth and the work I’m proud to create.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20 prose">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
