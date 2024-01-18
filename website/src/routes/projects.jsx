import React, {useState}from 'react';

const bestSellersLinks = [
<a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=29ab19e698d285fbc261a7973ca1445f&camp=1789&creative=9325&node=133140011">Kindle</a>,
<a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=7df18775c90b8950278d8ce5f2655b49&camp=1789&creative=9325&node=165796011">Baby & Nursery</a>,
<a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=5a964a8694765673a8e44e28256d26ed&camp=1789&creative=9325&node=13900871">Tech Gadgets</a>,
<a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=fda3198195bf49cce91738217b3bcdde&camp=1789&creative=9325&node=3760901">Health & Household</a>,
<a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=dbc314de5014dcff375177352aacc53a&camp=1789&creative=9325&node=979455011">Video Games</a>,
<a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=5d18fccfcf755112c71ebbf41c929859&camp=1789&creative=9325&node=2335752011">Mobile Devices</a>
]


const techGadgetsLinks = [
    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=e0958114318874ce86a9db20df3f238e&camp=1789&creative=9325&node=565108">Laptops</a>,
    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=30c1fc0bba862e98bea33c4ce5588d90&camp=1789&creative=9325&node=1292115011">Monitors</a>,
    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=d6dde8ae10729be4bf4e524e76f5253b&camp=1789&creative=9325&node=300189">Routers</a>,
    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=04ae16e0bdff7bfc17f60bbe643ddeb2&camp=1789&creative=9325&node=565098">Desktops</a>,
    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=27cab6e6348e3bfa53eb881daeaa9173&camp=1789&creative=9325&node=7072561011">Cell Phones</a>,
    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=312df163f74137e901382a4658aff072&camp=1789&creative=9325&node=229677">Anti-virus & Security</a>
]






const Projects = () => {
    const [url, setUrl] = useState("");
    const [affiliateTag, setAffiliateTag] = useState("kjdii-20");
    const [affiliateLink, setAffiliateLink] = useState("");

    const handlePaste = (evt) => {
        evt.preventDefault();
        const asinReg=/(?:[/dp/]|$)([A-Z0-9]{10})/g;
        const paste = evt.target.value
        const asin = paste.match(asinReg);
        if (asin) {
            setAffiliateLink(`https://www.amazon.com/dp${asin[0]}?tag=${affiliateTag}`);
        }
        
      };

    return (
        <div className="flex justify-center w-full h-full bg-gray-200 antialiased">

            <div className="w-2/3 mb-10">
                <div className='my-5 mx-5'>
                    <input className='w-full p-3 rounded-xl shadow-lg' type="text" placeholder="Paste Amazon Link Here" onChange={handlePaste} />
                </div>
                <div className='my-5 mx-5 flex-1 text-center'>
                    
                        {affiliateLink === "" ? "Paste an Amazon link above to get started!" : <p>Here is your <span><a className="font-bold hover:text-red-400" target="_blank" href={affiliateLink}>Generated Link</a></span></p>}
                        {affiliateLink === "" ? "" : <p className='text-xs opacity-50'>A tab will opent to: {affiliateLink}</p>}
                    

                
                </div>
                <div className=' m-5 p-3 flex justify-center content-center bg-white  border border-gray-400 rounded-xl shadow-lg'>
                <p className='text-center'>🚀 Blast Off to Benefits! Just so you know, when you click on our links and make a purchase, something amazing happens. As an Amazon Associate, we earn from those qualifying purchases. That's right – every time you buy something, you're not just getting something awesome; you're also helping us keep the lights on (and maybe even fund our next interstellar mission to Planet Bargain!).</p>
                </div>
            <div className='grid grid-cols-3 gap-3 bg-white rounded-xl'>
                <div className='col-span-3'>

                </div>

                <div className='col-span-3 m-10'>
                <div className='p-3 flex justify-center content-center  ring-2 ring-gray-400 rounded-xl shadow-lg'>
                <p className='text-center'>🚀 Fasten Your Seatbelts! We're on a thrilling journey through <span className='font-bold italic'>Amazon's best sellers</span>, and you're invited! Whether you're a tech geek, a home guru, a super parent, or an outdoor enthusiast, we've got something that'll make you say, "Wow, I need this!"</p>
                </div>
                </div>
                {bestSellersLinks.map((link, idx) => (
                    <div key={idx} className=' text-gray-500 shadow-lg m-5 p-5 ring-2 rounded-xl text-center bg-white ring-gray-200 hover:ring-red-400 font-bold hover:text-red-400'>
                    {link}
                    </div>
                ))}
                <div className='col-span-3 m-10'>
                <div className='p-3 flex justify-center content-center  ring-2 ring-gray-400 rounded-xl shadow-lg'>
                <p className='text-center'>🔍 Discover the Best in Technology: Are you ready to upgrade your <span className='font-bold italic'>Tech</span> game? Look no further! We've scoured Amazon to bring you the latest and greatest in gadgets. From smartphones that practically read your mind to laptops that are lighter than your weekend feels, we've got tech that'll make your friends green with envy.</p>
                </div>
                </div>
                {techGadgetsLinks.map((link, idx) => (
                    <div key={idx} className=' text-gray-500 shadow-lg m-5 p-5 ring-2 rounded-xl text-center bg-white ring-gray-200 hover:ring-red-400 font-bold hover:text-red-400'>
                    {link}
                    </div>
                ))}

                
            </div>
            </div>
            </div>

    );
};

export default Projects;
