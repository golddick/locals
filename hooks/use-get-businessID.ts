import { useParams } from "next/navigation"

export const useBusinessID = () => {
 const params = useParams()
 return params.businessID as string
}
