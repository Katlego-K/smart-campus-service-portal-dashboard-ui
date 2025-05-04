import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1">
            <div className="">
                <span>2024/2025</span>
                <Image src="/more.png" alt="" width={20} height={20}/>
            </div>
        </div>
    )
}

export default UserCard