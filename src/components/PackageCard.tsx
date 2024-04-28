import type Package from "@/types/PackageData";

export default function PackageCard({ data } : { data: Package } ) {
    const items = data.items.map((item) => 
        <li className="mb-[5px] last:mb-0">1x {item.name}</li>
    )

    return (
        <div className="bg-[#3e4444] w-fit rounded-3xl border 
            border-[#535a5a] mb-[50px] max-w-[400px] mx-[50px]">
            <img
                src={data.thumbnail}
                width={400}
                height={400}
                className="rounded-3xl max-h-[400px] max-w-[400px] w-full object-cover"
                alt="" />
            <div className="p-3 pt-[20px]">
                <h3 className="text-xl font-bold">
                    Explorer's Hoodie
                </h3>
                <span className="block font-bold text-sm text-white opacity-55 mt-[8px]">
                    1000 LKR
                </span>
                <ul className="mt-[15px] text-sm  font-bold opacity-90 bg-[#67ac844f]
                    p-3 rounded-2xl translate-x-[-50px] backdrop-blur-md shadow-lg 
                    shadow-neutral-900 border border-[#67ac8455] min-w-[150px]">
                    {items}
                </ul>
                <button className="bg-[#318d62cc] backdrop-blur-sm px-4 py-3 rounded-2xl 
                    font-bold w-full translate-y-[20px] translate-x-[50px] mb-[-50px] 
                    shadow-lg shadow-neutral-900 border border-[#219961bb]
                    max-[500px]:py-2 max-[500px]:text-sm max-[500px]:px-2 max-[500px]:rounded-xl
                    min-w-[150px]">
                    Customize <span className="text-xl max-[500px]:text-sm">&</span> Grab!
                </button>
            </div>
        </div>
    )
}