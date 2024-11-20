import { Button } from "@/components/ui/button";
import TopUser from "./TopUser";

interface CategoryCardProps {
    bg: string; 
    BTNText: string; 
  }
  
  const CategoryCard = ({ bg, BTNText }: CategoryCardProps) => {
    return (
      <div
        className="w-[250px] h-[300px] rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }} 
      >
        <div className="flex h-full  relative ">
            <div className=" ml-3 p-1 py-2">
                <TopUser/>
                <span className=" text-[10px] bg-primary text-white  p-1 px-4 rounded-full">Top Listing</span>
            </div>

            <div className=" absolute bottom-4  flex justify-center w-full">
            <Button className="  rounded-full text-[15px]">
                {BTNText}
            </Button>
            </div>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  