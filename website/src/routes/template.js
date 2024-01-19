import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const bestSellers = [
  {
    name: "Kindle",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=29ab19e698d285fbc261a7973ca1445f&camp=1789&creative=9325&node=133140011",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Baby & Nursery",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=7df18775c90b8950278d8ce5f2655b49&camp=1789&creative=9325&node=165796011",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Tech Gadgets",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=5a964a8694765673a8e44e28256d26ed&camp=1789&creative=9325&node=13900871",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Health & Household",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=fda3198195bf49cce91738217b3bcdde&camp=1789&creative=9325&node=3760901",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Video Games",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=5d18fccfcf755112c71ebbf41c929859&camp=1789&creative=9325&node=979455011",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Mobile Devices",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=312df163f74137e901382a4658aff072&camp=1789&creative=9325&node=229677",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
];

const techGadgetsLinks = [
  {
    name: "Laptops",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=e0958114318874ce86a9db20df3f238e&camp=1789&creative=9325&node=565108",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Monitors",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=30c1fc0bba862e98bea33c4ce5588d90&camp=1789&creative=9325&node=1292115011",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Routers",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=d6dde8ae10729be4bf4e524e76f5253b&camp=1789&creative=9325&node=300189",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Desktops",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=04ae16e0bdff7bfc17f60bbe643ddeb2&camp=1789&creative=9325&node=565098",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Cell Phones",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=27cab6e6348e3bfa53eb881daeaa9173&camp=1789&creative=9325&node=7072561011",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
  {
    name: "Anti-virus & Security",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    amznLink:
      "https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=312df163f74137e901382a4658aff072&camp=1789&creative=9325&node=229677",
    meta: {
      desc: "January 23, 2023",
      clicks: "0",
      updated: "2024-01-19",
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [url, setUrl] = useState("");
  const [affiliateTag, setAffiliateTag] = useState("kjdii-20");
  const [affiliateLink, setAffiliateLink] = useState("");

  const handlePaste = (evt) => {
    evt.preventDefault();
    const asinReg = /(?:[/dp/]|$)([A-Z0-9]{10})/g;
    const paste = evt.target.value;
    const asin = paste.match(asinReg);
    if (asin) {
      setAffiliateLink(
        `https://www.amazon.com/dp${asin[0]}/ref=nosim?tag=${affiliateTag}`
      );
    }
  };

  return (
    <>
      <div className="p-3 flex justify-center content-center  rounded-xl  text-gray-600 mt-5 mx-5 mb-10">
        <p className="text-center">
          🚀 Blast Off to Benefits! Just so you know, when you click on our
          links and make a purchase, something amazing happens. As an Amazon
          Associate, we earn from those qualifying purchases. That's right –
          every time you buy something, you're not just getting something
          awesome; you're also helping us keep the lights on (and maybe even
          fund our next interstellar mission to Planet Bargain!).
        </p>
      </div>
      <div className="flex justify-between mb-10">
        <div className="my-5 mx-5 w-1/2 flex">
          <input
            className="w-full p-3 rounded-xl shadow-lg border border-gray-200 text-sm"
            type="text"
            placeholder="Paste Amazon Link Here"
            value={affiliateLink}
            onChange={handlePaste}
          />
          {affiliateLink === "" ? (
            <button className="w-20 p-3 rounded-xl shadow-lg border border-gray-200 text-sm mx-3 opacity-10">
              RESET
            </button>
          ) : (
            <button
              className="w-20 p-3 rounded-xl shadow-lg border border-gray-200 text-sm mx-3"
              onClick={() => {
                setAffiliateLink("");
              }}
            >
              RESET
            </button>
          )}
        </div>
        <div className="mx-5 flex justify-center text-center text-gray-500 my-auto w-1/2">
          {affiliateLink === "" ? (
            <div className="flex">
              <ArrowLeftIcon className="h-8 w-8 inline-block animate-pulse my-auto mr-4" />
              <p className="my-auto">
                Paste an Amazon Product link to get started!
              </p>
            </div>
          ) : (
            <Link to={affiliateLink} target="_blank" rel="noopener noreferrer">
              <span className="text-gray-700 border-2 border-gray-500 rounded-xl p-2 m-2 hover:border-red-400 hover:text-red-400 animate-pulse">
                My Affiliate Link
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className=" mx-5 my-5 p-3 flex-1 justify-center content-center  ring-2 ring-gray-200 rounded-xl shadow-lg">
        <p className="text-center">
          Fasten Your Seatbelts! We're on a thrilling journey through{" "}
          <span className="font-bold italic">Amazon's best sellers</span>, and
          you're invited! Whether you're a tech geek, a home guru, a super
          parent, or an outdoor enthusiast, we've got something that'll make you
          say, "Wow, I need this!"
        </p>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-5 xl:gap-x-8 m-4">
          {bestSellers.map((category, idx) => (
            <Link
              to={category.amznLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                key={idx}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  {/* <img
                src={client.imageUrl}
                alt={client.name}
                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
              /> */}
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    {category.name}
                  </div>
                  <Menu as="div" className="relative ml-auto">
                    <Transition
                      as="..."
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    ></Transition>
                  </Menu>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Updated</dt>
                    <dd className="flex items-start gap-x-2">
                      <div className="font-medium text-gray-500 text-xs my-auto">
                        {category.meta.updated}
                      </div>
                    </dd>
                  </div>
                </dl>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className=" mx-5 my-5 p-3 flex-1 justify-center content-center  ring-2 ring-gray-200 rounded-xl shadow-lg">
        <p className="text-center">
          🔍 Discover the Best in Technology: Are you ready to upgrade your{" "}
          <span className="font-bold italic">Tech</span> game? Look no further!
          We've scoured Amazon to bring you the latest and greatest in gadgets.
          From smartphones that practically read your mind to laptops that are
          lighter than your weekend feels, we've got tech that'll make your
          friends green with envy.
        </p>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-5 xl:gap-x-8 m-4">
          {techGadgetsLinks.map((category, idx) => (
            <Link
              to={category.amznLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                key={idx}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  {/* <img
                src={client.imageUrl}
                alt={client.name}
                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
              /> */}
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    {category.name}
                  </div>
                  <Menu as="div" className="relative ml-auto">
                    <Transition
                      as="..."
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    ></Transition>
                  </Menu>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Updated</dt>
                    <dd className="flex items-start gap-x-2">
                      <div className="font-medium text-gray-500 text-xs my-auto">
                        {category.meta.updated}
                      </div>
                    </dd>
                  </div>
                </dl>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
