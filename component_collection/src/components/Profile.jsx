
export function Profile({
    name,
    place,
    followers,
    likes,
    photos,
    img,
}) {
    return (
        <>
            <div className="relative w-[200px] h-[600px] bg-white shadow-md sm:w-1/3 sm:h-[500px] ">
                <div 
                    className="absolute top-[10px] left-[10px] w-[50px] h-[50px] rounded-full bg-cover bg-center sm:top-[100px] md:left-[180px] md:w-[150px] md:h-[150px]"
                    style={{backgroundImage:`url(${img})`}}
                >
                </div>
                <div className="h-[200px] bg-linear-to-r from-cyan-500 to-blue-500"></div>
                <div className="flex flex-col justify-center items-center h-[180px] pt-10">
                    <div className="text-3xl font-bold pb-1">{name}</div>
                    <div className="text-lg font-normal text-gray-500 p-2">{place}</div>
                </div>
                <hr />
                <div className="pt-7 ps-8 pe-8 sm:flex justify-between">
                    <div className="text-xl font-bold">{followers}K 
                        <div className="text-base text-gray-400">Followers</div>
                    </div>
                    <div className="text-xl font-bold">{likes}K 
                        <div className="text-base text-gray-400">Likes</div>
                    </div>
                    <div className="text-xl font-bold">{photos}K 
                        <div className="text-base text-gray-400">Photos</div>
                    </div>
                </div>
            </div>
        </>
    )
}