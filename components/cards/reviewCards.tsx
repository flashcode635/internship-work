
export type ReviewCardProps = {
    name: string;
    comment: string;
}
export const ReviewCards=({ name, comment }: ReviewCardProps)=>{
    return(
        <div className="md:w-70 h-full flex flex-col bg-white/15">
            <div className="flex flex-col gap-2 text-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-600">"{comment}"</p>
            </div>
        </div>
)}